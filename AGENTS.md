# Repository Guidelines

## Project Structure & Module Organization

Firefly is an Astro 7 site with Svelte islands and TypeScript configuration. Main source code lives in `src/`: routes in `src/pages`, layouts in `src/layouts`, reusable UI in `src/components`, styles in `src/styles`, content in `src/content`, helpers in `src/utils`, and Markdown/HTML plugins in `src/plugins`. Site configuration is split across `src/config` with matching type definitions in `src/types`; prefer imports from `@/config` when available. Static files served directly belong in `public`, source-managed images in `src/assets`, docs in `docs` and `Firefly-Docs`, and automation in `scripts`.

## Build, Test, and Development Commands

Use `pnpm`; the `preinstall` script enforces it.

- `pnpm dev` or `pnpm start`: run the local Astro dev server.
- `pnpm check`: run Astro diagnostics.
- `pnpm type-check`: run TypeScript with `--noEmit`.
- `pnpm format`: format `src` with Biome.
- `pnpm lint`: run Biome checks and safe fixes on `src`.
- `pnpm build`: generate icons, LQIPs, the Astro build, font subsets, and Pagefind search output in `dist`.
- `pnpm preview`: preview the production build locally.
- `pnpm new-post`: scaffold a new content post.

## Coding Style & Naming Conventions

Biome is the formatter and linter. It uses tabs for indentation and double quotes for JavaScript/TypeScript strings. Keep Astro and Svelte components in `PascalCase` (`PostCard.astro`, `Search.svelte`), config modules in `camelCase` ending with `Config.ts`, and utilities in descriptive kebab case such as `date-utils.ts`. Keep `src/types` aligned with `src/config`. Avoid unrelated formatting churn.

## Testing Guidelines

There is no dedicated unit-test framework configured. Before submitting changes, run `pnpm check`, `pnpm type-check`, and `pnpm build` for rendering, content, or generated asset work. For visual or interactive changes, verify with `pnpm dev` or `pnpm preview` and include screenshots in the PR. Name future tests near the feature they cover, using the local file name as the stem.

## Resume Integration

- The résumé source remains in the separate `67-3d-resume` repository. Do not copy its React/Three.js source into Astro and do not use an iframe for the canonical `/resume/` route.
- `pnpm build` builds the blog only. `pnpm build:with-resume` builds the résumé first, builds the blog, then mounts the verified résumé artifact at `dist/resume/`.
- Cloudflare Pages must use `pnpm build:pages`. That command reads `resume.lock.json`, fetches the exact public résumé commit into a temporary checkout, installs its locked npm dependencies, and then runs the reproducible combined build. The Pages output directory is `dist`.
- The local default résumé checkout is `../../play67/resume`; override it with `RESUME_SOURCE_DIR=/absolute/path/to/resume` on another machine or in CI.
- A deployment build must use a clean résumé checkout. Set `RESUME_REQUIRE_CLEAN=1` and set `RESUME_REVISION` to the expected full commit SHA; the integration script fails if the checkout does not match.
- `resume.lock.json` is the deployment source of truth. After reviewing and pushing a résumé change, advance it to that full commit SHA in a dedicated blog change; a résumé-repository push alone does not trigger this blog's Git-connected Pages project.
- `dist/` remains generated and untracked. Updating the résumé means advancing the reviewed lock and rebuilding; never hand-edit `dist/resume/`.

## Commit & Pull Request Guidelines

Use Conventional Commits, matching the current history: `feat: ...`, `fix: ...`, and `chore: ...`. Keep commits and PRs focused on one concern. PRs should include a concise summary, linked issues when relevant, validation commands run, and screenshots for UI changes. Discuss major features or design changes in an issue or discussion before implementation.

## Security & Configuration Tips

Do not commit secrets, tokens, or service keys in config files. Keep deployment-specific settings in the target platform environment, and review generated files such as `dist`, `src/constants/lqips.json`, and `src/constants/icons.ts` before committing them.
