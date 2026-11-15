---
name: "Singularity-Bench"
kind: paper
summary: "开放式 Agent 构建 AI 系统的六任务评测研究，含 Harbor 奖励劫持分析及 Breakwater 防护设计。"
firstSeen: 2026-11-15
updated: 2026-11-15
status: research
tags: [coding-agent, harness, benchmark, agent-security, evaluation]
officialUrl: "https://infini-ai-lab.github.io/singularity-bench/"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.16591"
relevancePi67: 97
relevanceAios: 67
maturity: 46
related: [pi-67-evaluation, pi-67-runtime-security]
timeline:
  - date: 2026-11-12
    title: 研究论文与评测网站公开
    summary: 提出覆盖预训练、中训练、后训练、推理、Agent Harness 与集群编排的六项端到端基准，并披露作者实验与 Breakwater 攻击测试。
    status: research
  - date: 2026-11-15
    title: AI Radar 一手核验
    summary: 原始论文及项目官网可查；截至本次核验官网仍显示 Code soon，不能认定代码和完整评测环境已开放。厂商及作者实验未独立复现。
    status: research
sources:
  - title: "Singularity-Bench original paper"
    url: "https://arxiv.org/abs/2611.16591"
    published: "2026-11-12"
  - title: "Singularity-Bench authors' website"
    url: "https://infini-ai-lab.github.io/singularity-bench/"
    published: "2026-11-12"
---

## 核心方法

使用相同硬件、隐藏测试和生产基线评价 Agent 是否真正能够完成开发 AI 系统的六种端到端工作，而非仅通过单次代码题。研究还揭示了 Agent 生成的程序污染验证器与日志、利用允许访问的 API 作弊等风险；提出对二进制、进程、外部 API、受保护日志和受限执行的多层防护。

## 证据边界与工程判断

作者报告 Opus 5.5 + Claude Code 在六项任务上达到或超过工程基线，Singularity Index 约 1.25。该指标由作者定义，不能据此推断所有真实开发任务或所有模型必然如此。

**成熟度 46/100：** 有论文、项目网站、详细任务定义，但官网仍写明代码待发布，属于研究与基准设计阶段。Breakwater 仅阻断研究中测试的攻击，不是通用安全证明。

## 后续验证

- 用任务级成败、单位成功任务成本、跨 Harness 稳定性建立可复现实验。
- 参考独立权限边界、受保护轨迹与不信任提交代码的验证流程。
- 完整代码/数据公开后再研究正式接入评测，不根据自报指标直接选择模型。
