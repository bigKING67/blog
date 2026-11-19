---
name: Gemini 4 Neon
kind: model
summary: Google 于 2026-11-18 发布的 Gemini 4 系列多模态模型，强调长任务编程、跨工具执行和效率；已开始通过付费 Gemini API 逐步开放。
firstSeen: 2026-11-19
updated: 2026-11-19
status: research
tags: [frontier-model, agent, coding, multimodal, model-evaluation]
officialUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
githubUrl: ""
paperUrl: ""
relevancePi67: 95
relevanceAios: 79
maturity: 83
related: [gemini-4-argon]
timeline:
  - date: 2026-11-18
    title: Google 正式发布并开始开放 Gemini API
    summary: 官方公布 100 万 Token 上下文及每百万输入/输出 Token 3/15 美元的标准报价；付费入口逐步开放，性能成绩须按对应 Harness 与评测条件理解。
    status: research
  - date: 2026-11-19
    title: 纳入 AI Radar 工程评测候选
    summary: 依据 Google 一手发布核验模型与可接入状态，尚未完成本地端到端任务验证。
    status: research
sources:
  - title: "Google: Introducing Gemini 4 Neon"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
    published: "2026-11-18"
---

## 工程成熟度依据

83/100：已有官方 API、定价和开发者接入方式，具备认真开展生产前评估的条件；但不意味着在所有 Agent、视频理解任务上领先。Google 引述的第三方榜单与厂商内部实验都需检查 Harness、推理强度及成本边界，尚无本知识库独立复现。

## 研究重点

- 在相同代码仓库、工具权限和时间预算下，比较独立模型能力与 Harness 执行效果。
- 对复杂执行、上下文压缩、中途纠错做轨迹级评测；记录完整任务成本。
- 多模态输入能力不直接等于视频时间区间定位或短视频结构拆分准确率。
