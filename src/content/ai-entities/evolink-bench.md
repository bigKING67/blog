---
name: "EvoLink-Bench"
kind: paper
summary: "对具有跨任务依赖和持续工作区的自进化 Agent 进行长期评测，区分事实学习与任务能力学习。"
firstSeen: 2026-11-27
updated: 2026-11-27
status: research
tags: ["agent","evaluation","memory","self-evolving"]
officialUrl: ""
githubUrl: "https://github.com/BUAA-Self-Evolving/EvoLink-Bench"
paperUrl: "https://arxiv.org/abs/2611.34400"
relevancePi67: 98
relevanceAios: 89
maturity: 64
related: ["context-evo","hindsight"]
timeline:
  - date: 2026-11-27
    title: 一手来源核验并纳入研究
    summary: "论文于 2026-11-25 提交；作者实验未独立复现。已核对作者公开仓库。"
    status: research
sources:
  - title: "EvoLink-Bench original paper"
    url: "https://arxiv.org/abs/2611.34400"
    published: "2026-11-25"
  - title: "EvoLink-Bench author repository"
    url: "https://github.com/BUAA-Self-Evolving/EvoLink-Bench"
---

## 核心解读与工程判断

通过 Reset、Frozen、Evolving 对照区分持久状态和显式学习更新；测量跨任务经验复用，而不是仅看本轮重试。作者报告五种框架、三种骨干及 19,635 个评分任务槽位的部分实验，未发现通用最优框架。64/100，已有 MIT 项目代码、离线测试和数据说明，完整实验还需要相应数据、评分资产和运行环境；第三方资产许可须单独核验。适合建立长期记忆更新、回归与迁移评测。
