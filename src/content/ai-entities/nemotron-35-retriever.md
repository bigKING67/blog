---
name: "NVIDIA Nemotron 3.5 Retriever (Embed, Rerank, Parse)"
kind: model
summary: "NVIDIA 在 2026-10-20/21 公开可下载的多模态检索、重排序与文档解析模型家族，适用于文图 RAG 与 Agent 证据筛选。"
firstSeen: 2026-10-22
updated: 2026-10-22
status: research
tags: [retrieval, multimodal, embedding, reranking, document-parsing, agent, open-weights]
officialUrl: "https://huggingface.co/blog/nvidia/nemotron-retriever-world-class-agentic-retrieval"
githubUrl: ""
paperUrl: ""
relevancePi67: 91
relevanceAios: 86
maturity: 74
related: [embeddinggemma-2]
timeline:
  - date: 2026-10-22
    title: "核验 NVIDIA 新版检索模型的官方模型卡"
    summary: "1B/8B Embed、8B Rerank、631M Parse 模型已公布；官方在 10 月 21 日解释文图检索、证据重排和文档解析，性能结果仍属发布方报告。"
    status: research
sources:
  - title: "NVIDIA Nemotron 3.5 Retriever official technical announcement"
    url: "https://huggingface.co/blog/nvidia/nemotron-retriever-world-class-agentic-retrieval"
    published: "2026-10-21"
  - title: "Nemotron-3.5-Embed-1B-BF16 model card"
    url: "https://huggingface.co/nvidia/Nemotron-3.5-Embed-1B-BF16"
    published: "2026-10-20"
  - title: "Nemotron-3.5-Rerank-8B-BF16 model card"
    url: "https://huggingface.co/nvidia/Nemotron-3.5-Rerank-8B-BF16"
    published: "2026-10-20"
  - title: "Nemotron-3.5-Parse model card"
    url: "https://huggingface.co/nvidia/Nemotron-3.5-Parse"
---

## 已核验事实

该实体记录同一官方 Retriever 系列而非把每种精度的权重复制成独立实体。Embed 支持文本与文档图像的检索，Rerank 对候选证据重新排序，Parse 把文档图像提取为结构化内容。型号包括 1B/8B Embed、8B Rerank、631M Parse。模型卡标明 OpenMDW-1.1 许可，不能直接称为 Apache/MIT 权重。

## 工程判断

成熟度 **74/100**：官方权重、模型卡和部署样例已发布，具备现实评测条件；尚无本站的独立复现或生产证据。NVIDIA 的检索排名、节省 Token 和吞吐提升均为其自身报告，不作为独立验证结论。

该系列主要面向文档文本与图片，不是原生视频语义理解模型；对于 AIOS 可先测试抽帧、封面、字幕与文图混合检索，不应据此宣称其替代视频拆解。对于 pi-67 可对比现有 Embedding/Reranker 方案在固定任务和预算下的证据召回。
