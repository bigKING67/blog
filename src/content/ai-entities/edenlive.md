---
name: EdenLive
kind: project
summary: VAST AI Research 开源的参考视频条件实时生成渲染研究，提供 5B/14B 权重及实时推理代码，探索将世界状态与视觉渲染分离。
firstSeen: 2026-10-18
updated: 2026-11-06
status: research
tags: [video-generation, world-model, open-source, generative-rendering, multimodal]
officialUrl: "https://www.tripo3d.ai/research/edenlive"
githubUrl: "https://github.com/VAST-AI-Research/EdenLive"
paperUrl: ""
relevancePi67: 62
relevanceAios: 93
maturity: 66
related: [atas, hyperframes]
timeline:
  - date: 2026-10-18
    title: EdenLive 发布代码和模型权重
    summary: 官方发布介绍 5B/14B 版本和参考视频渲染路径；720p/24fps 的性能说明属于特定 RTX 5090 配置下的厂商报告。
    status: research
  - date: 2026-11-06
    title: 纳入 AI Radar 可评测候选
    summary: 官方 GitHub 与权重链接可核验；尚未完成独立性能、产品素材保真和部署成本测试。
    status: research
sources:
  - title: "VAST AI Research: EdenLive launch and technical overview"
    url: "https://www.tripo3d.ai/research/edenlive"
    published: "2026-10-18"
  - title: "VAST AI Research: EdenLive official GitHub"
    url: "https://github.com/VAST-AI-Research/EdenLive"
---

## 工程解读

状态—渲染解耦可以用于研究多镜头状态一致性、参考画面重渲染及生成视频可控性，但不是现成的商业短视频自动剪辑后端。

## 成熟度与后续

66/100：有公开权重和代码、可现实评测，但研究环境依赖较高，官方实时性能是在 RTX 5090 上报告，不代表普通显卡同速。
