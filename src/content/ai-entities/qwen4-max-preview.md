---
name: Qwen4-Max-Preview
kind: model
summary: "阿里云于 2026-11-11 开放的新一代千问旗舰多模态模型限时预览，支持图片、视频理解、工具调用与结构化输出，当前仅通过 Token Plan 调用。"
firstSeen: 2026-11-14
updated: 2026-11-14
status: watch
tags: [qwen4, multimodal, video-understanding, coding-agent, api-preview]
officialUrl: "https://help.aliyun.com/en/model-studio/qwen4-max-preview"
githubUrl: ""
paperUrl: ""
relevancePi67: 88
relevanceAios: 90
maturity: 68
related: [gemini-4-argon]
timeline:
  - date: 2026-11-14
    title: 官方限时预览与接入条件核验
    summary: "阿里云官方文档确认 11 月 11 日发布、百万 Token 上下文、视频输入、函数调用以及 Token Plan 独占；预览将于 11 月 25 日结束，参数量、可下载权重和独立业务评测尚未确认。"
    status: watch
sources:
  - title: "Alibaba Cloud Model Studio - Qwen4-Max-Preview"
    url: "https://help.aliyun.com/en/model-studio/qwen4-max-preview"
    published: "2026-11-11"
  - title: "Alibaba Cloud model releases"
    url: "https://help.aliyun.com/en/model-studio/newly-released-models"
---
## 技术判断

这是一项已可经订阅 API 实测、但生命周期很短的预览模型，而不是已开放权重的本地小模型。官方支持视频输入并不代表对复杂短视频事件定位、分镜拆解的质量已有独立证明。

## 工程验证重点

以固定任务集验证不同 Agent Harness 的工具调用成功率、长任务成本以及视频事件时间定位准确率；11 月 25 日后需重新核实可用性。成熟度表示工程评测可行性，不是模型能力排名。
