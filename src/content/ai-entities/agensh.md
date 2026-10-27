---
name: "Agensh"
kind: project
summary: "Microsoft Research 的去中心化多 Agent Coding Harness，通过共享任务、消息与上下文自主申领任务并整合代码成果。"
firstSeen: 2026-10-24
updated: 2026-10-27
status: research
tags: [multi-agent, coding-agent, collaboration, open-source, harness]
officialUrl: "https://github.com/microsoft/Agensh"
githubUrl: "https://github.com/microsoft/Agensh"
paperUrl: "https://arxiv.org/abs/2609.26781"
relevancePi67: 93
relevanceAios: 73
maturity: 66
related: [paperclip, deepseek-harness]
timeline:
  - date: 2026-10-24
    title: "微软研究团队公开代码与复现指南"
    summary: "官方 GitHub 宣布开放 Harness、实验脚本和复现文档；论文于 2026-09-22 首次公开。"
    status: research
  - date: 2026-10-27
    title: "进入 AI Radar 长期研究"
    summary: "完成一手来源核验，作为去中心化 Agent 任务申领、共享发现和结果整合的工程参考；不将作者报告的规模与通过率等同于独立生产验证。"
    status: research
sources:
  - title: "Microsoft Agensh official repository and release announcement"
    url: "https://github.com/microsoft/Agensh"
  - title: "Agensh original research preprint"
    url: "https://arxiv.org/abs/2609.26781"
---

## 结构与价值

Agensh 让多个 Worker 异步地获取共享上下文、申领子任务、执行、验证并整合进展。官方实验使用 Gitea、Mattermost 与共享 Context Board 组合协调层；仓库提供 Docker Compose 单机入口与复现说明。

## 工程成熟度说明

**66/100（actively developed and realistically testable）**：源代码、许可证、运行与复现材料公开，适合小规模实验；截至本次研究，没有针对 pi-67 / AIOS 的独立测试或大规模生产稳定性证据。论文的 1,024 Agent 规模和测试通过率属于作者实验，不宜直接用于企业部署容量规划。

## 研究和验证建议

从少量 Agent 开始比较任务申领冲突率、重复执行率、代码合并质量、失败恢复、Token 成本和任务完成时间。保留代码平台与模型供应商中立，不将示例中的 Gitea/Mattermost 当作强制依赖。
