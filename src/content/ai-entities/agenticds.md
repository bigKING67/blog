---
name: "AgenticDS"
kind: project
summary: "使用类型化执行契约、混合检索与来源校验进行模型训练数据集搜索的开源研究系统。"
firstSeen: 2026-11-01
updated: 2026-11-01
status: research
tags: [agent, retrieval, evaluation, provenance, open-source]
officialUrl: ""
githubUrl: "https://github.com/nju-websoft/AgenticDS"
paperUrl: "https://arxiv.org/abs/2610.39608"
relevancePi67: 93
relevanceAios: 88
maturity: 56
related: [longharness, context-evo]
timeline:
  - date: 2026-11-01
    title: 核验 10 月 29 日论文与作者官方仓库
    summary: "已公开检索代码与 HuDS-Bench；采用 Planner/Engineer/Critic、受限执行协议和可归属证据；尚未在本项目业务环境复现。"
    status: research
sources:
  - title: "AgenticDS 作者官方 GitHub 仓库"
    url: "https://github.com/nju-websoft/AgenticDS"
  - title: "From Intent to Improvement 原始论文"
    url: "https://arxiv.org/abs/2610.39608"
---

## 工程判断

论文与源码已公开，但依赖索引数据、预设检索组件及模型服务，并非开箱即用的企业知识库。核心价值在于将规划、确定性操作、来源证据和诊断修复分离，避免由同一个 LLM 自行宣称检索结果满足条件。作者 NDCG 改善是论文内部实验，不是独立复现。

## 待验证

比较证据来源正确率、约束满足率、检索成本和误召回，尤其测试缺失元数据时能否诚实返回 unknown。成熟度 56/100，早期开源研究原型。
