---
name: "QVAC BotPsy-0.8B"
kind: model
summary: "Tether AI Research 于 2026-11-11 发布基于 Qwen3.5-0.8B 的开放权重文本工具调用模型，面向小规模设备端多步工具选择，暂不属于视频理解模型。"
firstSeen: 2026-11-12
updated: 2026-11-12
status: research
tags: [open-weights, small-model, agent, tool-calling, local-inference]
officialUrl: "https://tether.io/news/tethers-800m-ai-agent-beats-models-2-5x-its-size-on-everyday-phone-tasks/"
githubUrl: ""
paperUrl: ""
relevancePi67: 93
relevanceAios: 63
maturity: 69
related: [gemini-decision-1]
timeline:
  - date: 2026-11-12
    title: "一手来源核验并纳入长期研究"
    summary: "Tether 官方发布公告，Hugging Face 官方模型卡提供 Apache-2.0 BF16 权重与 GGUF 变体。发布方报告的六类 Agent Benchmark 成绩是作者实验，未独立复核；模型卡将用途标为 text-only 工具调用。"
    status: research
sources:
  - title: "Tether AI Research: QVAC BotPsy launch"
    url: "https://tether.io/news/tethers-800m-ai-agent-beats-models-2-5x-its-size-on-everyday-phone-tasks/"
    published: "2026-11-11"
  - title: "QVAC official model card and weights"
    url: "https://huggingface.co/qvac/BotPsy-0.8B"
---

## 工程解读

这是针对工具调用与低至中难度多步骤任务做后训练的文本模型，参数量约 0.8B。官方模型卡提供 BF16 与独立 GGUF 权重，描述其基于 Qwen3.5-0.8B 并在工具使用任务上进行了 SFT、蒸馏及强化学习。官方报告在 BFCL、ACEBench 等测试中优于若干同级小模型，但这些成绩尚未独立复现。

**成熟度 69/100：** 开放权重、部署说明和评测细节较充分，可做实际性能评估；不代表多轮任务已达到生产可靠性。模型卡明确适用 **文本工具调用**，不应将其当作原生视频视觉理解方案。

## 研究动作

- 在本地环境测试工具选择、参数正确性、失败恢复、无适用工具时拒绝调用的能力。
- 比较与较大模型的任务成功率、推理时延、GPU/CPU 内存和每次有效工具调用成本。
- 工具执行、授权和危险动作拦截必须由外部 Runtime 执行。

