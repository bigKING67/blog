---
name: Multimodal Knowledge Agent (MKA) Benchmark
kind: project
summary: Google DeepMind 与 Artificial Analysis 于 2026-11-10 发布的可视化知识工作 Agent 评测，包含 200 个私有任务及 10 个公开示例。
firstSeen: 2026-11-10
updated: 2026-11-11
status: research
tags: [benchmark, multimodal, agent, context-engineering, visual-documents, evaluation]
officialUrl: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/multimodal-knowledge-agent-benchmark/"
githubUrl: ""
paperUrl: ""
relevancePi67: 90
relevanceAios: 87
maturity: 69
related: [gemini-4-carbon, reviewbench]
timeline:
  - date: 2026-11-10
    title: 公布多模态知识工作评测
    summary: Google 与 Artificial Analysis 联合公布 10 个行业大类、200 个私有任务的评测方法，另开放 10 个示例；测试在统一 Stirrup Harness 下执行。自报和合作评测结果不能视为在目标业务上的独立验证。
    status: research
sources:
  - title: "Google DeepMind: MKA benchmark announcement"
    url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/multimodal-knowledge-agent-benchmark/"
    published: "2026-11-10"
  - title: "Google: MKA public showcase dataset"
    url: "https://huggingface.co/datasets/google/multimodal-knowledge-agent"
    published: "2026-11-10"
  - title: "Artificial Analysis: MKA evaluation methodology and results"
    url: "https://artificialanalysis.ai/evaluations/mka"
    published: "2026-11-10"
---

## 工程判断

公开样例可用于研究评测架构，但 200 个正式任务未公开，外部无法完全自行复跑全榜单。任务含视觉输入、跨文件操作与交付物，尤其适合参考评分方法而非复制分数。成熟度评 69（有实际可用样例、统一 Harness 及公开评测方法，但完全独立复现受限）。

## 下一步

- 设计视觉证据正确率、成品结构正确率、成本及任务回放四个独立指标。
- 参考多文件交付物检查与评分 Rubric；区分数据集评测结果与实际商业视觉任务表现。
