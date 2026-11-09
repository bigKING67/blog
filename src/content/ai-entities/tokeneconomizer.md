---
name: TokenEconomizer
kind: project
summary: "微软研究与加州大学伯克利团队提出的跨 Coding Agent 黑盒成本控制插件，以微技能、工具裁剪和失败循环干预降低重复任务的 Token 开销。"
firstSeen: 2026-11-09
updated: 2026-11-09
status: research
tags: [coding-agent, context-engineering, token-efficiency, skills, evaluation]
officialUrl: "https://tokeneconomizer.github.io/"
githubUrl: "https://github.com/microsoft/TokenEconomizer"
paperUrl: "https://arxiv.org/abs/2610.22732"
relevancePi67: 98
relevanceAios: 86
maturity: 68
related: []
timeline:
  - date: 2026-10-15
    title: "研究论文首次公开"
    summary: "论文提出对连续 Coding Agent 任务进行微技能注入、工具裁剪、重复失败循环干预；论文节约比例是作者实验，不代表独立复测结果。"
    status: research
  - date: 2026-11-09
    title: "公开实现与跨宿主集成核验"
    summary: "官方仓库给出 Claude Code、Codex、Copilot CLI、Pi 的接入方式及实验代码；可针对多轮真实任务成本与正确率开展复现。"
    status: research
sources:
  - title: "TokenEconomizer original paper"
    url: "https://arxiv.org/abs/2610.22732"
    published: "2026-10-15"
  - title: "Microsoft TokenEconomizer official repository"
    url: "https://github.com/microsoft/TokenEconomizer"
---

## 工程判断

研究重点是重复任务的上下文复用与执行路径自适应，而非把单轮 Prompt 截短。作者在连续任务实验中报告 18.4%–30.9% 的平均成本降低（含插件模型调用），没有独立复现。插件具有工作目录和工具配置修改能力，需要隔离环境测试、权限审查与回退方案。

## 评测计划

以同一代码库的连续 Issue 流比较任务成功率、总费用（含缓存及控制器开销）、失败循环次数、工具定义 Token 和误裁剪恢复次数；对不同 Agent 宿主分别测试，不把供应商实验等同生产结论。
