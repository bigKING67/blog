---
name: Particle-1
kind: model
summary: "Particle 于 2026-10-28 推出的 API 编程 Agent 模型，基于 DeepSeek V4.1 Flash 后训练，目标是在不显著降低任务完成率的情况下减少推理与工具调用 Token。"
firstSeen: 2026-10-28
updated: 2026-10-31
status: research
tags: [coding-agent, model-efficiency, reasoning, api, evaluation]
officialUrl: "https://particle.ai/blog/introducing-particle-1"
githubUrl: ""
paperUrl: ""
relevancePi67: 91
relevanceAios: 66
maturity: 67
related: []
timeline:
  - date: 2026-10-28
    title: "Particle-1 面向软件工程任务开放 API"
    summary: "Particle 发布对 DeepSeek V4.1 Flash 的后训练模型及技术说明，给出编程任务的 token 效率实验；权重/LoRA 未公开。"
    status: research
  - date: 2026-10-31
    title: "AI Radar 核验厂商报告并列入评测"
    summary: "官方说明平均输出 token 降幅约 45% 属于供应商实验而非独立验证；应以成功任务总费用、验收质量和调用次数做同条件对照。"
    status: research
sources:
  - title: "Particle official Particle-1 launch and training/evaluation notes"
    url: "https://particle.ai/blog/introducing-particle-1"
    published: "2026-10-28"
---

## 核心解读

Particle-1 在编程和数据工程任务上优化“完成任务所需的推理与修正量”。厂商报告在四项评测中减少 28.4%–52.2% 输出 Token、降低 34.4%–51.6% 的平均任务成本，且 pass@1 与基线置信区间重叠。其 API 已开放，但不是开源权重模型。

## 工程判断

**67/100，可接入 API 做评测的早期模型。** 可用性来自官方 API 和技术说明，不代表社区或生产实测充分。所有性能比较均属原厂测试，暂未独立复现。

## 公开研究方向

用相同仓库、相同 Agent harness、相同工具与相同预算比较正确完成率、总 token、执行延迟、回归测试结果和重试成本，避免只凭“token 省了多少”判断模型价值。
