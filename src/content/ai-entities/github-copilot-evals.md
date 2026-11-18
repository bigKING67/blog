---
name: "GitHub Copilot Evals"
kind: project
summary: "GitHub 于 2026-11-17 公开预览的可重复 Agent 评测插件项目，为 Skills、自定义 Agent 与 MCP 工具创建、运行并比较评测，使用 Vally 本地评测引擎。"
firstSeen: 2026-11-18
updated: 2026-11-18
status: research
tags: ["agent-evaluation", "coding-agent", "skills", "mcp", "developer-tooling"]
officialUrl: "https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview/"
githubUrl: "https://github.com/github/evals"
paperUrl: ""
relevancePi67: 96
relevanceAios: 86
maturity: 74
related: ["pi-67-evaluation", "review-craft-evaluation"]
timeline:
  - date: 2026-11-17
    title: "GitHub Copilot Evals 公开预览"
    summary: "支持为 Skill、Agent、MCP 建立评测、审阅、运行和前后对比，底层使用 Vally；执行评测可能产生模型费用。"
    status: research
  - date: 2026-11-18
    title: "核验代码与许可限制"
    summary: "已核实官方仓库允许阅读源码，但使用 GitHub Limited Use Source License，不能将其当成可自由集成商用的开源许可证。"
    status: research
sources:
  - title: "GitHub: Copilot Evals public preview"
    url: "https://github.blog/changelog/2026-11-17-github-copilot-evals-is-now-in-public-preview/"
    published: "2026-11-17"
  - title: "GitHub Copilot Evals source repository and license"
    url: "https://github.com/github/evals"
---

## 工程判断

74/100：具有可运行的插件、扩展与本地评测引擎，仍处预览且附有限定使用许可。建议学习评测用例、轨迹采样、回归与审批设计，不直接把代码拷入商业项目。

## 追踪要点

- 后续监测正式发布、许可或开放范围变化，重要变化追加 timeline。
- 使用真实任务与固定评测集独立验证，不以厂商基准替代工程测试。
