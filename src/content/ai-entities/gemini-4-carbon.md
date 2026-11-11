---
name: Gemini 4 Carbon
kind: model
summary: Google 于 2026-10-28 首次宣布的前沿模型，11 月 10 日面向付费开发者正式开放 API；强调长时程 Agent 与复杂软件工程。
firstSeen: 2026-10-28
updated: 2026-11-11
status: research
tags: [frontier-model, agent, coding, long-horizon, model-evaluation]
officialUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/"
githubUrl: ""
paperUrl: ""
relevancePi67: 96
relevanceAios: 78
maturity: 85
related: [gemini-4-argon]
timeline:
  - date: 2026-10-28
    title: 首次公开宣布
    summary: Google 宣布 Gemini 4 Carbon，并先向部分网络安全防御研究者开放；并非当时已向所有开发者全面提供 API。
    status: watch
  - date: 2026-11-10
    title: 付费开发者 API 开放
    summary: Google 确认 Carbon 可通过 Gemini API 付费层在 AI Studio 使用；Antigravity /swarm 多 Agent 编排仍属预览。厂商或合作基准不等于针对具体产品的独立验证。
    status: research
sources:
  - title: "Google: Gemini 4 Carbon initial announcement"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/"
    published: "2026-10-28"
  - title: "Google: Gemini 4 Carbon now available"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/"
    published: "2026-11-10"
  - title: "Google: Gemini 4 Carbon for developers"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-4-carbon-developers/"
    published: "2026-11-10"
---

## 工程判断

Google 已明确公布付费 API 可用性，因而成熟度评 85（具备严肃生产评测条件），不代表独立证明性能领先。2026-11-30 之前公布的引导价格为每百万输入 / 输出 Token 2 / 10 美元，结束后预告分别调整为 4 / 20 美元，价格与额度应在实际调用时复核。

## 下一步

- 采用相同代码库、相同工具权限、相同成功标准测量长任务完成率、总费用和恢复成本。
- 与现有 Gemini 4 Argon 作适用任务分层比较，不用单一模型替代所有工作负载。
- /swarm 预览能力与模型能力分别评估；不要将厂商 benchmark 视为独立复现。
