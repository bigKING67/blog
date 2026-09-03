import { spawnSync } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const BLOG_ROOT = resolve(SCRIPT_DIR, "..");
const LOCK_PATH = resolve(BLOG_ROOT, "resume.lock.json");
const EXPECTED_SCHEMA = "whois67.resume-source-lock.v1";
const EXPECTED_REPOSITORY = "https://github.com/bigKING67/67-3d-resume.git";
const REVISION_PATTERN = /^[0-9a-f]{40}$/;

function run(command, args, { cwd, env = process.env } = {}) {
	const result = spawnSync(command, args, {
		cwd,
		env,
		stdio: "inherit",
	});
	if (result.error) throw result.error;
	if (result.status !== 0) {
		throw new Error(
			`${command} ${args.join(" ")} exited with status ${result.status}`,
		);
	}
}

function runPnpm(args, options) {
	const invokedCli = process.env.npm_execpath;
	if (invokedCli) {
		return run(process.execPath, [invokedCli, ...args], options);
	}
	const command = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
	return run(command, args, options);
}

function npmEnvironment(env = process.env) {
	const sanitized = { ...env };
	// pnpm needs this project bootstrap setting, but npm 11 rejects inherited
	// pnpm-only config as an unknown environment option.
	delete sanitized.npm_config_manage_package_manager_versions;
	return sanitized;
}

function readOutput(command, args, cwd) {
	const result = spawnSync(command, args, {
		cwd,
		encoding: "utf8",
		stdio: ["ignore", "pipe", "inherit"],
	});
	if (result.error) throw result.error;
	if (result.status !== 0) {
		throw new Error(
			`${command} ${args.join(" ")} exited with status ${result.status}`,
		);
	}
	return result.stdout.trim();
}

async function readLock() {
	const lock = JSON.parse(await readFile(LOCK_PATH, "utf8"));
	if (lock.schema !== EXPECTED_SCHEMA) {
		throw new Error(`Unsupported résumé lock schema: ${lock.schema}`);
	}
	if (lock.repository !== EXPECTED_REPOSITORY) {
		throw new Error(`Unexpected résumé repository: ${lock.repository}`);
	}
	if (!REVISION_PATTERN.test(lock.revision)) {
		throw new Error("Résumé lock revision must be a lowercase full commit SHA");
	}
	return lock;
}

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
let temporaryRoot;

try {
	const lock = await readLock();
	temporaryRoot = await mkdtemp(join(tmpdir(), "whois67-resume-"));
	const resumeRoot = resolve(temporaryRoot, "source");
	await mkdir(resumeRoot);

	run("git", ["init", "--quiet"], { cwd: resumeRoot });
	run("git", ["remote", "add", "origin", lock.repository], {
		cwd: resumeRoot,
	});
	run(
		"git",
		["fetch", "--quiet", "--depth=1", "--no-tags", "origin", lock.revision],
		{ cwd: resumeRoot },
	);
	run("git", ["checkout", "--quiet", "--detach", "FETCH_HEAD"], {
		cwd: resumeRoot,
	});

	const resolvedRevision = readOutput("git", ["rev-parse", "HEAD"], resumeRoot);
	if (resolvedRevision !== lock.revision) {
		throw new Error(
			`Résumé checkout mismatch: expected ${lock.revision}, got ${resolvedRevision}`,
		);
	}

	run(npmCommand, ["ci", "--include=dev"], {
		cwd: resolve(resumeRoot, "web"),
		env: npmEnvironment(),
	});
	runPnpm(["run", "build:with-resume"], {
		cwd: BLOG_ROOT,
		env: {
			...process.env,
			RESUME_SOURCE_DIR: resumeRoot,
			RESUME_REVISION: lock.revision,
			RESUME_REQUIRE_CLEAN: "1",
		},
	});
} catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
} finally {
	if (temporaryRoot) {
		await rm(temporaryRoot, { recursive: true, force: true });
	}
}
