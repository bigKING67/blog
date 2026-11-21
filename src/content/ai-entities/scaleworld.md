---
name: ScaleWorld
kind: paper
summary: 2026-11-19 提交的因果视频世界模型研究，以共享骨干先预测低分辨率视频，再进行单步高分辨率细化，并区分两类历史状态以控制成本。
firstSeen: 2026-11-19
updated: 2026-11-21
status: research
tags: [video-generation, world-model, diffusion, video, efficient-inference]
officialUrl: "https://arxiv.org/abs/2611.26615"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.26615"
relevancePi67: 41
relevanceAios: 92
maturity: 32
related: []
timeline:
  - date: 2026-11-19
    title: 论文首次提交 arXiv
    summary: 作者提出预测与细化共享骨干、不同长度的因果历史和任务非对称 on-policy 蒸馏；模型质量和效率提升属于论文作者报告。
    status: research
  - date: 2026-11-21
    title: 纳入 AI Radar 研究
    summary: 经原始论文核验，记录为高分辨率视频生成架构候选；尚未确认公开的可复现完整权重及成熟生产部署。
    status: research
sources:
  - title: "ScaleWorld original paper (arXiv)"
    url: "https://arxiv.org/abs/2611.26615"
    published: "2026-11-19"
---

## 核心方法

同一个视频生成骨干先完成低分辨率的下一视频块预测，再以该预测为条件做一次高分辨率细化。低分辨率分支保留较长时序状态，细化分支保留较短高分辨率状态；作者设计任务非对称在线策略蒸馏（TA-OPD）合并两类能力。

## 工程判断

32/100：原始论文已发布，属于早期研究，不是现成的商业视频生成服务或视频理解/自动剪辑引擎。论文实验的视觉质量与效率优势需独立复现，不应推断低成本实时生产已经可用。

## 评测建议

若有公开权重和代码，再比较时序连续性、高分辨率细节、延迟、显存、单次修正成本与可控编辑性。