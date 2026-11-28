---
name: "SkillsBench Lift Reanalysis"
kind: paper
summary: "对 SkillsBench 的源码级审计与采样噪声再分析，公开复现脚本及审计材料。"
firstSeen: 2026-11-28
updated: 2026-11-28
status: research
tags: ["agent-skills","evaluation","reproducibility"]
officialUrl: ""
githubUrl: "https://github.com/rrrrr4788/skillsbench-lift-reanalysis"
paperUrl: "https://arxiv.org/abs/2611.33943"
relevancePi67: 96
relevanceAios: 84
maturity: 58
related: ["reviewbench","swe-critix"]
sources:
  - title: "Original arXiv paper"
    url: "https://arxiv.org/abs/2611.33943"
    published: "2026-11-25"
  - title: "Author-linked GitHub repository"
    url: "https://github.com/rrrrr4788/skillsbench-lift-reanalysis"
timeline:
  - date: 2026-11-28
    title: "核验原始论文并纳入研究"
    summary: "这不是所有 Skill 都有益的证明；研究仓库提供 MIT 代码及复现材料，原始轨迹和上游文件有外部依赖，未自行复现。"
    status: research
---

## 工程判断

审查 7554 次试验和 1421 个配对单元，识别评分器依赖、空技能目录、宿主内建技能等混杂因素；校正多重比较后未发现显著的任务级负提升。

pi-67 可使用固定宿主、控制内建技能、独立验收和留出集评估 Skill；AIOS 可用同一方法评价创作工作流组件。

58/100。这不是所有 Skill 都有益的证明；研究仓库提供 MIT 代码及复现材料，原始轨迹和上游文件有外部依赖，未自行复现。
