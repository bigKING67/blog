---
name: Scarlet
kind: project
summary: "Forward Future 2026-11-13 公开的 MIT 开源桌面视频编辑器，支持 Claude Code/Codex 通过文字或语音提出剪辑修改、片段预览和可撤销时间线编辑。"
firstSeen: 2026-11-16
updated: 2026-11-16
status: research
tags: [video-editing, open-source, coding-agent, timeline, agent-workflow]
officialUrl: "https://github.com/Forward-Future/scarlet"
githubUrl: "https://github.com/Forward-Future/scarlet"
paperUrl: ""
relevancePi67: 79
relevanceAios: 96
maturity: 61
related: [hyperframes]
timeline:
  - date: 2026-11-13
    title: "公开 Scarlet 桌面视频编辑项目"
    summary: "项目提供 Tauri 桌面编辑器、对话剪辑、建议/实际修改分离、非破坏性时间线、局部预览及导出；作者说明处于早期开发。"
    status: research
  - date: 2026-11-16
    title: "首次纳入 AI Radar 候选评测"
    summary: "基于项目仓库核对工作流、跨平台构建指引与 MIT 许可证；尚未验证复杂商品广告视频剪辑效果或大规模自动化稳定性。"
    status: research
sources:
  - title: "Forward Future: Scarlet official repository and README"
    url: "https://github.com/Forward-Future/scarlet"
    published: "2026-11-13"
---

## 工程判断

61/100：可获取源代码、编辑工作流与基础构建说明，具备实际测试条件，但项目仍处早期，不宜认为已经适用于无人值守生产。

适合研究 AIOS 的非破坏性编辑数据结构、建议与执行分离、局部渲染/试听、可撤销修改及 OTIO/FCPXML 交换；现有定位尤其侧重访谈和口播视频。接入外部 Agent 时，应明确上传给模型的转写/画面上下文及隐私边界。
