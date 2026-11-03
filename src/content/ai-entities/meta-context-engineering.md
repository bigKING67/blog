---
name: Meta Context Engineering (MCE)
kind: paper
summary: "ICML 2026 研究及开源实现：让 Agent 的上下文工程技能和上下文产物共同演化，而非固定一套摘要、检索或优化模板。"
firstSeen: 2026-11-03
updated: 2026-11-03
status: research
tags: [context-engineering, agent, skills, self-evolving, open-source]
officialUrl: "https://github.com/metaevo-ai/meta-context-engineering"
githubUrl: "https://github.com/metaevo-ai/meta-context-engineering"
paperUrl: "https://arxiv.org/abs/2601.21557"
relevancePi67: 97
relevanceAios: 81
maturity: 63
related: [context-evo]
timeline:
  - date: 2026-11-03
    title: 一手来源核验并纳入研究候选
    summary: "论文于 2026-01-29 首次提交 arXiv；官方代码库提供研究实现及实验复现入口。按可测试但尚缺独立生产验证的研究原型评为 63；论文指标属于作者报告。"
    status: research
sources:
  - title: "MCE 原始论文（arXiv）"
    url: "https://arxiv.org/abs/2601.21557"
    published: "2026-01-29"
  - title: "作者开源实现与安装说明"
    url: "https://github.com/metaevo-ai/meta-context-engineering"
---

## 核心机制

MCE 采用双层优化：元层 Agent 反思执行与评测历史，改进上下文工程 Skill；基础层 Agent 运行 Skill，生成由文件、规则、检索与程序组成的上下文函数。研究团队在多个任务上报告收益，但不能直接推断到任何公司的具体任务集。

## 工程成熟度与边界

**63/100：有代码且可开展实验的研究原型。** 成熟度衡量工程评测就绪程度，不等于能力或泛化性排名。尚无在 pi-67 或 AIOS 场景的独立复现实验。

## 可验证的下一步

用相同模型、相同任务集对比固定 Context Policy 与可演化 Skill；记录成功率、长会话恢复、Token 预算和评测数据泄漏风险。上下文优化建议不应自动扩大运行权限或改写不可变安全策略。
