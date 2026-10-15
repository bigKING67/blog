---
name: OpenViking
kind: project
summary: 面向 AI Agent 的 Context Database，关注上下文、记忆与知识资源的组织和检索。
firstSeen: 2026-10-15
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
