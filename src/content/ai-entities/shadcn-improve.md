---
name: shadcn improve
kind: project
summary: shadcn 开源的 Agent Skill，使用高能力模型只读审查代码库、生成可验证的独立计划，再交给更低成本的执行 Agent；支持工作树隔离和人工审核。
firstSeen: 2026-11-13
updated: 2026-11-13
status: research
tags: [agent, coding, context-engineering, skills, multi-agent, open-source]
officialUrl: "https://github.com/shadcn/improve"
githubUrl: "https://github.com/shadcn/improve"
paperUrl: ""
relevancePi67: 96
relevanceAios: 79
maturity: 67
related: []
timeline:
  - date: 2026-11-13
    title: 核验官方项目并收录跨 Agent 工程方案
    summary: 官方 README 介绍只读审计、带文件证据的发现、独立 Markdown 计划、验证关卡、预算分层、隔离 Worktree 执行与人工合并；这仍是软件工程 Skill，并非通用保证可靠的规划器。
    status: research
sources:
  - title: "shadcn/improve official GitHub repository and README"
    url: "https://github.com/shadcn/improve"
  - title: "Official improve SKILL.md"
    url: "https://github.com/shadcn/improve/blob/main/skills/improve/SKILL.md"
---

## 工程判断

成熟度 67/100：具备源码、可安装 Skill、明确的操作边界与完整流程，适合复现实验；未见独立、可复制的跨仓库成功率与节省成本评测。项目宣称的约束应检查实际执行权限，而不只信任提示词。

## 评测方向

- 在多个 Agent 宿主上比较高级模型一次性审查和低成本执行的总体成功率与 Token 成本。
- 检查计划是否包含仓库版本、精确文件位置、确认命令、失败停止条件以及人工批准步骤。
- 以仓库和 Agent 宿主中立方式借鉴流程，不强制使用某一云端代码托管平台。
