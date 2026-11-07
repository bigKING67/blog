---
name: Gemini Omni 1.2 Flash
kind: model
summary: Google 于 2026-11-05 正式在 Gemini API 推出的可对话编辑视频模型，支持 3–15 秒生成及参考素材约束。
firstSeen: 2026-11-07
updated: 2026-11-07
status: research
tags: [video-generation, multimodal, generative-media, video-editing, api]
officialUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/"
githubUrl: ""
paperUrl: ""
relevancePi67: 67
relevanceAios: 97
maturity: 83
related: [hyperframes]
timeline:
  - date: 2026-11-05
    title: Gemini Omni 1.2 Flash 公开推出
    summary: Google 公告在 Gemini API 与企业产品正式可用；支持 3–15 秒原生视频及多轮编辑，官方公布 720p 每秒 0.07 美元价格。
    status: research
  - date: 2026-11-07
    title: 纳入公开技术评测候选
    summary: 依据 Google 官方发布确认接入条件；参考图保持、品牌文字一致性、实际端到端费用尚需业务独立测试。
    status: research
sources:
  - title: "Google: Gemini Omni 1.2 Flash launch"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/"
    published: "2026-11-05"
---

## 工程判断

公开 API 及官方价格使其具备生产评测条件，工程成熟度 **83/100**。Google 公布最大 15 秒、支持连续多轮编辑、参考图片和短运动片段，且 720p 价格降至每秒 0.07 美元；官方展示的商品文字一致性、镜头控制和成本节省属于厂商陈述，不能代替独立视频生成质量测试。

## 评测方向

- 统一商品参考图、改写要求及镜头指令，测试主体保真、包装文字准确率、色彩一致性与失败重试率。
- 区分 360p/720p 草稿、后续编辑和高清升级的完整生产成本；不得只取模型标价作为合格成片单价。
- 比较“局部修订”与“完全重生成”在质量、时延、成本上的差异。
