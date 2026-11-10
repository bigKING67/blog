---
name: "HOPE (Higher-Order Pruning of Experts)"
kind: paper
summary: "Amazon 研究人员提出考虑 MoE 专家成对交互的剪枝方法，2026-09-16 首次发表于 arXiv，2026-11-09 官方技术文讲解开源实现及评测。"
firstSeen: 2026-11-10
updated: 2026-11-10
status: research
tags: [moe, model-compression, open-source, inference, research]
officialUrl: "https://huggingface.co/blog/amazon/higher-order-pruning-experts"
githubUrl: "https://github.com/awslabs/HOPE"
paperUrl: "https://arxiv.org/abs/2609.18916"
relevancePi67: 80
relevanceAios: 75
maturity: 58
related: []
timeline:
  - date: 2026-11-10
    title: "Amazon 公开 HOPE 的工程教程与可运行剪枝流程"
    summary: "论文原始提交日为 2026-09-16、非 11 月新论文；11-09 技术文章说明 calibrate/solve/prune。作者报告 50% 剪枝时对 Agent 编码任务有优势，未独立复现；不适用于密集 4B 模型。"
    status: research
sources:
  - title: "HOPE 原始论文（2026-09-16）"
    url: "https://arxiv.org/abs/2609.18916"
    published: "2026-09-16"
  - title: "Amazon 官方工程解读（2026-11-09）"
    url: "https://huggingface.co/blog/amazon/higher-order-pruning-experts"
    published: "2026-11-09"
  - title: "awslabs/HOPE 官方开源实现"
    url: "https://github.com/awslabs/HOPE"
    published: "2026-09-29"
---

## 工程判断
58/100：有论文和开源实现但属于研究原型，需要高内存模型和专门校准；不能将剪枝视为零精度损失。不同任务分布和剪枝比例可能导致不同效果。

## 研究行动
若未来评测 MoE 推理节点，可对同一模型在 20%/40%/50% 剪枝率下比较显存、成功率、推理延迟与模型兼容性。常规小型 Dense 多模态模型不适用 HOPE。
