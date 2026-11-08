---
name: "CoPE-VideoLM"
kind: paper
summary: "微软与学界提出利用视频压缩域的运动向量和残差编码 P 帧，减少视频语言模型逐帧视觉 Token 的研究路线；论文原始发布于 2026-02，后列为 NeurIPS 2026 研究成果。"
firstSeen: 2026-11-08
updated: 2026-11-08
status: research
tags: [video-understanding, video-rag, codec, temporal-reasoning, model-efficiency, research]
officialUrl: "https://microsoft.github.io/CoPE/"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2602.13191"
relevancePi67: 70
relevanceAios: 99
maturity: 38
related: [videotapestry, embeddinggemma-2]
timeline:
  - date: 2026-11-08
    title: "一手论文与微软项目主页核验，进入成本效率研究"
    summary: "核对 2026 年 2 月原始论文、NeurIPS 2026 论文主页；作者报告特定条件下首 Token 延迟最高下降 86%、视频 Token 用量最高下降 93%，未找到可直接用于目标业务的完整公开部署方案。"
    status: research
sources:
  - title: "CoPE-VideoLM original paper"
    url: "https://arxiv.org/abs/2602.13191"
    published: "2026-02-13"
  - title: "Microsoft Spatial AI Lab: CoPE-VideoLM official project page"
    url: "https://microsoft.github.io/CoPE/"
---

## 核心解读

视频本身含有 P 帧运动向量与残差信息。研究利用这些编码原语产生紧凑表示，而不是将每帧都完全解码并经过视觉编码器。这与直接减少抽帧数量不同：它试图保留更密集的时间变化信息，同时降低输入开销。

## 工程判断

38/100：论文与项目主页可核验，属于方法研究，尚未确认完整、可直接复现的公开工程发行版。作者报告的速度和 Token 改善有具体模型/编码/评测前提，不能外推为所有视频处理任务成本下降 93%。

## 下一步

- 先用低成本的编码域运动检测、镜头切分和关键帧/事件抽样做业务基线。
- 如果后续提供可复现实现，再与现有视频理解 pipeline 在时间边界准确率、漏检率、单位合格结果成本上比较。
