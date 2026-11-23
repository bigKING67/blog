---
name: SenseNova Loop-9B
kind: model
summary: 商汤开放的约 9B 参数循环层共享图文多模态模型，提供官方量化权重，面向本地 Agent、代码和视觉理解评测。
firstSeen: 2026-11-23
updated: 2026-11-23
status: research
tags: [local-model, multimodal, image-understanding, coding-agent, quantization]
officialUrl: "https://www.sensetime.com/en/news/sensenova-loop-9b-release-20261118-1435"
githubUrl: ""
paperUrl: ""
relevancePi67: 89
relevanceAios: 82
maturity: 73
related: []
timeline:
  - date: 2026-11-23
    title: 核验 11 月 17 日正式版与量化部署资料
    summary: 官方确认约 9B 参数、32 层权重重复执行至 56 层计算、支持图文输入及 4-bit 权重。长上下文显存需求随 KV Cache 增长，不能把权重文件体积当作总显存；厂家 Benchmark 非独立验证。
    status: research
sources:
  - title: "SenseTime SenseNova Loop-9B official release"
    url: "https://www.sensetime.com/en/news/sensenova-loop-9b-release-20261118-1435"
    published: "2026-11-17"
---

## 工程判断

73/100：模型与量化方案已发布，可在有兼容推理后端的机器进行评测；但视频输入并未在官方规格中确认，应仅以图像理解与 Agent/代码为主要候选任务。

4-bit 权重约 4.9GB 不等于长上下文运行仅需 4.9GB；官方给出的 256K 上下文量化方案约需 15 GiB 显存。
