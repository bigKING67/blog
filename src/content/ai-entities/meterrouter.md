---
name: "MeterRouter"
kind: paper
summary: "根据每项任务的货币预算动态构建多 Agent 协作图，选择角色、模型、连接关系与结束时机。"
firstSeen: 2026-11-27
updated: 2026-11-27
status: watch
tags: ["multi-agent","routing","cost","reinforcement-learning"]
officialUrl: ""
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.34327"
relevancePi67: 95
relevanceAios: 91
maturity: 34
related: ["microsoft-decision-1"]
timeline:
  - date: 2026-11-27
    title: 一手来源核验并纳入研究
    summary: "论文于 2026-11-25 提交；作者实验未独立复现。尚未核实公开实现。"
    status: watch
sources:
  - title: "MeterRouter original paper"
    url: "https://arxiv.org/abs/2611.34327"
    published: "2026-11-25"
---

## 核心解读与工程判断

先模仿成功执行图，再以正确性、成本和预算超支惩罚进行强化学习。作者在五个基准和三级模型池的实验中报告相对强路由基线成本下降 82%，非独立验证。34/100，早期论文，未核实公开代码。可借鉴每任务预算、动态协作拓扑及退出策略；硬预算仍应由运行时强制执行。
