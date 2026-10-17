---
name: agentry
kind: project
summary: 面向多种 AI 编程 Agent 的 Skills、MCP、Hooks 等可复现安装与跨工具同步管理器。
firstSeen: 2026-10-17
updated: 2026-10-17
status: research
tags: [agent, skills, mcp, developer-tools, team-workflow, multi-agent]
officialUrl: "https://opentechil.github.io/agentry/"
githubUrl: "https://github.com/OpenTechIL/agentry"
paperUrl: ""
relevancePi67: 96
relevanceAios: 73
maturity: 55
related: []
timeline:
  - date: 2026-10-17
    title: 发现并核验既有跨 Agent 配置管理项目
    summary: 核对 GitHub README、配置/锁文件、同步及多 Agent 目标驱动文档；项目并非今日首发，生态仍小，未对现有内部工具进行兼容性实测。
    status: research
sources:
  - title: "OpenTechIL/agentry official repository and documentation"
    url: "https://github.com/OpenTechIL/agentry"
---

## 核心解读

类似包管理器：配置文件声明 Skills、Agents、Commands、Hooks、MCP，锁文件固定来源提交，使团队不同机器及多个 Agent 宿主可以重复安装；同步过程尽量不覆盖用户自己维护的配置。

## 工程判断

成熟度 55/100：已有 MIT 许可开源实现、文档、测试与多平台安装说明，但目前社区规模较小且未经实际集成测试。Claude Code、Codex 等有内置适配；Pi 不是已核实的内置驱动，需要自定义 target profile 与兼容性验证。

## pi-67 / AIOS 启发

适合参考团队跨宿主组件分发、可复现锁定、权限检查和配置不覆写机制；不能把 package manager 当成多 Agent 编排器或产品工作流的完整替代品。
