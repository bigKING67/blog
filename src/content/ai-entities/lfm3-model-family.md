---
name: "Liquid AI LFM3"
kind: model
summary: "Liquid AI 于 2026-10-27 发布面向端侧应用的约 2B 参数多模态模型家族，包含视觉视频理解、音频理解及音画联合理解模型；性能尚待独立验证。"
firstSeen: 2026-10-27
updated: 2026-10-31
status: research
tags: [multimodal, video-understanding, audio-understanding, local-inference, open-weights]
officialUrl: "https://www.liquid.ai/blog/lfm3"
githubUrl: ""
paperUrl: ""
relevancePi67: 78
relevanceAios: 98
maturity: 72
related: []
timeline:
  - date: 2026-10-27
    title: "Liquid AI 公布 LFM3 系列模型与权重"
    summary: "官方提供 LFM3-VL-2B、LFM3-Audio-2B、LFM3-Omni-2B 等模型及模型卡，覆盖视频、音频与联合理解；宣传性能属于厂商实验数据。"
    status: research
  - date: 2026-10-31
    title: "AI Radar 核验并列为端侧多模态评测候选"
    summary: "核验官方发布和 Hugging Face 模型卡；模型权重可获取，但尚未验证具体设备的吞吐、显存与商业素材质量。"
    status: research
sources:
  - title: "Liquid AI official LFM3 announcement"
    url: "https://www.liquid.ai/blog/lfm3"
    published: "2026-10-27"
  - title: "LiquidAI LFM3-Omni-2B official model card"
    url: "https://huggingface.co/LiquidAI/LFM3-Omni-2B"
    published: "2026-10-27"
  - title: "LiquidAI LFM3-VL-2B official model card"
    url: "https://huggingface.co/LiquidAI/LFM3-VL-2B"
    published: "2026-10-27"
---

## 核心解读

LFM3 是面向特定设备与任务的模型家族，并非一个单独的“全能 2B 模型”。LFM3-VL-2B 支持视频画面理解，LFM3-Audio-2B 处理录音与声音事件，LFM3-Omni-2B 支持同步视频与音频输入。模型卡标注 LFM Open License 1.0，实际商用应审阅具体条件。

## 工程判断

**72/100，具备可复现的初步工程评测条件。** 已发布官方模型卡和权重，评分属于部署成熟度而非视频理解质量。厂商公布的多模态基准与速度数字未经过本知识库独立复现。

## 公开研究方向

与现有小型多模态模型在相同公开视频上比较镜头/事件/音效检出率、证据时间段准确率、显存、吞吐及每条处理成本；不把模型卡指标直接视为商业视频框架拆解能力。
