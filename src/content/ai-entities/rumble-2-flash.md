---
name: "Rumble-2-Flash"
kind: model
summary: "Reson8 发布的 0.5B 开放权重多语言语音识别模型，采用 Qwen3-ASR 架构，支持 Transformers 与 vLLM，适合以中文真实语料进行对照评测。"
firstSeen: 2026-11-22
updated: 2026-11-22
status: research
tags: [asr, audio, open-weights, multilingual, small-model]
officialUrl: "https://huggingface.co/Reson8/Rumble-2-Flash"
githubUrl: ""
paperUrl: ""
relevancePi67: 56
relevanceAios: 85
maturity: 72
related: []
timeline:
  - date: 2026-11-22
    title: "核验 11 月 18 日公开权重与原始模型卡"
    summary: "0.5B 参数、Apache-2.0、40 余种语言，模型卡给出中文 CER 与多语种 WER；吞吐数据取决于 H200 与高批量设置，不能外推到消费级显卡。"
    status: research
sources:
  - title: "Reson8 official model card and weights"
    url: "https://huggingface.co/Reson8/Rumble-2-Flash"
  - title: "Reson8 / Hugging Face release article, 2026-11-18"
    url: "https://huggingface.co/blog/rumble-2-flash"
    published: "2026-11-18"
---

## 工程解读

模型卡报告中文 AISHELL-1 CER 7.31%、FLEURS CER 5.82%，但这不是实际中文短视频、口播、混音、噪声、专有名词上的验证结果。发布方的超高吞吐采用特定服务器硬件和批量条件。

这是语音转写 ASR，不承担音色鉴定、声纹、音乐/音效识别。应对照已有语音转写模型的真实质量、吞吐及错误类型，再决定是否有替换价值。
