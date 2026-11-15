---
name: "MemInStream"
kind: paper
summary: "流式视频记忆诊断基准，利用有时间范围的证据和反事实输入区别视觉感知错误与真正记忆失效。"
firstSeen: 2026-11-15
updated: 2026-11-15
status: research
tags: [streaming-video, multimodal-evaluation, memory, video-rag, temporal-evidence]
officialUrl: ""
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.15640"
relevancePi67: 74
relevanceAios: 96
maturity: 35
related: [aios-video-rag, aios-visual-memory]
timeline:
  - date: 2026-11-11
    title: 研究论文公开
    summary: 作者提出带证据时间区间的四类、17 项细粒度视频记忆任务，分别检查历史证据是否足以回答问题、是否确实不可替代。
    status: research
  - date: 2026-11-15
    title: AI Radar 收录与工程分类
    summary: 目前核验到原始论文，尚未确认完整代码或数据公开；保留为评测方法研究，不夸大为成熟的可部署视频理解模型。
    status: research
sources:
  - title: "MemInStream original paper"
    url: "https://arxiv.org/abs/2611.15640"
    published: "2026-11-11"
---

## 核心解读

同一个视频问答题答错，可能是没有看清，也可能是没有记住；答对则可能仅依赖近期帧或语言先验。MemInStream 对每题标注相关证据时间区间，通过直接提供证据、仅用最近帧、证据后帧和文本输入等条件检测是否真正需要历史记忆。

## 工程判断

这提供了一种更严谨的评测设计，适合为视频事件、状态变化与跨镜头推断建立可追溯的证据集，而不是仅比较模型的笼统视频问答准确率。

**成熟度 35/100：** 原始论文已核实，代码与完整数据交付尚未独立确认，按早期研究评估。

## 后续验证

- 给每项待分析内容同时标注镜头时间段和足以支持判断的证据。
- 区分感知失败、检索失败、记忆更新失败与推理失败，并对比仅使用近邻帧的基线。
- 数据集正式可获取后检查许可证及实际视频素材覆盖情况。
