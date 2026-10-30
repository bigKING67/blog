---
name: Mistral Large 4
kind: model
summary: Mistral 的超大规模多模态 MoE 模型，2026-10-06 开放 API 预览，2026-10-29 正式提供开放权重；适合作为大规模部署与模型评测的研究候选。
firstSeen: 2026-10-30
updated: 2026-10-30
status: research
tags: [frontier-model, open-weights, coding, multimodal, agent, security]
officialUrl: "https://mistral.ai/news/mistral-large-4/"
githubUrl: ""
paperUrl: ""
relevancePi67: 89
relevanceAios: 63
maturity: 77
related: []
timeline:
  - date: 2026-10-06
    title: Mistral Large 4 API 公共预览
    summary: Mistral 发布模型与 API 预览，并预告月底开放权重；首发时尚不能据此确认模型权重已可下载。
    status: watch
  - date: 2026-10-29
    title: 官方开放权重上线 Hugging Face
    summary: mistralai/Mistral-Large-4-1T-A52B 已有原厂模型卡及模型文件，支持多模态输入与工具调用。该模型大幅超过普通消费级显存容量，厂商 Benchmark 未独立复现，Model-as-a-Service 使用另有授权要求。
    status: research
sources:
  - title: "Mistral: Introducing Mistral Large 4"
    url: "https://mistral.ai/news/mistral-large-4/"
    published: "2026-10-06"
  - title: "Mistral official model card and weights"
    url: "https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B"
    published: "2026-10-29"
  - title: "Hugging Face: Welcome Le Chonk"
    url: "https://huggingface.co/blog/mistral-large4"
    published: "2026-10-29"
---

## 工程判断

成熟度 **77/100**：官方权重、模型卡、推理框架适配和 API 提供现实评测条件，但超大模型的自部署成本高。模型卡标称约 1T 总参数、约 52B 激活参数、1M 上下文，输入为文本/图像，输出为文本；并非原生视频或语音生成模型。公开权重不等于无限制开源，部署与商用须核对 Mistral Ecosystem Open-Weight License。

官方和第三方渠道提供的 Benchmark 应区分“已公开测试结果”与“在目标环境独立复现”，不以自报成绩直接确认模型领先。

## 下一步

- 统一测试代码任务、工具调用、结构化输出和图片内容理解，并记录单位成功任务成本。
- 视频素材分析应以帧图像和字幕为输入构造真实测试，不从图片 Benchmark 外推视频效果。
- 大规模模型优先评估托管 API 或专用集群，不作为普通工作站本地部署候选。
