---
name: Video-DeepResearch
kind: paper
summary: "EMNLP 2026 Findings 研究：把视频时空证据定位与外部知识检索分阶段执行，减少 Agent 跳过视频直接依赖文本或参数记忆的偏差。"
firstSeen: 2026-11-03
updated: 2026-11-03
status: research
tags: [video-understanding, multimodal, deep-research, video-rag, evidence-grounding, open-source]
officialUrl: "https://github.com/Osilly/Vision-DeepResearch/tree/main/Video-DeepResearch"
githubUrl: "https://github.com/Osilly/Vision-DeepResearch"
paperUrl: "https://arxiv.org/abs/2608.03979"
relevancePi67: 87
relevanceAios: 98
maturity: 64
related: [videotapestry]
timeline:
  - date: 2026-08-05
    title: 作者首次公开 Video-DeepResearch 论文
    summary: "作者仓库记载 8 月 5 日发布论文，8 月 8 日发布 30B-A3B 和 35B-A3B 权重；模型规模较大，不适合作为消费级小模型直接替代品。"
    status: research
  - date: 2026-11-03
    title: 核验会议论文与代码并纳入 AI Radar
    summary: "ACL Anthology 收录为 2026 年 10 月 EMNLP Findings；作者仓库包含视频抽帧、评估、SFT、强化学习代码。基于公开可测试实现评分 64，未独立复现论文 benchmark。"
    status: research
sources:
  - title: "EMNLP 2026 Findings 正式论文（ACL Anthology）"
    url: "https://aclanthology.org/2026.findings-emnlp.1881/"
    published: "2026-10"
  - title: "作者 Video-DeepResearch 代码及训练说明"
    url: "https://github.com/Osilly/Vision-DeepResearch/tree/main/Video-DeepResearch"
  - title: "原始 arXiv 预印本"
    url: "https://arxiv.org/abs/2608.03979"
    published: "2026-08-05"
---

## 技术要点

采用感知与探索分离的流程，先完成跨帧视觉证据获取，再开放外部网页搜索；提供 VideoDR-Bench 多跳视频问答评测。论文所述性能为作者在特定数据和基线上的结果，不能视为独立验证。

## 工程成熟度与边界

**64/100：有公开代码与模型、可评测的研究系统。** 训练与推理资源需求明显高于轻量多模态模型。论文侧重视频加外部知识研究，不等同于商业短视频的镜头/框架拆解。

## 下一步

借鉴视频时间戳证据和分阶段工具解锁，在公开视频评测集上比较全量抽帧与重点时间窗重检；记录镜头边界准确率、事件召回、错误证据率及单位视频处理成本。不把论文成绩当作业务模型表现。
