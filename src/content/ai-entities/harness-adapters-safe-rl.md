---
name: "Harness Adapters: Safe RL for Agentic Development"
kind: project
summary: "Harness Hub 在 2026-11-06 发布可按 pi、OpenCode、Hermes 等 Agent Harness 分别训练的小型 LoRA/RL 适配器与执行前工具安全检查流程；结果仍属早期实验。"
firstSeen: 2026-11-08
updated: 2026-11-08
status: research
tags: [agent-harness, reinforcement-learning, lora, coding-agent, safety, open-source]
officialUrl: "https://huggingface.co/blog/harness-hub/harness-adapters"
githubUrl: "https://github.com/harness-hub/safeagents"
paperUrl: ""
relevancePi67: 97
relevanceAios: 73
maturity: 55
related: [hermes-agent, context-evo]
timeline:
  - date: 2026-11-08
    title: "核验 11 月 6 日 Harness Adapter 研究发布"
    summary: "作者公开针对不同 Agent Harness 的 LoRA/RL 训练路线、实验模型和 SafeAgents 工具调用规则；当前主要是小规模训练/保留集结果，未在 pi-67 上独立验证。"
    status: research
sources:
  - title: "Harness Hub: Harness adapters — Safe RL for efficient agentic development"
    url: "https://huggingface.co/blog/harness-hub/harness-adapters"
    published: "2026-11-06"
  - title: "Harness Hub: safeagents official repository"
    url: "https://github.com/harness-hub/safeagents"
---

## 核心解读

Agent Harness 的工具、系统指令和控制流程会改变同一个模型的行为。按 Harness 训练专门适配器、用可验证任务衡量成功率和工具调用次数，比直接追逐通用 Coding Benchmark 更接近生产场景。

## 工程判断

55/100：早期开源研究与训练范例，尚无大规模独立的跨项目复现。文章中的收益属于研究团队的 smoke-run 和 held-out 实验报告，不是通用性能保证。SafeAgents 规则检查也不是可替代完整沙箱的安全边界。

## 下一步

- 使用相同真实任务比较 pi、Claude Code、Codex 和 Hermes 的任务成功率与工具调用效率。
- 对 Skills、上下文策略、模型/适配器版本做独立标记；训练轨迹只使用经授权和脱敏的公开数据。
- 借鉴可验证回报和动作前检查，不直接假定 LoRA 在每类任务均有增益。
