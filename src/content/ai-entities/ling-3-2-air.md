---
name: "Ling-3.2-air"
kind: model
summary: "inclusionAI 开放权重原生多模态 MoE，124B 总参数、5.5B 激活参数，面向工作流与专业文档。"
firstSeen: 2026-11-25
updated: 2026-11-25
status: research
tags: ["open-weight","multimodal","moe","agent"]
officialUrl: "https://huggingface.co/inclusionAI/Ling-3.2-air"
githubUrl: ""
paperUrl: ""
relevancePi67: 84
relevanceAios: 82
maturity: 72
related: ["aios-document-pipeline","pi-67-evaluation"]
sources:
  - title: "Official model card"
    url: "https://huggingface.co/inclusionAI/Ling-3.2-air"
timeline:
  - date: 2026-11-25
    title: "一手来源核验与工程评估"
    summary: "核验 MIT 模型卡与视频 URL 输入及 SGLang 部署指引；首发精确日期未确认。"
    status: research
---

## 核心解读与工程判断

官方报告 AutomationBench-AA 从 15.7% 到 61%，GDP.pdf 全通过率从 8.4% 到 16%；属于发布方测试。总权重而非活跃参数决定主要驻留需求，官方 256K 配置建议四张 141GB 级 GPU 或四卡 Blackwell 节点。适合作为远程多模态工作流与文档对照模型，不是消费级小模型。72/100：权重及部署文档可获取，未独立生产验证。
