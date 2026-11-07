---
name: DeepSeek dsh-superagent Prototype
kind: project
summary: DeepSeek Harness 团队开源的主动式编码 Agent 研究原型，可从 GitHub 和可选飞书事件创建任务并产出 PR；官方明确不适合直接生产使用。
firstSeen: 2026-11-07
updated: 2026-11-07
status: research
tags: [agent-harness, proactive-agent, coding-agent, workflow, feishu, open-source]
officialUrl: "https://github.com/deepseek-ai/dsh-superagent-prototype"
githubUrl: "https://github.com/deepseek-ai/dsh-superagent-prototype"
paperUrl: ""
relevancePi67: 97
relevanceAios: 83
maturity: 48
related: [deepseek-harness]
timeline:
  - date: 2026-10-31
    title: 主动式 Coding Agent 研究原型公开
    summary: 团队公开 MIT 代码，作为 DeepSeek Harness 的 bundle；接收获授权的 GitHub / 可选飞书任务，为一个仓库建立 work item、Agent Session 与 PR。
    status: research
  - date: 2026-11-07
    title: 依据官方 README 纳入公开研究
    summary: README 强调仅供研究参考、与内部版本不同、未实现设计文章的所有能力；不能宣称生产就绪或等同官方商用产品。
    status: research
sources:
  - title: "DeepSeek dsh-superagent official source and README"
    url: "https://github.com/deepseek-ai/dsh-superagent-prototype"
    published: "2026-10-31"
  - title: "DeepSeek dsh-superagent authorization design"
    url: "https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/002-authorization.md"
---

## 工程判断

源码和许可证可核验，研究原型完整度仍有限，按规范成熟度 **48/100（早期研究原型）**。README 明确声称不是正式 DeepSeek 产品、可能含 Bug、与内部版本及设计文档不完全一致，因此不能把“主动发现问题并自动执行”描述成无需授权或生产级能力。

## 可借鉴设计

- 将工作请求的授权与执行隔离，明确 observe / approval 等工作模式，不让聊天消息自动转化为高权限写操作。
- 任务归属、独立 Session/工作目录、可追踪 PR 与人类注意力预算可借鉴为通用模式。
- 当前原型仅对单个 GitHub 仓库提供实现；跨平台协作需自建抽象，不应强依赖 GitHub。
