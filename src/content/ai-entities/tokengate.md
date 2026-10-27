---
name: "TokenGate"
kind: project
summary: "用于长上下文推理的可训练 Token 裁剪组件，以门控注意力减少后续层的 Prefill 计算与 KV 缓存开销。"
firstSeen: 2026-10-19
updated: 2026-10-27
status: research
tags: [context-engineering, inference, kv-cache, token-pruning, open-source]
officialUrl: "https://github.com/token-gate-llms/TokenGate"
githubUrl: "https://github.com/token-gate-llms/TokenGate"
paperUrl: "https://arxiv.org/abs/2610.26754"
relevancePi67: 84
relevanceAios: 68
maturity: 51
related: [context-evo, context-language-models]
timeline:
  - date: 2026-10-19
    title: "研究论文公开"
    summary: "原始论文提出 token-gated attention 和可训练的 Top-K 上下文选择，适配常规 Transformer 与混合注意力模型。"
    status: research
  - date: 2026-10-27
    title: "公开代码核验并进入 AI Radar"
    summary: "核验开源仓库中的实现和实验说明；论文报告的推理加速/显存优势属于作者自测，尚未在自身模型和硬件复现。"
    status: research
sources:
  - title: "TokenGate original paper"
    url: "https://arxiv.org/abs/2610.26754"
  - title: "TokenGate implementation repository"
    url: "https://github.com/token-gate-llms/TokenGate"
---

## 核心机制

早期网络层先为可裁剪的长文档状态打分，只让被选中的 Token 进入后续层，减少高成本 Prefill 计算和 KV Cache。原始指令、问题和生成答案不属于可裁剪的文档区域。项目需要适配模型并训练门控参数，**不是 Prompt 级的即插即用压缩器**。

## 工程成熟度说明

**51/100（research prototype / early open source）**：有一手论文、公开代码与复现实验材料；尚无跨模型、跨任务、跨硬件的充分独立工程验证。作者报告的最高 11.3 倍 Prefill 加速不能推广到所有任务。

## 工程启发

可研究长上下文自部署模型的成本优化，但近期任务应先从应用层证据检索、Rerank 和 Context Budget 着手。外部闭源模型 API 无法直接插入此模块；对视频等多模态输入的收益仍未得到验证。
