---
name: VideoStir
kind: project
summary: ACL 2026 长视频理解研究，提出片段级时空图与意图相关帧检索，提供研究代码和意图相关性评分器检查点。
firstSeen: 2026-04-07
updated: 2026-11-11
status: research
tags: [video-rag, multimodal, open-source, retrieval, spatiotemporal, research]
officialUrl: "https://github.com/RomGai/VideoStir"
githubUrl: "https://github.com/RomGai/VideoStir"
paperUrl: "https://arxiv.org/abs/2604.05418"
relevancePi67: 75
relevanceAios: 97
maturity: 63
related: [videotapestry, atas]
timeline:
  - date: 2026-04-07
    title: 论文首次公开
    summary: 原始论文首次提交至 arXiv；随后被 ACL 2026 接收，提出片段级时空图与基于查询意图的帧相关性评分。
    status: research
  - date: 2026-11-11
    title: AI Radar 研究补录
    summary: 确认作者仓库包含推理/训练代码、示例、权重获取说明；某些训练数据需要单独申请，不代表一键可完整部署或模型质量已被独立复测。
    status: research
sources:
  - title: "VideoStir original research paper"
    url: "https://arxiv.org/abs/2604.05418"
    published: "2026-04-07"
  - title: "VideoStir official research code"
    url: "https://github.com/RomGai/VideoStir"
---

## 工程判断

成熟度 63：公开论文、推理与训练工程、权重入口足以支持实际复现尝试；依赖多个视觉模型及数据访问，工程集成与算力预算尚未验证。研究侧重长视频多跳证据检索，不能直接推断可自动识别商业短视频的卖点结构或镜头类别。

## 下一步

- 在固定视频集上比较时空图检索与普通分段向量检索，测量时间窗召回、证据定位误差和推理成本。
- 优先抽取图索引与证据检索设计，不预设需完整搬运大模型依赖。
