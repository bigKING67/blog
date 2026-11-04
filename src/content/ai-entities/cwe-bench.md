---
name: CWE-bench
kind: project
summary: Collinear AI 维护的真实代码漏洞修复 Agent 基准；2026-11-03 的 v2 公开 100 个覆盖 91 类 CWE 的可执行测试任务。
firstSeen: 2026-11-04
updated: 2026-11-04
status: research
tags: [coding-agent, benchmark, security, reproducibility, open-source]
officialUrl: "https://huggingface.co/blog/cwe-bench"
githubUrl: ""
paperUrl: ""
relevancePi67: 92
relevanceAios: 66
maturity: 70
related: [reviewbench, swe-critix]
timeline:
  - date: 2026-11-03
    title: CWE-bench v2 公开任务集
    summary: 项目方发布 100 项公开修复任务，涵盖 91 个 CWE 类型，使用容器与确定性验证器评测；排行榜分数和成本仍属于项目方报告。
    status: research
  - date: 2026-11-04
    title: 核验数据集和公开评测流程
    summary: 已核查研究机构官方文章及官方数据集；评测候选有可运行实例，但不把 100 任务代表性或榜单值解释成通用安全能力。
sources:
  - title: "Collinear AI: CWE-bench v2 announcement"
    url: "https://huggingface.co/blog/cwe-bench"
    published: "2026-11-03"
  - title: "Collinear AI: CWE-bench public dataset"
    url: "https://huggingface.co/datasets/collinear-ai/cwe-bench"
---

## 工程判断

该项目提供真实仓库的防御性漏洞修复任务和程序化验证，而不是由 LLM 纯主观打分。公开数据集可供复核；保留集需联系团队才能访问，不能把公开榜单视为防数据污染的完整证据。

成熟度 70/100：有明确任务、数据与工具执行入口，可进行复现实验；评测者仍需校对任务的覆盖与修复正确性。

## 使用建议

- 在编程 Agent 评测加入功能回归、防止漏洞重现和完整测试通过率。
- 区分厂商自报的 pass@k、任务费用与目标项目中的实际安全表现。
