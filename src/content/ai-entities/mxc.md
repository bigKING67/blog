---
name: Microsoft MXC
kind: project
summary: Microsoft eXecution Container，面向 Windows、Linux、macOS 的跨平台不可信代码执行与沙箱基础设施。
firstSeen: 2026-10-08
updated: 2026-10-15
status: test
tags: [agent-runtime, sandbox, security, cross-platform]
officialUrl: ""
githubUrl: https://github.com/microsoft/mxc
paperUrl: ""
relevancePi67: 97
relevanceAios: 94
maturity: 82
related: []
timeline:
  - date: 2026-10-08
    title: 首次进入 AI 简报
    summary: 作为跨平台 Agent Sandbox / Runtime Security 候选进入研究。
    status: test
  - date: 2026-10-15
    title: 纳入 AI Radar 首批种子实体
    summary: 维持 TEST，优先验证 Windows 与 macOS 端的执行边界。
    status: test
sources:
  - title: Microsoft MXC GitHub
    url: https://github.com/microsoft/mxc
---

## 当前判断

MXC 是 pi-67 Runtime Security 值得优先验证的候选。

官方仓库提供统一的 containment model，并覆盖 Windows、Linux 与 macOS，同时提供 Rust、.NET、Node SDK。对需要跨平台 Shell / Tool 执行的桌面 Agent 来说，这比只依赖 Prompt 权限约束更接近真正的系统安全边界。

## 下一步

- 在 Windows 与 macOS 分别完成最小执行 PoC。
- 明确 MXC Sandbox 与 Browser / Desktop GUI 权限边界。
- 将 Capability Policy 与具体 Sandbox Backend 解耦。
