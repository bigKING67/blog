---
name: V-JEPA-LM
kind: research
summary: 冻结 V-JEPA 2.1 视频编码器、以反事实视频监督训练 1B–8B 语言模型读取运动方向、速度、顺序和状态变化的研究与开放模型。
firstSeen: 2026-11-23
updated: 2026-11-23
status: research
tags: [video-understanding, multimodal, world-model, open-weights, temporal-reasoning]
officialUrl: "https://github.com/kkt94/Llama-V-JEPA-LM"
githubUrl: "https://github.com/kkt94/Llama-V-JEPA-LM"
paperUrl: "https://arxiv.org/abs/2611.17831"
relevancePi67: 68
relevanceAios: 98
maturity: 65
related: [videotapestry]
timeline:
  - date: 2026-11-23
    title: 核验论文、官方代码及模型资料，进入视频理解评测候选
    summary: 原始论文于 11 月 13 日发布；作者公开 1B–8B 架构、模型与训练方法。4B 结果为作者在特定基准的报告，不视为独立复现。尚未证明适用于中文广告框架拆解及低显存生产环境。
    status: research
sources:
  - title: "V-JEPA-LM original paper"
    url: "https://arxiv.org/abs/2611.17831"
    published: "2026-11-13"
  - title: "Llama-V-JEPA-LM author code and model links"
    url: "https://github.com/kkt94/Llama-V-JEPA-LM"
---

## 工程判断

65/100：研究成果已有代码及模型入口，具备独立评测条件；缺乏中文短视频任务的独立验证和部署基准。

重点关注反事实监督是否改进动作速度、镜头运动、顺序与状态变化识别。不得以作者跨基准汇总分数替代实际素材测试。
