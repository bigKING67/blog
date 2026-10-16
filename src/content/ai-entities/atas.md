---
name: Any Time Any Space (ATAS)
kind: paper
summary: 世界状态驱动的长视频生成研究，通过场景记忆与事件记忆维护跨镜头时空连续性。
firstSeen: 2026-10-14
updated: 2026-10-16
status: research
tags: [video-generation, world-memory, multimodal, agent]
officialUrl: "https://lhmd.top/atas/"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2610.20571"
relevancePi67: 48
relevanceAios: 95
maturity: 48
related: []
timeline:
  - date: 2026-10-16
    title: 一手论文核验并进入技术研究
    summary: 已核对 arXiv 论文与作者项目主页；论文实验结果属于作者报告，尚未独立复现。
    status: research
sources:
  - title: "ATAS original paper"
    url: "https://arxiv.org/abs/2610.20571"
  - title: "ATAS project"
    url: "https://lhmd.top/atas/"
---

## 核心解读

将静态场景几何与按时间索引的事件观察分别存储，生成下一镜头时检索已有状态，只有通过校验的观察才进入长期记忆。

## 工程判断

48/100，研究原型；与 AIOS 自动混剪不是同一任务，值得借鉴的是镜头状态和一致性校验，不应声称可以直接替代剪辑流程。
