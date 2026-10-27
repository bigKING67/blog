---
name: "GroundedVDR"
kind: paper
summary: "面向 Video Deep Research 的证据归属评测：要求时序视频片段和网页证据共同支持答案。"
firstSeen: 2026-10-18
updated: 2026-10-27
status: research
tags: [video-rag, multimodal, evaluation, evidence-grounding, deep-research]
officialUrl: "https://arxiv.org/abs/2610.25493"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2610.25493"
relevancePi67: 84
relevanceAios: 97
maturity: 43
related: [videotapestry, longharness]
timeline:
  - date: 2026-10-18
    title: "论文初次提交"
    summary: "作者提出视频证据和网页证据依赖的基准，并分别度量视频定位、Web 证据归属与最终答案准确率。"
    status: research
  - date: 2026-10-27
    title: "作为 Video RAG 证据链评价参考进入 AI Radar"
    summary: "一手论文已核验；作者报告的八系统测试分数未做独立复现，评测集不能视为生产视频理解模型。"
    status: research
sources:
  - title: "GroundedVDR original arXiv paper"
    url: "https://arxiv.org/abs/2610.25493"
---

## 核心技术判断

GroundedVDR 的关键不是追求更高的答案分数，而是区分结论是否实际依赖**视频中的时序证据**以及**外部网页证据**。作者构建具有视频片段与网页支持材料标注的评测集，避免只用模型参数记忆也能答对的问题。

## 工程成熟度说明

**43/100（research prototype / evaluation research）**：论文与公开基准入口可归属，评测协议有工程研究价值；没有独立复现和生产部署验证。作者的 Benchmark 指标只作为实验报告。

## 工程启发

在视频 RAG 中保存源视频及时间段、对应口播或画面事实、外部来源、结论和冲突标记。评测召回和 Rerank 时同时考察证据完整性与可追溯性，而不是仅以最终描述或标签的准确率替代。
