---
name: "ProbFaS"
kind: paper
summary: "无需训练的任务感知视频帧选择研究，通过多保真高斯过程校准视觉文本相似度与 MLLM 判断。"
firstSeen: 2026-11-28
updated: 2026-11-28
status: watch
tags: ["video-understanding","frame-selection","multimodal"]
officialUrl: ""
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.34903"
relevancePi67: 60
relevanceAios: 98
maturity: 36
related: ["videotapestry","embeddinggemma-2"]
sources:
  - title: "Original arXiv paper"
    url: "https://arxiv.org/abs/2611.34903"
    published: "2026-11-25"
timeline:
  - date: 2026-11-28
    title: "核验原始论文并纳入研究"
    summary: "作者报告在 15 个设置中 13 个领先，部分长视频基准 32 帧达到 128 帧强基线表现。包含额外模型判断，不能直接等同于四倍成本下降；未核验公开实现。"
    status: watch
---

## 工程判断

低成本的密集相似度估计与高成本的稀疏模型判断结合，再以时间 DPP 兼顾相关性和覆盖。

AIOS 可对比均匀、镜头感知和校准采样，测量事件召回、边界误差、完整耗时及成本；检索时再按查询细化。

36/100。作者报告在 15 个设置中 13 个领先，部分长视频基准 32 帧达到 128 帧强基线表现。包含额外模型判断，不能直接等同于四倍成本下降；未核验公开实现。
