# AGENTS.md

本文件是 `myblog` 仓库的项目级代理规范。它只记录会改变实现、验证、跨仓协作或发布行为的事实；全局工程规则继续继承 `~/.codex/AGENTS.md`。更近目录如以后出现 `AGENTS.md` 或 `AGENTS.override.md`，只覆盖其子树，不应复制本文件全文。

## 项目身份与生产边界

- 本项目是六七的 Astro 博客，生产入口为 `https://whois67.52671314.xyz/`，Cloudflare Pages 项目名为 `whois67`。
- 技术栈是 Astro 7、Svelte 5、TypeScript、Tailwind CSS 4 与 Swup；包管理器固定为 pnpm 11.24.0，`preinstall` 会拒绝其他包管理器。
- Git 连接和生产发布以本仓库 `master` 分支为源；Cloudflare Pages 构建命令必须是 `pnpm build:pages`，输出目录是 `dist`。
- `git push`、Pages 构建成功、不可变 `pages.dev` 部署和自定义域名更新是四层证据，必须分别核对，不能相互替代。
- 本仓库不保存 Cloudflare、分析、评论或其他服务的 Token、Cookie、账号口令与私钥。平台变量只在平台侧维护，不读取或回显与当前任务无关的变量值。

## 仓库结构

- `src/pages/`：Astro 路由与 API；`src/layouts/`：页面骨架；`src/components/`：Astro/Svelte UI。
- `src/config/` 与 `src/types/`：功能配置及对应类型；优先使用 `@/config` 等现有别名。
- `src/content/`：文章、专题页和动态内容；个人内容不因主题或上游同步而覆盖。
- `src/styles/`：共享样式；`src/utils/`、`src/plugins/`：工具与 Markdown/HTML 处理链。
- `src/assets/`：参与构建的源图片；`public/`：原样发布的静态文件。
- `scripts/`：构建期脚本；`dist/`：生成产物，保持 untracked，不手工修改或提交。
- `docs/`、`Firefly-Docs/` 与 `CLAUDE.md` 是参考资料，不自动覆盖本文件和当前源码事实。

## 常用命令

```bash
pnpm install --frozen-lockfile
pnpm dev                 # http://localhost:4321
pnpm check               # Astro diagnostics
pnpm type-check          # astro sync + tsc --noEmit
pnpm exec biome check ./src   # 只读 Biome gate
pnpm lint                # Biome safe fixes，会写入 src
pnpm build               # 只构建博客
pnpm build:with-resume   # 使用本机简历 checkout 联合构建
pnpm build:pages         # 使用 resume.lock.json 的固定 revision 重现 Pages 构建
pnpm preview
```

- Node.js 使用 22.13 或更新的受支持版本；不要因本机能运行就降低 Cloudflare 构建环境要求。
- `pnpm-workspace.yaml` 是 pnpm 项目设置真源：仅允许 `esbuild` 与 `workerd` 运行安装脚本，并对 `@swup/astro` 尚未修复的 build-only 依赖做精准安全 override；不要改成全局放行脚本。
- 更新 lock 时必须通过 pnpm 的 supply-chain policy。不得用 `--trust-lockfile` 绕过最小发布等待期；旧 lock 不合规时，在隔离临时 worktree 中重新解析，再回到主工作区执行 frozen install。
- `pnpm type-check` 必须在全新 checkout 中独立可运行，因此先执行 `astro sync`；不能依赖一次旧构建遗留的 `.astro/` 类型。
- `pnpm lint` 带 `--write`，不是只读检查。审查或基线阶段优先执行 `pnpm exec biome check ./src`。
- `pnpm build` 会生成 LQIP、字体子集和 Pagefind 索引。若工作区有无关图片 WIP，使用干净临时 worktree 验证，避免让生成器把无关素材带入 `src/constants/lqips.json`。
- 只有图片输入或生成合同确实变化时才提交 `src/constants/lqips.json`；提交前逐项检查新增、删除和 hash 变化。

## 代码与前端约定

- Biome 使用 tab 缩进和 JavaScript/TypeScript 双引号；Astro/Svelte 组件使用 `PascalCase`，配置模块使用 `camelCase`，工具文件使用描述性 kebab-case。
- 保持 Astro/Svelte/TypeScript 现有边界；不要为消除局部类型错误重复维护内容集合 schema，优先修复生成类型、导入类型或真正的边界定义。
- 复用现有组件、图标族、tokens 和交互模式；没有证据时不新增第二套视觉语言或通用 `utils/common/misc` 抽象。
- 可见页面、交互、导航、主题、响应式或性能改动必须运行真实浏览器 smoke；布局变化至少检查桌面与约 390px 视口。静态构建不能证明视觉和交互正确。
- 当前没有仓库级 `DESIGN.md`。普通改动以现有 tokens、共享组件和生产运行态为视觉权威；若要系统性重设计，再在同一授权范围内建立 `DESIGN.md`，不要把跨仓发布规则混入设计文档。
- `l2d-widget` 是单文件预打包的可选模块，无法由 Vite 再拆分；其构建阈值是 700 kB。提高阈值不等于性能通过，启用 Live2D 时仍须核对实际网络加载、移动端隐藏和交互成本。

## Dirty worktree 与 Git

1. 修改前运行 `git status --short --branch`，识别 tracked、untracked、generated 和跨任务 WIP。
2. 只修改当前任务文件；不移动、删除、覆盖或顺带提交用户的内容、图片、草稿与实验文件。
3. commit 只做 scoped add 和 scoped commit，禁止 `git add -A`；提交前检查 scoped diff、`git diff --cached --check` 和暂存路径清单。
4. `commit`、`push`、Cloudflare 配置写入、部署、域名变更和回滚分别授权。一个动作的授权不自动扩展到另一个动作。
5. 需要在 dirty 主工作区验证全量生成或联合构建时，优先使用 detached 临时 worktree；清理前先确认临时 worktree 没有需保留的证据。

## 简历跨仓架构

- 简历源码保持在独立仓库 `https://github.com/bigKING67/67-3d-resume`；本机默认路径是 `/Users/gaoqian/Documents/sixseven/play67/resume`，联合构建默认相对路径为 `../../play67/resume`。
- 简历项目基于 `dayinji/sen-3d-resume`，但上游吸收只在简历仓库按其 `AGENTS.md`、`DESIGN.md` 和 `UPSTREAM.md` 处理；博客仓库不直接 merge 或复制上游源码。
- 博客只消费已审核、已推送的简历完整 Git revision。`resume.lock.json` 是 Pages 部署的简历来源真源，schema、仓库 URL 和 40 位小写 SHA 都必须通过 `scripts/build-pages.mjs` 校验。
- `pnpm build:pages` 会在临时目录初始化 Git、只 fetch lock 指定 SHA、detached checkout、运行简历 `npm ci --include=dev`，再以 `RESUME_REQUIRE_CLEAN=1` 和 `RESUME_REVISION=<lock SHA>` 执行联合构建。
- `pnpm build:with-resume` 用于本机已存在 checkout：先构建简历 `web/`，再构建博客，最后由 `scripts/embed-resume.mjs` 装配到 `dist/resume/`。
- `RESUME_SOURCE_DIR` 只覆盖本机简历 checkout 路径；不能用它绕过 `RESUME_REVISION`、clean checkout 或 lock 校验。
- 简历 `web/vite.config.ts` 的相对子目录资源合同必须成立；装配脚本发现根绝对资源 URL、缺少 `index.html`、`models/me.glb`、`textures/env.hdr` 或 revision 不匹配时必须失败关闭。
- `/resume/_resume-build.json` 是构建回执，至少核对 schema、route、source repository、source revision、source state、文件数、总字节数和 tree SHA-256；不要手工伪造或修改。

## 简历入口与产品合同

- 规范入口是 `https://whois67.52671314.xyz/resume/`，是同域下的独立完整页面，不使用 iframe，也不把 React Three Fiber 源码并入 Astro 页面。
- 博客主导航不直接增加“简历”。入口保留在“链接”菜单中，用“简历”替换“博客仓库”，并在个人信息卡片的社交图标末尾保留一枚简历入口。
- 所有响应式副本的简历链接都使用 `/resume/` 和 `target="_blank"`；调整导航或个人卡片时必须同时核对桌面、移动端和隐藏副本，避免只改一个 DOM 分支。
- 博客与简历视觉互不覆盖；共享的是域名和发布流水线，不是 CSS、组件树或客户端运行时。

## 跨仓更新流程

1. 在简历仓库完成修改，运行其 lint、typecheck/build 和所需真实浏览器验证。
2. 单独审查简历 scoped diff；得到授权后独立 commit、push，并确认本地 HEAD 与远端分支一致。
3. 在博客仓库只把 `resume.lock.json` 推进到该已验证的完整 SHA，不使用分支名、tag、短 SHA 或未推送的本地 commit。
4. 运行 `pnpm build:pages`；检查联合构建回执、`dist/resume/` 关键资源和博客自身构建结果。
5. 单独审查博客 scoped diff；得到授权后独立 commit、push。简历 commit 和博客 lock commit 不合并为一个跨仓“逻辑提交”。
6. Cloudflare Git 部署完成后，分别核对不可变 `pages.dev` 地址和自定义域名的 `/`、`/resume/`、`/resume/_resume-build.json`、GLB/HDR/JS 资源。
7. 用真实浏览器确认博客两个入口、`target="_blank"`、简历桌面与窄视口 WebGL，以及没有横向溢出或永久 loading。

## 回滚与故障边界

- 简历发布回滚优先把 `resume.lock.json` 恢复到上一个已知可用的完整 SHA，再运行同一 `pnpm build:pages`；不要手工从旧 `dist/` 拼文件。
- 博客页面回滚和简历 revision 回滚是两个范围。先根据 `/resume/_resume-build.json` 判断问题属于博客 source、简历 source、联合产物、Pages 部署还是自定义域名缓存。
- Git push 成功但 Pages 未完成时，只能报告远端 source 已更新；Pages 构建成功但自定义域名仍旧时，只能报告不可变部署可用、自定义域名待传播或待排查。
- Pages 构建需要访问 GitHub 和 npm registry；外部提供方故障要保留失败层和可重试命令，不能改成浮动 revision 或跳过 lock 来“让构建变绿”。

## 验证与交付

- 普通 TypeScript/内容改动：`pnpm check`、`pnpm type-check`、只读 Biome gate；按影响补 `pnpm build`。
- 构建、路由、依赖或跨仓改动：上述检查加 `pnpm build:pages`，并检查 clean checkout 可复现性和失败关闭的负向样本。
- 可见 UI 改动：加真实浏览器桌面/移动端、交互、主题与可访问性检查；只有实际截图产物才能报告截图证据。
- 发布交付必须分别报告：博客源码 SHA、简历源码 SHA、lock SHA、构建回执、远端分支、Pages 部署和生产域名证据，以及仍未验证的层。
- 最终状态保留无关 WIP 清单；不能用“工作区 dirty”笼统掩盖本任务文件是否已经 scoped clean。
