---
name: Pi Coding Agent
kind: project
summary: 开源 Coding Agent 与可扩展 Agent Harness，近期 v1.4.0 改进多模态分类、会话压缩、Codemode 并发和 Windows 兼容性。
firstSeen: 2026-10-26
updated: 2026-10-26
status: research
tags: [coding-agent, agent-harness, context-engineering, session, cross-platform]
officialUrl: "https://pi.dev/"
githubUrl: "https://github.com/earendil-works/pi"
paperUrl: ""
relevancePi67: 99
relevanceAios: 61
maturity: 87
related: [goose]
timeline:
  - date: 2026-10-21
    title: Pi v1.4.0 发布
    summary: 官方版本记录新增多模态分类器图像输入、模型配置参考、弹性摘要输出上限、Codemode 等待空闲 worker 和 Windows 相关修复。
  - date: 2026-10-26
    title: 首次纳入 AI Radar 长期跟踪
    summary: 依据官方版本记录建立项目实体，维持 RESEARCH；工程成熟度代表已有可评测代码与版本迭代，不代表目标产品已完成集成验证。
    status: research
sources:
  - title: "Pi v1.4.0 official release"
    url: "https://github.com/earendil-works/pi/releases/tag/v1.4.0"
    published: "2026-10-21"
  - title: "Pi official repository"
    url: "https://github.com/earendil-works/pi"
---

## 核心解读

把分类、并发、会话摘要和模型路由放在可组合的 Agent Harness 层，可以避免把每个任务都交给大型通用模型。1.4.0 修复了长推理内容导致摘要输出触顶、Codemode worker 繁忙时直接失败等工程问题。

## 评测建议

评测会话恢复、上下文压缩一致性、并发排队、Windows 交互和自定义模型适配。现有项目与版本均通过官方仓库直接来源核验；没有独立测量目标工程中的稳定性。
