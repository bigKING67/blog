---
name: DaisyRose-27B
kind: model
summary: RadixArk 基于 Qwen3.8-27B 通过长任务强化学习训练并于 2026-11-18 发布的多模态推理模型，开放 Apache-2.0 权重，侧重 Coding 与 Agent 工程任务。
firstSeen: 2026-11-19
updated: 2026-11-19
status: research
tags: [open-weights, post-training, reinforcement-learning, agent, coding, multimodal]
officialUrl: "https://huggingface.co/RadixArk/DaisyRose-27B"
githubUrl: "https://github.com/radixark/miles"
paperUrl: ""
relevancePi67: 90
relevanceAios: 66
maturity: 68
related: [swe-critix, longharness]
timeline:
  - date: 2026-11-18
    title: RadixArk 发布模型权重与技术文章
    summary: 官方公布 BF16、FP8、NVFP4 权重及以约 1200 个精选长任务进行 RL 训练的方法；其 Terminal-Bench 分数属于作者自测，不构成独立验证。
    status: research
  - date: 2026-11-19
    title: 纳入长期研究
    summary: 一手模型卡与官方文章已核对，尚未在统一 Harness、算力与预算条件下复现实验结果。
    status: research
sources:
  - title: "RadixArk: DaisyRose-27B official model card"
    url: "https://huggingface.co/RadixArk/DaisyRose-27B"
    published: "2026-11-18"
  - title: "RadixArk: Pushing the Frontier of Post-Training Efficiency"
    url: "https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin"
    published: "2026-11-18"
  - title: "RadixArk: Miles RL framework"
    url: "https://github.com/radixark/miles"
---

## 工程成熟度依据

68/100：权重与推理方法公开、存在可运行的后训练框架，达到现实可测的研究阶段；尚无独立结果证明其在目标工作流中的鲁棒性。27B 权重与较长上下文不应假设可以在普通 12GB 消费级 GPU 上完整高速运行。

## 研究重点

- 对相同基础模型进行真实长任务、错误恢复、工具调用数与成本的基线对照。
- 参考以失败模式为核心设计高质量长任务数据，以及具有独立验证器的训练沙箱。
- 原生图像理解与大上下文并不自动证明视频语义理解能力优于专用视觉模型。
