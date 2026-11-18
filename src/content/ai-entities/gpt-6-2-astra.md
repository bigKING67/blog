---
name: "GPT-6.2 Astra"
kind: model
summary: "OpenAI 于 2026-11-17 发布的前沿专业工作与 Coding Agent 模型，提供 API、Codex 和 ChatGPT Work 接入；性能与成本优势目前主要来自发布方评测。"
firstSeen: 2026-11-18
updated: 2026-11-18
status: research
tags: ["frontier-model", "coding-agent", "computer-use", "professional-work", "evaluation"]
officialUrl: "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
githubUrl: ""
paperUrl: ""
relevancePi67: 95
relevanceAios: 77
maturity: 85
related: ["pi-67-evaluation"]
timeline:
  - date: 2026-11-17
    title: "OpenAI 正式发布 GPT-6.2 Astra"
    summary: "OpenAI 公布模型能力、API 接入及百万 Token 价格（输入 $8、缓存输入 $0.40、输出 $40）；性能对比和节省成本的结论须与厂商自报区分。"
    status: research
  - date: 2026-11-18
    title: "纳入 AI Radar 工程评测候选"
    summary: "依据官方发布材料核验可访问性，评估为可进行严肃生产前测试，未把厂商 benchmark 或演示当作独立复现。"
    status: research
sources:
  - title: "OpenAI: Introducing GPT-6.2 Astra and Sol"
    url: "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
    published: "2026-11-17"
  - title: "GitHub: GPT-6.2 Astra and Sol available in Copilot"
    url: "https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available/"
    published: "2026-11-17"
---

## 工程判断

85/100：已有正式 API 和多个工具接入，具备生产前评测条件；不等于已经独立验证性能领先。建议以相同仓库、统一任务、统一 Harness、质量与成本指标进行评测。

## 追踪要点

- 后续监测正式发布、许可或开放范围变化，重要变化追加 timeline。
- 使用真实任务与固定评测集独立验证，不以厂商基准替代工程测试。
