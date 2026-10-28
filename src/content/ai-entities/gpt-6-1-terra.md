---
name: GPT-6.1 Terra
kind: model
summary: OpenAI 于 2026-10-27 发布的偏重视觉理解、Computer Use 与编程的高性价比通用模型；开放 API，厂商 benchmark 尚未独立复现。
firstSeen: 2026-10-27
updated: 2026-10-28
status: research
tags: [frontier-model, coding, computer-use, multimodal, model-evaluation]
officialUrl: "https://openai.com/index/introducing-gpt-6-1-terra/"
githubUrl: ""
paperUrl: ""
relevancePi67: 96
relevanceAios: 82
maturity: 84
related: [gemini-4-argon]
timeline:
  - date: 2026-10-27
    title: OpenAI 正式发布 GPT-6.1 Terra
    summary: 官方发布介绍视觉理解、电脑操作和代码任务能力，并开放 gpt-6.1-terra API；公开价格与 benchmark 均需要在真实业务任务中核对，不把厂商自评视为独立证明。
    status: research
  - date: 2026-10-28
    title: 纳入 AI Radar 模型评测候选
    summary: 将其归类为可进行认真工程评测的 API 模型；尚无自有生产测试或实际采用记录。
    status: research
sources:
  - title: "OpenAI: Introducing GPT-6.1 Terra"
    url: "https://openai.com/index/introducing-gpt-6-1-terra/"
    published: "2026-10-27"
---

## 核心解读

这次更新把模型的视觉理解、Computer Use、软件开发和单位任务成本放在同一个工程评估框架内。官方报告的 Agents' Last Exam、Terminal-Bench 等成绩不构成独立复现。

## 工程成熟度判断

84/100：官方已提供可访问 API 与公开价格，足以进入严肃生产环境评估；不等于稳定性、安全性或任务成功率已经在第三方环境得到证实。

## 实际验证建议

- 以同一工具集合比较电脑操作成功率、异常恢复、越权控制和单位成功任务成本。
- 视频分析场景只在目标任务、指定采样方式和预算下评测，不因展示案例就推断可替代完整视频理解链路。
