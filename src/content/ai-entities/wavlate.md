---
name: WavLate
kind: model
summary: 开放的音频与文本多向量晚交互检索模型，对音频约每 0.31 秒保留局部表示，可将文字描述与具体声学片段匹配。
firstSeen: 2026-11-23
updated: 2026-11-23
status: research
tags: [audio, retrieval, multimodal-rag, sound-effects, open-weights]
officialUrl: "https://huggingface.co/blog/chungimungi/wavlate-audio-retrieval-goes-multi-vector"
githubUrl: ""
paperUrl: ""
relevancePi67: 58
relevanceAios: 94
maturity: 64
related: []
timeline:
  - date: 2026-11-23
    title: 核验 11 月 20 日作者发布与公开模型、数据、评测池
    summary: 作者披露每 0.31 秒音频向量与逐词晚交互匹配，公开权重及训练材料；基准 Recall@1 属作者自评，尚未验证中文配乐、音效、口播混合视频场景。
    status: research
sources:
  - title: "WavLate original technical article"
    url: "https://huggingface.co/blog/chungimungi/wavlate-audio-retrieval-goes-multi-vector"
    published: "2026-11-20"
  - title: "WavLate original model repository"
    url: "https://huggingface.co/chungimungi/WavLate"
---

## 工程判断

64/100：公开权重、训练数据和基准材料使其可测试；无独立中文商业短视频表现、吞吐与成本验证。

适合检索音效、音乐片段和声学事件；不是 ASR、说话人声纹模型或音色质量测量器。音频片段向量并不自动提供准确视频事件起止时间。
