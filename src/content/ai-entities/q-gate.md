---
name: "Q-Gate: Query-Modulated Multimodal Keyframe Selection"
kind: project
summary: "以查询相关性动态融合视觉定位、全局匹配、字幕语义三个专家分数，选择长视频关键帧的开源研究实现。"
firstSeen: 2026-10-22
updated: 2026-10-22
status: research
tags: [video-understanding, keyframes, multimodal, temporal-grounding, open-source]
officialUrl: "https://shaoguangwang.github.io/qgate/"
githubUrl: "https://github.com/shaoguangwang/Q_Gate"
paperUrl: "https://arxiv.org/abs/2604.17422"
relevancePi67: 45
relevanceAios: 97
maturity: 57
related: [videotapestry]
timeline:
  - date: 2026-10-22
    title: "核验作者论文与官方开源实现"
    summary: "原论文 2026-04-19 提交，2026-09-25 更新；本日首次纳入 AI Radar，非今天刚发布。作者代码提供融合测试及离线示例，全链路有外部依赖。"
    status: research
sources:
  - title: "Q-Gate author repository"
    url: "https://github.com/shaoguangwang/Q_Gate"
  - title: "Original Q-Gate arXiv paper"
    url: "https://arxiv.org/abs/2604.17422"
    published: "2026-04-19"
---

## 方法与价值

作者将关键帧选择分解为 Visual Grounding（YOLO-World）、Global Matching（BLIP）和 Contextual Alignment（Sentence-BERT）三个专家流，再由 LLM 针对查询动态赋权，从中选择带时间戳的关键帧和字幕送往下游多模态模型。

## 工程判断

成熟度 **57/100**：早期开源研究原型，有 MIT 授权代码、单测及离线融合示例，但完整复现需要多个隔离 Python 环境、外部模型以及默认 GPT-4o 方案。论文效果为作者自报，尚未独立复现。

对 AIOS 的公共研究启发是将“所有视频均匀抽帧”改为“问题驱动的抽帧与字幕对齐”。只有在同一视频评测集上测过覆盖率、漏镜头率、延迟和成本，才能讨论替代现有预处理流程。
