---
name: "Wizard：Agentic World Control"
kind: paper
summary: "利用明确世界状态、骨骼与几何结构代理控制可交互视频世界，实现角色动作的实时可控生成。"
firstSeen: 2026-11-01
updated: 2026-11-01
status: research
tags: [world-model, video-generation, multimodal, agent, research]
officialUrl: "https://wyzardwu.github.io/wizard/"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2610.40339"
relevancePi67: 48
relevanceAios: 83
maturity: 33
related: [atas]
timeline:
  - date: 2026-11-01
    title: 核验 10 月 29 日原始论文
    summary: "作者使用结构化角色代理与外显游戏状态指导视频生成；未核验完整开源代码和实际部署条件。"
    status: research
sources:
  - title: "Wizard 原始论文"
    url: "https://arxiv.org/abs/2610.40339"
---

## 工程判断

研究采用显式场景/角色状态与生成画面解耦的架构；作者数据集包含 750 个场景和 178 个角色。不能将面向游戏世界的实验结果直接视为商品广告视频编辑表现。

## 待验证

仅作为结构化镜头/角色状态和可控生成的长期设计参考，不直接纳入现有生产渲染链路。成熟度 33/100，早期论文研究。
