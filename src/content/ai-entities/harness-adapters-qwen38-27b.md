---
name: "Qwen3.8-27B Harness Adapters"
kind: project
summary: "Hugging Face 在真实 Pi、Hermes Agent 和 OpenCode Harness 内进行强化学习后训练，公开专用 LoRA、合并适配器与复现资源；相关收益来自发布团队评测。"
firstSeen: 2026-11-22
updated: 2026-11-22
status: research
tags: [agent, harness, reinforcement-learning, lora, evaluation, open-models]
officialUrl: "https://huggingface.co/blog/harness-adapters-at-scale"
githubUrl: ""
paperUrl: ""
relevancePi67: 97
relevanceAios: 74
maturity: 68
related: [hermes-agent]
timeline:
  - date: 2026-11-22
    title: "核验 11 月 20 日 Harness Adapters 新实验与公开工件"
    summary: "Hugging Face 发布 Qwen3.8-27B 针对 Pi、Hermes Agent、OpenCode 的 RL LoRA 适配器及合并模型；官方称相同 Harness 下提升通过率并减少工具调用，但尚无独立复测及跨领域普适性证据。"
    status: research
sources:
  - title: "Hugging Face original engineering report, 2026-11-20"
    url: "https://huggingface.co/blog/harness-adapters-at-scale"
    published: "2026-11-20"
  - title: "Official Hugging Face adapter and artifact collection"
    url: "https://huggingface.co/collections/harness-hub/qwen38-27b-harness-adapters"
---

## 工程解读

最重要的不是某个单一 benchmark 数字，而是在最终使用的 Harness 内采集轨迹、训练 LoRA 和验证结果，并显式度量工具调用与 Token 成本。官方比较中，Pi 的 Terminal-Bench 2.1 pass@1 从 39% 提至 55%、平均 Token 从 2.9K 降至 1.5K；这些均为作者实验，不能当作独立验证。

## 研究边界

复现需锁定具体基础权重、Harness 版本、思考模式、任务集、评测环境和验证器。官方也指出不同 Harness 的配置不能直接进行横向成绩排名，以及跨领域结果尚未显著改善。状态为 research 而非 adopt。
