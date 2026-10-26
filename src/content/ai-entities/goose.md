---
name: Goose
kind: project
summary: Agentic AI Foundation 社区维护的开源 Agent，提供 CLI、桌面端及委托子 Agent；v1.56.0 改进故障恢复、并发控制和 Windows 安装。
firstSeen: 2026-10-26
updated: 2026-10-26
status: research
tags: [agent, subagent, delegation, session, desktop, open-source]
officialUrl: ""
githubUrl: "https://github.com/aaif-goose/goose"
paperUrl: ""
relevancePi67: 96
relevanceAios: 66
maturity: 85
related: [pi-coding-agent]
timeline:
  - date: 2026-10-23
    title: Goose v1.56.0 发布
    summary: 发布说明新增失败或取消的 delegate subagent 恢复、子 Agent 只读会话、并发限制、CLI 状态上报和 Windows NSIS 安装器。
  - date: 2026-10-26
    title: 首次纳入 AI Radar 长期跟踪
    summary: 使用官方仓库和发行记录核验，作为跨端 Agent 运行时与子任务管理架构参考；维持 RESEARCH，未实际集成。
    status: research
sources:
  - title: "Goose v1.56.0 official release"
    url: "https://github.com/aaif-goose/goose/releases/tag/v1.56.0"
    published: "2026-10-23"
  - title: "Goose official repository"
    url: "https://github.com/aaif-goose/goose"
---

## 核心解读

失败任务恢复、子 Agent 并发上限、父子会话可观测性不是 UI 小功能，而是长时运行 Agent 的基础可靠性能力。

## 评测建议

评估子任务取消与恢复的幂等性、资源限制、会话追踪、Windows 安装与上下文压缩。已公开发布不等同于经过本项目的可靠性、安全与负载验收。
