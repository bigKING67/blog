---
name: OpenViking
kind: project
summary: 面向 AI Agent 的 Context Database，关注上下文、记忆与知识资源的组织和检索。
firstSeen: 2026-07-23
updated: 2026-10-15
status: research
tags: [agent-memory, context-engineering, context-database]
officialUrl: https://openviking.ai/
githubUrl: https://github.com/volcengine/OpenViking
paperUrl: ""
relevancePi67: 96
relevanceAios: 84
maturity: 80
related: []
timeline:
  - date: 2026-07-23
    title: 首次进入 pi-67 记忆系统研究
    summary: 在 pi-67 长期记忆方案讨论中，与 loopx 等项目一起进入研究范围。
    status: research
  - date: 2026-10-15
    title: 纳入 AI Radar 首批种子实体
    summary: 继续作为 Context / Memory 基础设施的重要候选。
    status: research
sources:
  - title: OpenViking GitHub
    url: https://github.com/volcengine/OpenViking
---

## 当前判断

OpenViking 值得继续作为 pi-67 上下文与长期记忆基础设施的重要候选研究对象。

它的价值不只是向量检索，而是尝试把 Agent 的上下文资源作为独立数据库进行组织。后续应重点验证它与 Session State、用户私有记忆、企业共享经验之间的边界。

## 下一步

- 评估真实 Coding / Research 长任务中的召回质量。
- 验证多人环境下的隔离与共享模型。
- 与其他 Memory / Context Provider 使用同一套任务做 A/B。
