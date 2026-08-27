# Firefly 上游吸收策略

本仓库是个人博客产品，不是 `CuteLeaf/Firefly` 的自动镜像。Firefly 提供主题与工程改进来源；本仓库的个人内容、品牌配置、构建合同和生产发布链保持最终权威。

## 仓库关系

- `origin`: `https://github.com/bigKING67/blog.git`
- `upstream`: `https://github.com/CuteLeaf/Firefly.git`（仅 fetch；本地 push URL 已禁用）
- 分支: `master`
- 当前共同基线: `33e99a416222564c8ee75f624fde2d13590b2c58`（Firefly `6.15.4`）
- 最近审计的上游 revision: `b29424ce91cebf84f00ee0dac334683f6627ffa2`（2026-08-27）
- 审计范围: 上游相对共同基线新增 131 个提交、涉及 233 个路径；这表示提交级与路径级台账已建立，不表示 233 个文件都完成了逐行代码审查。

## 权威与保护区

以下内容不得因为主题同步而被上游默认值覆盖：

- `src/content/**`：个人文章、专题页和动态内容。
- `src/config/**`：站点身份、导航、评论、音乐、壁纸、社交链接和页面开关；上游新增字段只能按当前产品目标适配。
- `src/assets/**` 与 `public/**` 中的个人头像、月球壁纸、音乐、封面和其他自有素材。
- `resume.lock.json`、`scripts/build-pages.mjs`、`scripts/build-with-resume.mjs`、`scripts/embed-resume.mjs`：固定 revision 的 résumé 集成与 Cloudflare Pages 构建合同。
- `package.json`、`astro.config.mjs` 和部署配置：必须兼容当前 pnpm、Cloudflare Pages 与联合构建链，不能直接采用上游默认值。

## 吸收处置

每个上游候选只使用以下处置之一：

- `ABSORB`：当前架构可直接采用，且有相关验证。
- `ADAPT`：机制值得采用，但实现必须改写以服从本仓库产品或架构合同。
- `KEEP`：当前仓库已经具有等价或更适合的实现，不重复引入。
- `DEFER`：价值可能成立，但缺少使用场景、兼容证据、性能测量或运行态验证。
- `REJECT`：与个人博客目标冲突、会覆盖保护区，或只改变模板默认内容。

## 2026-08-27 审计回执

| 上游候选 | 处置 | 当前决定 |
| --- | --- | --- |
| `dd48f0b` 分享海报优先使用文章 `author` | `ABSORB` | 小型正确性修复；保留全站作者名作为回退。 |
| `dc01d46` Schema.org 与文章元数据 | `ADAPT` | 吸收文章、作者、面包屑、封面和 ProfilePage 语义；个人博客以 `Person` 同时表示作者和发布者；不强制开启 OG 图片。 |
| `82c53fa` 转发页面 `head` slot | `KEEP` | 当前布局架构已经转发 `head` slot，无需重复修改。 |
| `6c393e9` `dist/client` 构建根解析 | `DEFER` | 面向启用 Cloudflare adapter 的 Workers 输出；当前生产合同是 Cloudflare Pages `pnpm build:pages`，需先证明真实产物根不一致再适配。 |
| `d1fbac8`、`164297f`、`4f0dc56`、`06f1334` 等交互/性能链 | `DEFER` | 依赖上游后续布局重构；必须在当前架构中单独测量并完成真实浏览器验证。 |
| `f826a0c` Memos 过滤修复 | `DEFER` | 当前 `memos.enable` 为 `false`，没有活跃调用方。 |
| `b29424c` Takumi OG 引擎迁移 | `DEFER` | 当前 `generateOgImages` 为 `false`，没有必要增加引擎与依赖迁移。 |
| 新书签/VNDB/MAL 页面、壁纸整套重写、模板默认配置/示例内容 | `REJECT` | 不属于当前个人博客需求，且批量同步会冲击保护区和现有月球视觉。 |
| pnpm 11 与整包依赖升级 | `KEEP` | 已由独立依赖维护任务完成，并通过 frozen install、博客门禁与 résumé 联合构建；它不计入本次上游功能吸收。 |

## 安全同步流程

1. 确认 `master` 的 dirty scope，先收口或隔离现有 WIP。
2. `git fetch upstream master` 只更新远端引用，不直接改工作区。
3. 用 `git log master..upstream/master` 和精确 diff 建立候选，不整批 merge。
4. 在临时分支或 detached worktree 中验证候选；同一机制需要的依赖提交必须一起审计。
5. 只把已决定的 `ABSORB` / `ADAPT` 变更应用到任务文件，逐项复核保护区。
6. 按影响运行类型检查、Astro 检查、只读 Biome、构建和真实浏览器验证。
7. commit、push、Pages 部署和生产域名验证继续分别授权。

禁止使用 `gh repo sync --force`、`git reset --hard upstream/master`、整仓 `checkout --theirs` 或手工复制整个上游树来“完成同步”。
