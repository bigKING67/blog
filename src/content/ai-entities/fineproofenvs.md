---
name: "FineProofEnvs"
kind: research
summary: "基于 Qwen3.5-2B 的数学证明强化学习复现实验，公开训练环境、模型、日志及评测轨迹。"
firstSeen: 2026-11-26
updated: 2026-11-26
status: research
tags: ["reinforcement-learning","agent-evaluation","small-model","verifier"]
officialUrl: "https://huggingface.co/blog/FineEnvs/fineproofenvs-rl-2b-prover"
githubUrl: ""
paperUrl: ""
relevancePi67: 90
relevanceAios: 76
maturity: 63
related: ["swe-critix"]
timeline:
  - date: 2026-11-24
    title: "公开强化学习复现工件"
    summary: "11 月 24 日作者发布训练记录与模型；仅一次训练、64 道留出题及同族模型裁判，存在评分宽松问题。"
    status: research
sources:
  - title: "作者技术文章"
    url: "https://huggingface.co/blog/FineEnvs/fineproofenvs-rl-2b-prover"
    published: "2026-11-24"
  - title: "公开模型卡"
    url: "https://huggingface.co/FineEnvs/Qwen3.5-2B-FineProof-RL"
  - title: "训练环境"
    url: "https://huggingface.co/datasets/FineEnvs/fineproof-envs-train"
---

## 工程判断

63/100。作者报告 500 次更新后留出题归一化评分 0.217→0.407，约 28 小时和 820 美元训练与裁判开销。分数不是数学证明形式验证结果；人工抽查发现满分答案仍可能含错误。价值在于复现式训练环境、裁判防注入、数据去重与可审计轨迹；不能据此推断其他领域小模型能力。
