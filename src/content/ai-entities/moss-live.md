---
name: "MOSS-Live"
kind: project
summary: "OpenMOSS 2026-11-07 公布面向实时音视频交互的全双工系统，将前台连续对话与后台推理/工具执行协同，提供在线体验和 Realtime API。"
firstSeen: 2026-11-10
updated: 2026-11-10
status: research
tags: [audio, multimodal, realtime, agent-runtime, video-understanding]
officialUrl: "https://huggingface.co/blog/OpenMOSS-Team/moss-live"
githubUrl: "https://github.com/OpenMOSS/MOSS-Live"
paperUrl: ""
relevancePi67: 86
relevanceAios: 65
maturity: 56
related: []
timeline:
  - date: 2026-11-10
    title: "MOSS-Live 公开系统架构、演示与 Realtime API"
    summary: "官方仓库当前主要是说明、演示与 API 入口；没有确认完整模型权重和自部署推理代码开放，不能称已开源完整系统。团队公布的交互评测尚未独立复测。"
    status: research
sources:
  - title: "OpenMOSS 官方介绍"
    url: "https://huggingface.co/blog/OpenMOSS-Team/moss-live"
    published: "2026-11-07"
  - title: "OpenMOSS 官方 GitHub"
    url: "https://github.com/OpenMOSS/MOSS-Live"
    published: "2026-11-07"
---

## 工程判断
56/100：有实时 API 和演示，但未核验到完整可自部署实现，属于早期服务评测及架构参考，不应误当成本地离线音频分析模型。

## 研究行动
可以评测前台对话—后台工具任务的状态协调、插话恢复和异步结果过期处理。用于视频批处理的音色、语气、音乐、音效分析，需要另行验证适配性和成本。
