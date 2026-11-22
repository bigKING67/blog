---
name: "Atto Embedding Models"
kind: model
summary: "NeuML 新发布的紧凑文本检索模型系列，探索从极小参数量到 28M 参数的 dense、sparse 与 ColBERT 表示，强调领域化部署。"
firstSeen: 2026-11-22
updated: 2026-11-22
status: research
tags: [embedding, retrieval, rag, efficient-models, open-models]
officialUrl: "https://huggingface.co/blog/neuml/introducing-atto"
githubUrl: ""
paperUrl: ""
relevancePi67: 85
relevanceAios: 72
maturity: 62
related: [embeddinggemma-2]
timeline:
  - date: 2026-11-22
    title: "核验 NeuML 于 11 月 19 日发布的 Atto 模型家族"
    summary: "官方公布 840 参数至 28M 参数的多个检索变体及 BEIR 子集实测表；当前初步证据偏英语文本检索，尚不足以证明中文、图像或视频检索表现。"
    status: research
sources:
  - title: "NeuML original Atto architecture and evaluation report, 2026-11-19"
    url: "https://huggingface.co/blog/neuml/introducing-atto"
    published: "2026-11-19"
---

## 工程解读

Atto 将内部上下文处理维度与最终向量宽度分离，并提供 dense、sparse、late interaction 等检索表示。官方在 ArguAna、NFCorpus、SciFact 三个 BEIR 数据集上展示了部分紧凑版本的性价比，但只是有限英语样本及作者复现，不是通用检索质量结论。

可纳入离线中文文档 RAG 的召回、nDCG@10、索引大小、查询延迟和跨领域迁移评测。不把其当作已经验证的多模态视频 Embedding。
