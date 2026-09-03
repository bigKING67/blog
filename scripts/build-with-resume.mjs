import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { embedResume, resolveResumeRoot } from "./embed-resume.mjs";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const BLOG_ROOT = resolve(SCRIPT_DIR, "..");
const RESUME_ROOT = resolveResumeRoot();

function run(command, args, cwd, env = process.env) {
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

function runPnpm(args, cwd) {
	const invokedCli = process.env.npm_execpath;
	if (invokedCli) {
		return run(process.execPath, [invokedCli, ...args], cwd);
	}
	const command = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
	return run(command, args, cwd);
}

function npmEnvironment(env = process.env) {
	const sanitized = { ...env };
	// Keep pnpm's package-manager bootstrap option out of child npm processes.
	delete sanitized.npm_config_manage_package_manager_versions;
	return sanitized;
}

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

try {
	run(
		npmCommand,
		["run", "build"],
		resolve(RESUME_ROOT, "web"),
		npmEnvironment(),
	);
	runPnpm(["run", "build"], BLOG_ROOT);
	const receipt = await embedResume({ resumeRoot: RESUME_ROOT });
	console.log(JSON.stringify(receipt, null, 2));
} catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
}
