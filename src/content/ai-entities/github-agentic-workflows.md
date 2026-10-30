---
name: GitHub Agentic Workflows
kind: project
summary: GitHub Next 开源的仓库 Agent 工作流工具，以 Markdown 描述推理任务，编译成 GitHub Actions，并通过只读默认权限、沙箱和 safe outputs 管理执行风险；2026-10-28 GA。
firstSeen: 2026-10-30
updated: 2026-10-30
status: research
tags: [agent, open-source, github-actions, automation, security, workflow]
officialUrl: "https://github.github.com/gh-aw/"
githubUrl: "https://github.com/github/gh-aw"
paperUrl: ""
relevancePi67: 92
relevanceAios: 78
maturity: 84
related: []
timeline:
  - date: 2026-10-28
    title: GitHub Agentic Workflows 达到 GA
    summary: GitHub 宣布正式可用，支持在 Markdown 定义工作流并编译到 Actions，可选 Copilot 或自有编码 Agent；默认只读与受控输出。产品 GA 不等于相关工作流结果均经独立验证。
    status: research
sources:
  - title: "GitHub: Agentic Workflows generally available"
    url: "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/"
    published: "2026-10-28"
  - title: "Official gh-aw repository"
    url: "https://github.com/github/gh-aw"
  - title: "GitHub Agentic Workflows official documentation"
    url: "https://github.github.com/gh-aw/about/"
---

## 工程判断

成熟度 **84/100**：项目开源且达到 GA，具备严肃工程评估基础。默认将确定性的 CI/build/test 保留在常规 Actions，推理型仓库任务使用 Agentic Workflows；读写隔离、网络控制、预算与 safe outputs 是关键设计。官方客户成效属于案例披露，不能当作独立的投入产出结论。官方仓库提示部分历史版本曾有安全漏洞，应按当前安全公告评估升级。

## 下一步

- 对比任务成功率、提示词/编译 YAML 可审计性、权限边界与 CI 成本。
- 其依赖 GitHub Actions；跨平台 Agent 基础设施应借鉴协议思想，不强制绑定 GitHub。
- 对自动文档更新、CI 故障调查做小规模沙箱实验；不授权 Agent 自动合并。
