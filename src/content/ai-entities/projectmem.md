---
name: PROJECTMEM
kind: project
summary: 开源本地优先的编码 Agent 项目记忆层，以追加事件日志保存尝试、失败与决策，通过 MCP 检索并在重复错误执行前提醒。
firstSeen: 2026-10-28
updated: 2026-10-28
status: research
tags: [agent-memory, context-engineering, mcp, coding-agent, event-sourcing]
officialUrl: "https://github.com/riponcm/projectmem"
githubUrl: "https://github.com/riponcm/projectmem"
paperUrl: "https://arxiv.org/abs/2606.12329"
relevancePi67: 96
relevanceAios: 70
maturity: 55
related: [openviking, hindsight, statetape]
timeline:
  - date: 2026-06-10
    title: PROJECTMEM 原始论文公开
    summary: 提出以本地追加事件流保存编码 Agent 的问题、尝试、修复与决策，并将先前失败经验用于执行前提醒；作者研究样本有限。
    status: research
  - date: 2026-10-28
    title: 作为开源项目纳入 AI Radar
    summary: 官方 GitHub 提供源码、测试及 MCP 接入；尚无跨项目大规模独立验证，不把作者自测当作生产效果证据。
    status: research
sources:
  - title: "PROJECTMEM authors: original paper"
    url: "https://arxiv.org/abs/2606.12329"
    published: "2026-06-10"
  - title: "PROJECTMEM official GitHub repository"
    url: "https://github.com/riponcm/projectmem"
---

## 核心解读

与单纯的语义向量记忆不同，PROJECTMEM 重视带有因果上下文的工程事件流，并在 Agent 即将重复既有失败方案时提供约束提示。

## 工程成熟度判断

55/100：已有开放源码、命令行/MCP 接口与作者自测，属于可试验的开源研究项目；尚无充分独立生产证据。

## 实际验证建议

以跨 Session 回归任务检验检索正确率、失败重试阻止率、过期记忆干扰和存储/隐私边界；可与其他记忆方案对照但不要默认并行接入生产。
