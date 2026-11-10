---
name: "Meta Muse Ember"
kind: model
summary: "Meta 2026-11-09 推出面向高频 Agent 子任务的多模态 API 模型，支持文本、图像、音频和视频输入，定位于工具调用、代码小任务、路由与文档理解。"
firstSeen: 2026-11-10
updated: 2026-11-10
status: research
tags: [model, multimodal, agent, coding, video-understanding, model-routing]
officialUrl: "https://research.meta.ai/blog/muse-ember"
githubUrl: ""
paperUrl: ""
relevancePi67: 92
relevanceAios: 93
maturity: 82
related: []
timeline:
  - date: 2026-11-10
    title: "Meta Muse Ember 发布并开放 Meta Model API"
    summary: "官方披露 1M 上下文、API 单价每百万输入/输出 token 为 0.10/0.50 美元，原生支持音视频理解；尚未确认公开权重或在广告短视频理解上的独立效果。官方与第三方指标需保留实验条件。"
    status: research
sources:
  - title: "Meta AI Research: Introducing Muse Ember"
    url: "https://research.meta.ai/blog/muse-ember"
    published: "2026-11-09"
---

## 工程判断
82/100：具公开 API、长上下文和明确的音视频输入能力，适合开展生产级候选评估；不代表已经完成业务测试或能够在本地部署。

## 研究行动
统一抽帧、提示词、结构化输出与评估集；测试视频事件识别、时间戳、镜头边界、广告结构分类、工具路由、端到端吞吐和单位正确结果成本。供应商 Benchmark 与定价需要持续复核。
