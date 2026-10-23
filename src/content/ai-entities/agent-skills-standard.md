---
name: "Agent Skills open standard"
kind: project
summary: "跨 Agent 宿主的技能包规范，使用 SKILL.md 描述任务知识与工作流；2026-10-22 宣布移交 Linux Foundation 旗下 AAIF。"
firstSeen: 2026-10-23
updated: 2026-10-23
status: research
tags: [agent-skills, interoperability, agent-infra, open-standard]
officialUrl: "https://agentskills.io/"
githubUrl: "https://github.com/agentskills"
paperUrl: ""
relevancePi67: 99
relevanceAios: 82
maturity: 86
related: []
timeline:
  - date: 2026-10-23
    title: "Agent Skills 标准移交 AAIF"
    summary: "Anthropic 于 2026-10-22 宣布将 Agent Skills 标准、域名与 GitHub 组织移交 Agentic AI Foundation（Linux Foundation 旗下）；厂商自述 70 多个平台已集成。"
    status: research
sources:
  - title: "Anthropic official donation announcement"
    url: "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation"
  - title: "Agent Skills specification"
    url: "https://agentskills.io/"
---

## 工程研究判断

Agent Skills 是以 SKILL.md 为入口的技能封装协议，不等于 MCP 工具协议或任务编排框架。标准移交中立基金会有助于多宿主互操作。对于 pi-67，优先研究兼容加载、版本固定、Skill 权限审计与冲突治理，不应将官方声称的平台数视作独立普及率测量。

## 下一步

优先针对公开技术能力建立可复现的测试任务、质量与成本指标；不要把厂商自报结论视为独立复现。
