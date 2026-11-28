---
name: "TransHarness"
kind: paper
summary: "从同任务成功与失败轨迹对照提取可迁移的 Harness 干预策略。"
firstSeen: 2026-11-28
updated: 2026-11-28
status: watch
tags: ["agent-harness","coding","evaluation"]
officialUrl: ""
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.33757"
relevancePi67: 98
relevanceAios: 84
maturity: 35
related: ["context-evo","swe-critix"]
sources:
  - title: "Original arXiv paper"
    url: "https://arxiv.org/abs/2611.33757"
    published: "2026-11-25"
timeline:
  - date: 2026-11-28
    title: "核验原始论文并纳入研究"
    summary: "作者报告 300 条测试分布之外的源轨迹，在 DeepSWE v1.1 和 Terminal-Bench 2.1 分别达到 76.4% 和 95.5%；未独立复现，未确认公开实现。"
    status: watch
---

## 工程判断

将触发条件与诊断指引配对，并使用跨任务重放和独立语义选择降低对原始解法的依赖。

pi-67 可将失败轨迹沉淀为条件化检查，使用未参与优化的任务集做消融、回归和成本测试；AIOS 同样可评估跨内容类别迁移。

35/100。作者报告 300 条测试分布之外的源轨迹，在 DeepSWE v1.1 和 Terminal-Bench 2.1 分别达到 76.4% 和 95.5%；未独立复现，未确认公开实现。
