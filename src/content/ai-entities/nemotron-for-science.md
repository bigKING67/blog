---
name: NVIDIA Nemotron for Science
kind: project
summary: NVIDIA 于 2026-11-16 公布的科学专用 Agent 模型适配项目，将 Nemotron 3.5 Super VL、LitmusBench v0.2 数据集和领域后训练方案结合起来。
firstSeen: 2026-11-17
updated: 2026-11-17
status: research
tags: [open-weights, multimodal, domain-adaptation, agent, evaluation, science]
officialUrl: "https://nvidianews.nvidia.com/news/nvidia-introduces-nemotron-for-science-to-accelerate-discoveries-with-agents"
githubUrl: ""
paperUrl: ""
relevancePi67: 65
relevanceAios: 72
maturity: 65
related: [pi-67-evaluation, aios-multimodal-rag]
timeline:
  - date: 2026-11-17
    title: 核验 Nemotron for Science 公开发布、开放模型与领域评测资料
    summary: NVIDIA 在 11 月 16 日公布 Nemotron for Science，表示 Nemotron 3.5 Super VL 和约 5 万问题的 LitmusBench v0.2 已在 Hugging Face 提供。具体科学任务效果来自发布方和合作方案例，尚非独立验证；不代表为 AIOS 场景提供现成小模型。
    status: research
sources:
  - title: "NVIDIA Nemotron for Science official announcement, November 16, 2026"
    url: "https://nvidianews.nvidia.com/news/nvidia-introduces-nemotron-for-science-to-accelerate-discoveries-with-agents"
---

## 核心判断

从底座模型、领域数据集、后训练配方到 Agent 工具验证器的组合，为垂直任务适配提供了工程思路。科研化学、分子任务上的公开案例不等于营销视频理解或通用代码任务质量。

## 工程成熟度

65/100：一手发布与公开模型/数据集入口可核验，具备领域复现研究价值；尚缺少跨机构独立复测，也不适合据此承诺在普通消费级显卡上直接运行完整 3.5 Super VL 推理或训练。
