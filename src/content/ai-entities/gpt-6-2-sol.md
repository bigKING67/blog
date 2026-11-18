---
name: "GPT-6.2 Sol"
kind: model
summary: "OpenAI 于 2026-11-17 发布的面向日常专业任务与 Agent 工作流的高效率模型，提供 API 和 Coding Agent 接入；应按成功任务成本独立评测。"
firstSeen: 2026-11-18
updated: 2026-11-18
status: research
tags: ["frontier-model", "coding-agent", "cost-efficiency", "agent", "evaluation"]
officialUrl: "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
githubUrl: ""
paperUrl: ""
relevancePi67: 94
relevanceAios: 79
maturity: 85
related: ["pi-67-runtime", "gpt-6-2-astra"]
timeline:
  - date: 2026-11-17
    title: "OpenAI 发布 GPT-6.2 Sol"
    summary: "官方公布 API 百万 Token 价格：输入 $2、缓存输入 $0.10、输出 $10；相对旧版和 Astra 的质量、成本收益均需用目标任务复核。"
    status: research
  - date: 2026-11-18
    title: "纳入模型路由与 Agent 评测候选"
    summary: "在具备正式 API 接入的条件下评为工程评测就绪；尚未进行自有任务集独立测试。"
    status: research
sources:
  - title: "OpenAI: Introducing GPT-6.2 Astra and Sol"
    url: "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
    published: "2026-11-17"
  - title: "GitHub: GPT-6.2 models available in Copilot"
    url: "https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available/"
    published: "2026-11-17"
---

## 工程判断

85/100：公开 API 与多开发工具接入可进行真实评估。应测量模型分层路由、回退、任务成功率及缓存命中下的总费用；不要从厂商自报 benchmark 推断生产优势。

## 追踪要点

- 后续监测正式发布、许可或开放范围变化，重要变化追加 timeline。
- 使用真实任务与固定评测集独立验证，不以厂商基准替代工程测试。
