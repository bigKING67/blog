---
name: "HoMe"
kind: paper
summary: "通过失败归因、会话级记忆版本与评测反馈优化记忆系统 Harness，已有 ReMe 插件。"
firstSeen: 2026-11-28
updated: 2026-11-28
status: research
tags: ["agent-memory","context-engineering","evaluation"]
officialUrl: "https://reme.agentscope.io/en/blog_20261124"
githubUrl: "https://github.com/agentscope-ai/ReMe"
paperUrl: "https://arxiv.org/abs/2611.34624"
relevancePi67: 98
relevanceAios: 87
maturity: 68
related: ["openviking","hindsight","context-evo"]
sources:
  - title: "Original arXiv paper"
    url: "https://arxiv.org/abs/2611.34624"
    published: "2026-11-25"
  - title: "Author-linked GitHub repository"
    url: "https://github.com/agentscope-ai/ReMe"
  - title: "Project technical documentation"
    url: "https://reme.agentscope.io/en/blog_20261124"
timeline:
  - date: 2026-11-28
    title: "核验原始论文并纳入研究"
    summary: "作者报告 LongMemEval-S 留出集从 88.8% 到 91.6%，查询 Token 减少 59.2%；BEAM-1M 从 65.0% 到 70.4%，查询 Token 减少 40.7%。不计记忆构建及优化成本，有个别子类退步，未独立复现。已有代码和文档，未进行本地验证。"
    status: research
---

## 工程判断

优化器、诊断器及案例 Agent 结合两套版本历史，从回答错误回溯到检索、记忆写入或维护机制。

pi-67 可建立记忆版本、来源、失败归因和留出集评测；AIOS 可借鉴证据生命周期测试。

68/100。作者报告 LongMemEval-S 留出集从 88.8% 到 91.6%，查询 Token 减少 59.2%；BEAM-1M 从 65.0% 到 70.4%，查询 Token 减少 40.7%。不计记忆构建及优化成本，有个别子类退步，未独立复现。已有代码和文档，未进行本地验证。
