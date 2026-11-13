---
name: Gemini 4 Hydrogen
kind: model
summary: Google 于 2026-11-12 正式推出的 Gemini 4 快速模型，面向日常编程、Agent 工作流和多模态输入；可通过 API 评估，但官方性能结果尚待独立复现。
firstSeen: 2026-11-12
updated: 2026-11-13
status: research
tags: [frontier-model, multimodal, coding, agent, model-routing]
officialUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
githubUrl: ""
paperUrl: ""
relevancePi67: 94
relevanceAios: 88
maturity: 85
related: [gemini-4-argon]
timeline:
  - date: 2026-11-12
    title: Google 正式推出 Hydrogen
    summary: Google 明确将 Hydrogen 定位为快速日常 Agent 执行模型，与偏重长程推理的 Carbon、Argon 区分；官方模型卡确认支持文本、图片、音频和视频输入。
    status: research
  - date: 2026-11-13
    title: AI Radar 纳入独立评测候选
    summary: 已核验官方发布、模型卡和 Google Cloud 文档，具备 API 评估条件；未将厂商比较成绩认定为独立验证。
    status: research
sources:
  - title: "Google: Introducing Gemini 4 Hydrogen"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
    published: "2026-11-12"
  - title: "Google DeepMind: Gemini 4 Hydrogen model card"
    url: "https://deepmind.google/models/model-cards/gemini-4-hydrogen/"
    published: "2026-11-12"
  - title: "Google Cloud: Gemini 4 Hydrogen documentation"
    url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/4-hydrogen"
    published: "2026-11-12"
---

## 工程判断

成熟度 85/100：正式模型、模型卡和公开 API 文档使其具备严肃生产前评估条件；这不是独立的模型质量排名。视频可作为输入不意味着广告框架拆解或时间戳定位已达到生产质量。厂商自报的速度和能力对比须独立复测。

## 评测方向

- 固定任务、工具、提示词、预算和成功判据，对比 Agent 端到端任务完成率与单位成功任务成本。
- 将视频视觉分类、事件时序理解和实际时间戳边界评测分开。
- 记录模型版本、失败恢复、延迟和真实账单成本，避免只比较单轮推理速度。
