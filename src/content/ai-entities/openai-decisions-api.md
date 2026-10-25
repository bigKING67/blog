---
name: OpenAI Decisions API
kind: project
summary: 2026-10-22 正式 GA 的有界决策 API，支持概率、选项和分级评分；适合作为 Agent 路由及内容筛选的可评测服务，不等于独立授权引擎。
firstSeen: 2026-10-22
updated: 2026-10-25
status: research
tags: [decision-api, agent, routing, structured-output, evaluation]
officialUrl: "https://openai.com/index/decisions-api/"
githubUrl: ""
paperUrl: ""
relevancePi67: 91
relevanceAios: 94
maturity: 83
related: [microsoft-decision-1]
timeline:
  - date: 2026-10-22
    title: Decisions API 正式开放
    summary: OpenAI 宣布 Decisions API GA，可从文本、图像和结构化输入对有界问题返回 predicate、choice 或 score；延迟性能数字为厂商和客户测试披露。
    status: research
  - date: 2026-10-25
    title: 纳入 AI Radar 工程评测候选
    summary: 记录为可接入的决策服务，用于路由、分类与筛选的候选；尚无独立成本、误判率或一致性验证，安全授权必须在模型外执行。
    status: research
sources:
  - title: "OpenAI: Build more responsive apps with the Decisions API"
    url: "https://openai.com/index/decisions-api/"
    published: "2026-10-22"
---

## 工程判断

83/100 表示服务已 GA、公开 API 功能与使用方法可查，适合进入生产前认真评估；不代表对具体业务的准确率、稳定性、价格或延迟已被独立验证。

Decisions API 允许开发者定义有界问题和备选答案，返回 predicate（概率）、choice（选项及概率）或 score（量表评分），并支持在单次请求中处理多个问题。它与 Microsoft Decision-1 属于值得比较的结构化决策方案，但产品形态与依赖不同。

## pi-67 / AIOS 研究方向

- 在一致的业务样本上比较通用模型、专用决策 API 和确定性规则的准确率、尾延迟、成本及失败回退。
- 分类、路由、片段筛选可作为候选任务；对低置信度输出采用升级路径，而非静默执行。
- 该模型输出不能取代独立的 Policy Engine、权限校验或安全控制。
