---
name: ZONOS3-Mini
kind: model
summary: Zyphra 于 2026-11-09 公开权重和多种运行时的轻量文本转语音模型，约 886M 总参数、100M 活跃参数，可本地部署和调节语音表达。
firstSeen: 2026-11-09
updated: 2026-11-13
status: research
tags: [audio, tts, open-weights, on-device, multimodal, voice]
officialUrl: "https://www.zyphra.com/models/zonos3-mini"
githubUrl: "https://github.com/Zyphra/ZONOS3-Mini"
paperUrl: ""
relevancePi67: 80
relevanceAios: 90
maturity: 75
related: []
timeline:
  - date: 2026-11-09
    title: Zyphra 正式发布 ZONOS3-Mini
    summary: 开放 Apache 2.0 模型权重；官方介绍支持参考音频克隆、语速和情绪等输出控制，并提供 GPU、Apple MLX、ggml 和浏览器 WebGPU 运行方式。
    status: research
  - date: 2026-11-13
    title: 纳入轻量本地语音生成研究候选
    summary: 已核验官方模型页和官方运行时仓库，需独立测试语种质量、合成速度和授权音频安全机制；此为生成模型，不是声音分析、ASR 或音效识别模型。
    status: research
sources:
  - title: "Zyphra: ZONOS3-Mini model and release details"
    url: "https://www.zyphra.com/models/zonos3-mini"
    published: "2026-11-09"
  - title: "Zyphra official ZONOS3-Mini runtime repository"
    url: "https://github.com/Zyphra/ZONOS3-Mini"
---

## 工程判断

成熟度 75/100：模型权重、多个可运行后端及 API 已公开，现实可测试；厂商音质、速度和对比榜单尚未独立复现。它是 TTS 与授权声音定制候选，不适合替代视频音色分类、声纹鉴别、口播转写或音效识别。

## 评测方向

- 对经许可的参考声样评测发音、音色相似性、情绪控制和延迟。
- 在本地 CPU、GPU 与 Apple Silicon 环境测试真实并发和资源占用。
- 对合成输出增加授权、标注与审计机制，避免未经授权的声音仿制。
