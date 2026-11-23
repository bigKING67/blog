---
name: "SpecWM: Turning Verification into Refinement for Streaming World Models"
kind: paper
summary: 面向流式视频世界模型的免训练推测生成框架，利用目标模型潜在速度场对草稿片段验收、细化或拒绝。
firstSeen: 2026-11-23
updated: 2026-11-23
status: watch
tags: [video-generation, world-model, streaming, speculative-inference, research]
officialUrl: "https://arxiv.org/abs/2611.26211"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.26211"
relevancePi67: 40
relevanceAios: 84
maturity: 33
related: []
timeline:
  - date: 2026-11-23
    title: 核验 11 月 19 日原始论文并纳入研究观察
    summary: 作者报告 WBench Navigation 达到 1.63 倍于目标模型的生成速度，并提出 Accept、Refine、Reject 三路决策；未核验有可复现源码或生产模型权重，实验尚未独立验证。
    status: watch
sources:
  - title: "SpecWM original arXiv paper"
    url: "https://arxiv.org/abs/2611.26211"
    published: "2026-11-19"
---

## 工程判断

33/100：仍是论文级探索，不是现成的商业视频生成或混剪工具。值得跟踪质量检查信号能否直接转化为局部修复，而不只触发整段重试。
