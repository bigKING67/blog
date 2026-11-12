---
name: "CopilotKit OpenBot"
kind: project
summary: "CopilotKit 开放的 AI coworker 工作台：Agent 使用独立计算环境，并通过统一网关授权和审计工具动作，可连接 AG-UI Agent；主程序 MIT，但 Intelligence 组件单独授权。"
firstSeen: 2026-11-12
updated: 2026-11-12
status: research
tags: [agent-infrastructure, computer-use, open-source, ag-ui, security]
officialUrl: "https://github.com/CopilotKit/OpenBot"
githubUrl: "https://github.com/CopilotKit/OpenBot"
paperUrl: ""
relevancePi67: 94
relevanceAios: 89
maturity: 65
related: [nvidia-openshell, deepseek-harness]
timeline:
  - date: 2026-11-12
    title: "一手来源核验并纳入长期研究"
    summary: "官方仓库提供架构、部署、隔离计算环境及工具授权审计说明。仓库 README 要求在多人接入前配置登录；本地演示单用户管理员模式不能作为生产安全配置。原始公开日未核实。"
    status: research
sources:
  - title: "CopilotKit OpenBot official GitHub repository"
    url: "https://github.com/CopilotKit/OpenBot"
  - title: "OpenBot architecture documentation"
    url: "https://github.com/CopilotKit/OpenBot/blob/main/docs/architecture.md"
---

## 工程解读

OpenBot 以 AG-UI 接入不同 Agent 实现，为 Agent 提供浏览器、文件及工具环境，并把工具动作经由策略判定与审计链路统一控制。公开源码包含工作台、部署和治理文档，但使用 CopilotKit Intelligence 需遵循其单独授权规则。

**成熟度 65/100：** 有公开代码、部署文档和可复现入口，适合系统级评估；不等于已通过企业级安全认证。官方提示本地试用的 `OPENBOT_SINGLE_USER=true` 允许单用户管理员模式，不可未经鉴权直接暴露给多人使用。

## 研究动作

- 比较独立 Agent Computer、统一工具策略网关和执行审计与现有运行时的可维护性。
- 检查单租户到多租户切换时的权限、网络隔离、凭据与文件泄漏边界。
- Agent 宿主、消息平台和代码托管层应保持可替换，不直接锁定某供应商。

