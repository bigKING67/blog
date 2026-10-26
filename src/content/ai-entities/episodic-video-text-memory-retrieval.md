---
name: Retrieval-Augmented Online Textual Memory for Episodic Memory Video Question Answering
kind: paper
summary: 2026-10-22 的视频记忆检索研究，比较长视频时间锚定字幕的检索粒度、上下文预算与重排序，发现召回率提升可能反而降低回答准确率。
firstSeen: 2026-10-26
updated: 2026-10-26
status: research
tags: [video-understanding, video-rag, episodic-memory, retrieval, reranking]
officialUrl: ""
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2610.31284"
relevancePi67: 75
relevanceAios: 98
maturity: 34
related: [videotapestry, embeddinggemma-2]
timeline:
  - date: 2026-10-22
    title: 原始论文提交 arXiv
    summary: 作者比较长视频问答的记忆检索配置；Parent 方案先匹配细分 caption 再返还其父 caption，作者报告在 QAEgo4D-Closed 上为 56.4% 准确率。
  - date: 2026-10-26
    title: 首次纳入 AI Radar 长期跟踪
    summary: 根据原始论文建立研究实体，维持 RESEARCH。实验数据仅为论文结果，暂无独立复现或生产可用性依据。
    status: research
sources:
  - title: "Original arXiv paper 2610.31284"
    url: "https://arxiv.org/abs/2610.31284"
    published: "2026-10-22"
---

## 核心解读

长视频理解不一定要把尽可能多的字幕、帧和事件都塞进上下文。该论文发现更高的时间片召回可能引入具迷惑性的证据，损害问答准确性；检索证据的辨别力与可靠性同样重要。

## 评测建议

用公开视频测试分层事件切块、子块召回父块、时间戳过滤、Reranker 和上下文预算。分别比较事件覆盖率、答案正确率、误报率、延迟和 Token 成本；论文的第一人称视频 QA 成绩不能直接外推到广告视频框架拆分。
