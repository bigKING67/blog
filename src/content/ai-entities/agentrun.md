---
name: AgentRun
kind: project
summary: Parcha 维护的开源 Agent 控制平面，为不同 Harness 提供持久执行、运行记录、经验复用、预算和人工审批接口。
firstSeen: 2026-11-17
updated: 2026-11-17
status: research
tags: [agent, harness, durable-execution, context-engineering, open-source]
officialUrl: "https://agentrun.ai/"
githubUrl: "https://github.com/Parcha-ai/agentrun"
paperUrl: ""
relevancePi67: 94
relevanceAios: 78
maturity: 64
related: [pi-67-runtime, pi-67-context-memory]
timeline:
  - date: 2026-11-17
    title: 核验开源实现并纳入 Agent Runtime 工程研究
    summary: 官方仓库提供 Apache-2.0 许可证、可自托管控制台、持久运行、经验复用和不同 Agent Harness 集成说明。部分远程连接能力仍标为 development build，成本和质量收益为作者案例，未独立验证。
    status: research
sources:
  - title: "AgentRun official source repository and README"
    url: "https://github.com/Parcha-ai/agentrun"
  - title: "AgentRun official documentation"
    url: "https://agentrun.ai/docs"
---

## 工程解读

该项目尝试在 Claude Code、Codex、OpenCode、Pi 等 Agent 的上层统一运行记录、审批、成本控制和任务恢复，另用受检查的 notes/skills/workflows 复用历史经验。它不是新的底座模型，也不能默认保证每次运行都比原生 Harness 更准确或便宜。

## 评测边界

64/100（actively developed、可测试的开源项目；未验证企业生产可靠性）。先比较任务中断恢复、经验污染、跨用户隔离、重复执行、审计完整性以及单位成功任务成本。作者的节省成本与代码审查表现是自报案例，不等于独立 Benchmark。Node.js 版本、容器和远端连接能力存在当前版本条件，不能把 README 中开发分支能力当成正式发行版承诺。
