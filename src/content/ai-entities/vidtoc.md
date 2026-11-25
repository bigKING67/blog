---
name: "VidToC: Rethinking Video Token Compression for Multimodal Large Language Models"
kind: paper
summary: "在统一实验条件下比较视频 Token 压缩、骨干架构与时间编码，揭示不同视频任务的压缩偏好。"
firstSeen: 2026-11-25
updated: 2026-11-25
status: watch
tags: ["video-understanding","token-compression","multimodal"]
officialUrl: ""
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.25574"
relevancePi67: 66
relevanceAios: 96
maturity: 35
related: ["aios-video-rag"]
sources:
  - title: "Original paper"
    url: "https://arxiv.org/abs/2611.25574"
    published: "2026-11-19"
timeline:
  - date: 2026-11-25
    title: "一手来源核验与工程评估"
    summary: "原始论文核验；时间定位、描述和问答需分别评测。尚未确认公开实现。"
    status: watch
---

## 核心解读与工程判断

作者比较 7B Transformer 与 9B 混合骨干，发现免训练时间定位受益于重要性选择和保留原始位置索引，普通问答和详细描述的偏好不同。默认 16 倍压缩是压力测试，不是通用最佳值。AIOS 可对照保留完整时间信息、分层抽帧与不同压缩率，衡量边界误差、召回、时延和成本。35/100：早期论文，未独立复现。
