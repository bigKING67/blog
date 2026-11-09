---
name: "Humans& Ampersand v0.1"
kind: model
summary: "面向多人对话的专用模型，在团队消息流中自主选择发言 send_message 或保持安静 pass；2026-11-06 通过 Vercel AI Gateway 开放 API。"
firstSeen: 2026-11-09
updated: 2026-11-09
status: research
tags: [agent, multi-agent, team-collaboration, model, conversational-ai]
officialUrl: "https://vercel.com/changelog/humans-and-ampersand-now-available-on-ai-gateway"
githubUrl: ""
paperUrl: ""
relevancePi67: 92
relevanceAios: 76
maturity: 60
related: []
timeline:
  - date: 2026-11-06
    title: "通过 Vercel AI Gateway 开放访问"
    summary: "Vercel 官方提供 humansand/ampersand-v0.1 模型 API，展示 send_message / pass 工具决策。基于 GLM 5.3 并经多人模拟对话强化学习是发布方说明，尚未独立复核训练效果。"
    status: research
  - date: 2026-11-09
    title: "一手来源核验并纳入 AI Radar"
    summary: "确认 API 文档与交互范式存在，可开展团队会话评测；没有独立验证其多人任务成功率。"
    status: research
sources:
  - title: "Vercel: Ampersand from Humans& now available on AI Gateway"
    url: "https://vercel.com/changelog/humans-and-ampersand-now-available-on-ai-gateway"
    published: "2026-11-06"
---

## 核心判断

该模型的技术价值是把「是否发言」设为与「说什么」同样重要的决策。多方讨论中，一味响应所有消息会制造噪声；将发言与沉默作为明确的工具动作，有机会改善人类与 Agent 的协作体验。

## 可验证边界

API 可调用不等于多人协作效果已独立验证。评价应包括不必要打断率、关键冲突漏报率、工具动作正确率、会话权限与消息去重；发送消息的访问控制和幂等性由应用实现。
