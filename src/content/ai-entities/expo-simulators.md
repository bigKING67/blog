---
name: Expo Simulators
kind: product
summary: "Expo 2026-11-12 正式提供的云端 iOS Simulator / Android Emulator 服务，让 Coding Agent 在隔离会话中运行应用、执行交互并提交录屏和截图证据。"
firstSeen: 2026-11-16
updated: 2026-11-16
status: research
tags: [coding-agent, computer-use, cloud-sandbox, verification, mobile-testing]
officialUrl: "https://expo.dev/blog/introducing-expo-simulators-cloud-simulators-built-for-agents"
githubUrl: ""
paperUrl: ""
relevancePi67: 84
relevanceAios: 55
maturity: 82
related: []
timeline:
  - date: 2026-11-12
    title: "Expo Simulators 正式 GA"
    summary: "Expo 宣布所有付费方案可使用云端 iOS/Android 模拟会话；记录用户交互、录屏、截图和日志，支持 CLI/CI/API 控制与授权访问。"
    status: research
  - date: 2026-11-16
    title: "纳入 Agent 可验证交付研究"
    summary: "依据官方文档核对跨 Agent CLI、独立设备会话及 PR 证据机制；尚未对服务可用性、收费和并发上限进行自己的生产测试。"
    status: research
sources:
  - title: "Expo: Introducing Expo Simulators"
    url: "https://expo.dev/blog/introducing-expo-simulators-cloud-simulators-built-for-agents"
    published: "2026-11-12"
  - title: "Expo Simulators official product documentation"
    url: "https://expo.dev/services/simulators"
---

## 工程判断

82/100：官方已宣布 GA、提供云端会话、CLI/REST API 接入与证据产物，具备严肃生产前评测条件；不是开源模拟器，也不能推断所有企业的成本或性能收益。

对 pi-67 的启示是将“完成代码”与“运行目标程序、收集独立证据”拆开，并将可审查的执行录屏和日志附在交付物上。无需把多 Agent 编排直接绑定 Expo 平台。
