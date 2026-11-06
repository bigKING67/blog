---
name: Just-In-Time Agent Memory (JAM)
kind: paper
summary: 研究按实际请求在运行时构建 Agent 上下文的记忆系统，组合分层历史存储、证据探索与训练式检索。
firstSeen: 2026-09-28
updated: 2026-11-06
status: research
tags: [agent-memory, context-engineering, retrieval, open-source, long-context]
officialUrl: "https://arxiv.org/abs/2609.34385"
githubUrl: "https://github.com/VectorSpaceLab/general-agentic-memory"
paperUrl: "https://arxiv.org/abs/2609.34385"
relevancePi67: 97
relevanceAios: 83
maturity: 56
related: [openviking, hindsight, context-evo]
timeline:
  - date: 2026-09-28
    title: JAM 原始论文发表
    summary: 作者提出保留原始层级历史，运行时按查询主动检索证据，而非仅依赖提前压缩的静态摘要；实验结论来自论文作者。
    status: research
  - date: 2026-11-06
    title: 核验一手论文与对应 GitHub 研究代码
    summary: 证实论文及公开代码存在；尚未进行基于真实长期任务的独立复现。
    status: research
sources:
  - title: "Original paper: Just-In-Time Agent Memory with Runtime Agentic Research"
    url: "https://arxiv.org/abs/2609.34385"
    published: "2026-09-28"
  - title: "Authors' code: general-agentic-memory"
    url: "https://github.com/VectorSpaceLab/general-agentic-memory"
---

## 工程解读

完整日志和可检索摘要分层共存，按具体任务动态决定精读内容，避免过早摘要损失细粒度证据。适合与既有记忆/检索系统作互补评测，不建议直接引入重复的平行存储栈。

## 成熟度与后续

56/100：论文与开源研究代码可核验，属于早期原型，作者基准结果尚未独立复现。
