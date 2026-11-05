---
name: Qwenputer
kind: project
summary: Divyansh Agrawal 开源的实验性模型，将确定性 RISC-V CPU 编译为附加权重层，利用 Qwen3.5-4B 的 Gated DeltaNet 状态作为可寻址内存；不等同于安全沙箱。
firstSeen: 2026-10-22
updated: 2026-11-05
status: research
tags: [qwen, agent-infrastructure, deterministic-execution, context-engineering, open-source]
officialUrl: "https://divagr.com/blog/qwenputer"
githubUrl: "https://github.com/divagr18/qwenputer"
paperUrl: ""
relevancePi67: 82
relevanceAios: 44
maturity: 53
related: []
timeline:
  - date: 2026-10-22
    title: 作者发布原始实验介绍
    summary: 在 Qwen3.5-4B 中编译附加 Transformer 层运行 RISC-V 计算，并将 Gated DeltaNet 状态用于 RAM；公开原始文章、代码与模型权重。
    status: research
  - date: 2026-11-05
    title: 补充纳入 AI Radar 工程观察
    summary: 关注模型内部确定性执行及状态建模研究意义；不将作者的测试结果当作独立复现，也不推荐替代外部沙箱。
    status: research
sources:
  - title: "Divyansh Agrawal: Qwenputer technical article"
    url: "https://divagr.com/blog/qwenputer"
    published: "2026-10-22"
  - title: "Qwenputer source code and benchmarks"
    url: "https://github.com/divagr18/qwenputer"
---

## 工程判断

工程成熟度 **53/100**：项目含可获取代码、模型与作者测试，可进行研究性复现；缺少广泛生产实践，且内部 CPU 不是工具权限边界或沙箱。作者报告 RISC-V 测试与数学任务结果，但未在此处视为独立验证。对应实现较常规 4B 模型更重。

## 后续核验

- 评估确定性执行与模型隐状态对可复现任务、状态保存的研究意义。
- 比较其计算开销、准确率与传统外部工具执行；避免仅以模型内部执行作为安全性证据。
