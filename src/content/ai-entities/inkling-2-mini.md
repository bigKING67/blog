---
name: Inkling 2 Mini
kind: model
summary: Thinking Machines Lab 于 2026-11-20 发布的开放权重图文多模态 MoE 循环 Transformer；26.4B 总参数、3.4B 原始激活参数、三次循环约 5.4B 有效激活。
firstSeen: 2026-11-20
updated: 2026-11-21
status: research
tags: [open-weights, multimodal, agent, coding, local-inference, model-evaluation]
officialUrl: "https://thinkingmachines.ai/model-card/inkling-2-mini/"
githubUrl: ""
paperUrl: ""
relevancePi67: 96
relevanceAios: 78
maturity: 76
related: []
timeline:
  - date: 2026-11-20
    title: 官方发布模型卡与开放权重
    summary: 官方确认 Apache 2.0、图像和文本输入、文本输出、26.4B 总参数、3.4B 激活、三次循环约 5.4B 有效激活及约 20GB 混合精度检查点；发布方 benchmark 尚未独立复现。
    status: research
  - date: 2026-11-21
    title: 纳入工程评测候选
    summary: 根据一手模型卡按可获取权重与可测试推理框架评为 76；需验证实际吞吐和多模态任务效果，不能误认为原生视频输入模型或适合 12GB 显存全量加载。
    status: research
sources:
  - title: "Thinking Machines Lab: Inkling 2 Mini model card"
    url: "https://thinkingmachines.ai/model-card/inkling-2-mini/"
    published: "2026-11-20"
---

## 技术事实与边界

官方描述为 24 层的稀疏 MoE 解码器，中间 12 层重复计算三次；总 26.4B 参数，原始每层路径激活约 3.4B、考虑重复计算的有效活跃量约 5.4B。上下文上限为 1M token。**模态为文本和图像输入、文本输出**，官方没有声明原生视频输入能力。

开源权重使用 Apache 2.0。官方称混合 NVFP4 / MXFP8 检查点约 20GB，建议 32GB 以上设备内存或显存；提供 Apple Silicon 和 NVIDIA 推理路线。上述是官方硬件指导，不代表已完成独立部署验证。

## 工程判断

76/100：有正式模型卡、开放权重和可测试的多端推理路线，但发布方的 Coding、Agent 和视觉基准是发布方报告，尚未独立复测。适合进入编程 Agent、工具调用和图像分类的测评，不应因为多模态标签就直接将其作为视频事件定位模型。

## 评测建议

统一任务、模型精度和预算，测量工具调用成功率、端到端任务通过率、内存峰值、吞吐、中文视觉理解与错误恢复；对时间定位的视频任务应构建单独的证据评测。