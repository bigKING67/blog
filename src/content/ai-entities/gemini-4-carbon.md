---
name: Gemini 4 Carbon
kind: model
summary: Google 于 2026-10-28 公布的新一代前沿模型，重点定位网络安全防御、长时程编程和 Agent 任务；初期仅向部分可信安全合作伙伴开放。
firstSeen: 2026-10-29
updated: 2026-10-29
status: watch
tags: [frontier-model, agent, coding, cybersecurity, multimodal, model-evaluation]
officialUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/"
githubUrl: ""
paperUrl: ""
relevancePi67: 91
relevanceAios: 66
maturity: 51
related: [gemini-4-argon]
timeline:
  - date: 2026-10-29
    title: 核验 10 月 28 日官方发布，列为受限访问的评测观察对象
    summary: Google 宣布 Gemini 4 Carbon，并说明先向部分网络安全防御合作伙伴开放，随后逐步扩大访问；公布的安全、代码及长任务基准尚未在本知识库独立复现，因此不标记为生产可评测或已采用。
    status: watch
sources:
  - title: "Google: Introducing Gemini 4 Carbon"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/"
    published: "2026-10-28"
---

## 工程判断

工程成熟度 **51/100** 是基于目前的**有限访问状态**与缺少独立可复现集成证据的工程就绪程度评分，不是模型性能分数。Google 提供了长时程开发、安全漏洞定位、修复等任务的测试结果；即便采用外部 Benchmark 名称，官方披露的运行配置与比较仍不能在这里认定为已独立复验。

## 对公开研究方向的价值

- **pi-67**：长周期任务、代码修复、工具调用和风险边界的候选评测模型；公开访问扩大前保持 watch。
- **AIOS**：可关注多模态理解与结构化任务能力，但当前没有证据证明其在视频素材理解/自动剪辑的质量和成本上优于现有方案。

## 后续核验

- 等待正式开发者 API、价格、额度与可用地区的公开说明更新；官方预告的价格不等于当前已可购买。
- 使用相同工具、任务与预算实测代码修复成功率、耗时、Token 消耗、失败率及遵从边界情况。
- 与现有 Gemini 4 Argon 条目区分：Carbon 是**另一个新模型**，并非 Argon 的同名版本更新。
