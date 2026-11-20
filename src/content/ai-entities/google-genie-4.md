---
name: Google DeepMind Genie 4
kind: model
summary: Google DeepMind 的实时交互式多模态世界生成系统；2026-11-19 开放 Gemini API / AI Studio 开发者接入，支持 720p、24fps 连续世界与原生音频，真实质量和成本待独立评测。
firstSeen: 2026-10-27
updated: 2026-11-20
status: research
tags: [world-model, video-generation, interactive-simulation, audio, multimodal]
officialUrl: "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
githubUrl: ""
paperUrl: ""
relevancePi67: 55
relevanceAios: 90
maturity: 73
related: [hyperframes]
timeline:
  - date: 2026-10-27
    title: 首次公开实时多模态世界生成系统
    summary: 官方公布通过文本控制环境、角色与运动，并同步生成音效与对话；此时仍属有限访问，非全面公开 API。
    status: watch
  - date: 2026-10-28
    title: 纳入 AI Radar 研究观察
    summary: 当时缺少普遍可用 API、开放权重、成本及独立评测，维持观察状态和早期成熟度。
    status: watch
  - date: 2026-11-19
    title: Genie 4 开发者 API 正式开放
    summary: Google 官方宣布通过 Gemini Interactions API 与 AI Studio 提供访问，可从文本或参考图生成 720p、24fps 且带原生音频的连续交互世界；由观察转为研究，成熟度 42 调整至 73，代表有公开评测入口而非已验证生产表现。
    status: research
sources:
  - title: "Google DeepMind: Genie 4 world simulation"
    url: "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
    published: "2026-10-27"
  - title: "Google DeepMind: Genie 4 model card"
    url: "https://deepmind.google/models/model-cards/genie-4/"
    published: "2026-11-18"
  - title: "Google: Genie 4 now available on Gemini API"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/"
    published: "2026-11-19"
---

## 技术与实际意义

Genie 4 面向可持续、可交互的世界模拟，与一次性生成固定长度视频不同。开发者现可经官方 API 对连续场景、实时输入和声画同步开展评测，不能将 Google 展示视为独立复现。

## 工程成熟度

**73/100（research，2026-11-20）**：按照仓库规则，已有正式开发者入口和模型卡，具备实际评测条件，仍缺少公开权重、独立生产负载的成本/稳定性验证和商用视频成片工作流证据。与 2026-10-28 的 **42/100** 评分相比，变化主要来自可接入性，不代表模型质量被独立证明。

## 评价建议

优先测试多镜头场景连续性、动作与对象状态一致性、音画同步、响应延迟、字幕/商品细节保真和单位可用片段成本。不能把交互式世界生成直接等同于商业短视频剪辑。
