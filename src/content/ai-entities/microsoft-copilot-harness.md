---
name: "Microsoft Copilot Harness"
kind: project
summary: "Microsoft 2026-10-28 公布将 GitHub 构建的多模型 Agent Harness 通过 Foundry 托管与 Copilot SDK 向开发者提供，覆盖工具、上下文、沙箱与模型路由。"
firstSeen: 2026-11-10
updated: 2026-11-10
status: research
tags: [agent-harness, coding, enterprise-agent, multi-model, runtime]
officialUrl: "https://blogs.microsoft.com/blog/2026/10/28/introducing-the-microsoft-copilot-harness-unlocking-the-potential-of-truly-multi-model-agentic-work/"
githubUrl: "https://github.com/github/copilot-sdk"
paperUrl: ""
relevancePi67: 92
relevanceAios: 83
maturity: 76
related: []
timeline:
  - date: 2026-11-10
    title: "补录 10 月 28 日官方发布：多模型 Harness 通过 Microsoft Foundry 与 SDK 提供"
    summary: "10-28 发布，11-10 研究补录，并非今日新发。官方说明 Rust Runtime、MCP/Agent Skills 支持、托管沙箱和 SDK；开源 SDK 不等于完整托管 Harness 运行时代码全部开源，性能数据为官方自报。"
    status: research
sources:
  - title: "Microsoft Copilot Harness 官方发布（2026-10-28）"
    url: "https://blogs.microsoft.com/blog/2026/10/28/introducing-the-microsoft-copilot-harness-unlocking-the-potential-of-truly-multi-model-agentic-work/"
    published: "2026-10-28"
  - title: "GitHub Copilot SDK 官方仓库（已有仓库，非 10 月 28 日新建）"
    url: "https://github.com/github/copilot-sdk"
---

## 工程判断
76/100：产品化 Harness 与开发 SDK 可评测，但托管服务与开源 SDK 范围须分开理解。不是可以直接拷贝部署的完整开源 Harness。

## 研究行动
研究统一执行循环、模型适配器、工具权限和任务状态；可借鉴架构模式，但保持 Agent 宿主和代码托管平台中立。
