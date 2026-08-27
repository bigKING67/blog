import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
	cp,
	mkdir,
	readdir,
	readFile,
	rm,
	stat,
	writeFile,
} from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_PATH = fileURLToPath(import.meta.url);
const BLOG_ROOT = resolve(dirname(SCRIPT_PATH), "..");
const DEFAULT_RESUME_ROOT = resolve(BLOG_ROOT, "../../play67/resume");
const TARGET_DIR = resolve(BLOG_ROOT, "dist/resume");
const REVISION_PATTERN = /^[0-9a-f]{40}$/;

function isTruthy(value) {
	return ["1", "true", "yes", "on"].includes(String(value || "").toLowerCase());
}

function runGit(resumeRoot, args) {
	return execFileSync("git", ["-C", resumeRoot, ...args], {
		encoding: "utf8",
		stdio: ["ignore", "pipe", "pipe"],
	}).trim();
}

function assertSeparateDirectories(sourceDir, targetDir) {
	const sourcePrefix = `${sourceDir}${sep}`;
	const targetPrefix = `${targetDir}${sep}`;
	if (
		sourceDir === targetDir ||
		sourceDir.startsWith(targetPrefix) ||
		targetDir.startsWith(sourcePrefix)
	) {
		throw new Error(
			"Resume source and blog target directories must be separate",
		);
	}
}

async function collectFiles(rootDir, currentDir = rootDir) {
	const entries = await readdir(currentDir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const absolutePath = resolve(currentDir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await collectFiles(rootDir, absolutePath)));
		} else if (entry.isFile()) {
			files.push(relative(rootDir, absolutePath).replaceAll(sep, "/"));
		}
	}

	return files.sort();
}

async function createArtifactReceipt(targetDir) {
	const files = await collectFiles(targetDir);
	const treeHash = createHash("sha256");
	let totalBytes = 0;

	for (const file of files) {
		const absolutePath = resolve(targetDir, file);
		const content = await readFile(absolutePath);
		const fileHash = createHash("sha256").update(content).digest("hex");
		totalBytes += content.byteLength;
		treeHash.update(file);
		treeHash.update("\0");
		treeHash.update(fileHash);
		treeHash.update("\n");
	}

	return {
		file_count: files.length,
		total_bytes: totalBytes,
		tree_sha256: treeHash.digest("hex"),
	};
}

export function resolveResumeRoot() {
	return resolve(process.env.RESUME_SOURCE_DIR || DEFAULT_RESUME_ROOT);
}

export async function embedResume({ resumeRoot = resolveResumeRoot() } = {}) {
	const sourceDir = resolve(resumeRoot, "web/dist");
	assertSeparateDirectories(sourceDir, TARGET_DIR);

	const requiredFiles = [
		resolve(resumeRoot, "web/package.json"),
		resolve(sourceDir, "index.html"),
		resolve(sourceDir, "models/me.glb"),
		resolve(sourceDir, "textures/env.hdr"),
	];
	for (const requiredFile of requiredFiles) {
		if (!(await stat(requiredFile).catch(() => null))?.isFile()) {
			throw new Error(`Missing résumé build input: ${requiredFile}`);
		}
	}

	const indexHtml = await readFile(resolve(sourceDir, "index.html"), "utf8");
	if (/\b(?:src|href)=["']\/(?!\/)/.test(indexHtml)) {
		throw new Error(
			"Résumé build contains root-absolute asset URLs and is unsafe at /resume/",
		);
	}

	const revision = runGit(resumeRoot, ["rev-parse", "HEAD"]);
	const sourceDirty =
		runGit(resumeRoot, ["status", "--porcelain", "--untracked-files=all"]) !==
		"";
	const expectedRevision = String(process.env.RESUME_REVISION || "")
		.trim()
		.toLowerCase();
	if (expectedRevision && !REVISION_PATTERN.test(expectedRevision)) {
		throw new Error("RESUME_REVISION must be a full 40-character commit SHA");
	}
	if (expectedRevision && expectedRevision !== revision) {
		throw new Error(
			`Résumé revision mismatch: expected ${expectedRevision}, got ${revision}`,
		);
	}
	if (
		(isTruthy(process.env.RESUME_REQUIRE_CLEAN) || isTruthy(process.env.CI)) &&
		sourceDirty
	) {
		throw new Error(
			"Résumé checkout is dirty; refusing a reproducible integration build",
		);
	}

	await rm(TARGET_DIR, { recursive: true, force: true });
	await mkdir(dirname(TARGET_DIR), { recursive: true });
	await cp(sourceDir, TARGET_DIR, { recursive: true });

	const artifact = await createArtifactReceipt(TARGET_DIR);
	const receipt = {
		schema: "whois67.resume-build.v1",
		route: "/resume/",
		source_repository: "https://github.com/bigKING67/67-3d-resume",
		source_revision: revision,
		source_state: sourceDirty ? "dirty" : "clean",
		artifact,
	};
	await writeFile(
		resolve(TARGET_DIR, "_resume-build.json"),
		`${JSON.stringify(receipt, null, 2)}\n`,
		"utf8",
	);

	return receipt;
}

if (process.argv[1] && resolve(process.argv[1]) === SCRIPT_PATH) {
	embedResume()
		.then((receipt) => console.log(JSON.stringify(receipt, null, 2)))
		.catch((error) => {
			console.error(error instanceof Error ? error.message : error);
			process.exitCode = 1;
		});
}
