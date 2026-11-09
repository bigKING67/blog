---
name: Arete-27B
kind: model
summary: "Nous Research 基于 Qwen3.8-27B 进行文本 SFT 的开放权重模型，用于研究价值取向后训练及模型行为的可测量变化。"
firstSeen: 2026-11-09
updated: 2026-11-09
status: research
tags: [open-weights, sft, alignment, model-evaluation, agent]
officialUrl: "https://huggingface.co/NousResearch/Arete-27B"
githubUrl: ""
paperUrl: ""
relevancePi67: 73
relevanceAios: 41
maturity: 65
related: []
timeline:
  - date: 2026-11-06
    title: "Nous Research 发布开放权重及评测资料"
    summary: "模型卡说明以文本监督微调 Qwen3.8-27B，保留冻结视觉编码器；厂商自评价值倾向指标改善，并未构成中立或普遍正确性的独立验证。"
    status: research
  - date: 2026-11-09
    title: "核验模型卡与工程限制"
    summary: "确认 Apache 2.0 权重、训练方法和作者评测边界；27B 规模不适合普通 12GB 显卡原精度部署，是否可用量化模型需实测。"
    status: research
sources:
  - title: "Nous Research official Arete-27B model card"
    url: "https://huggingface.co/NousResearch/Arete-27B"
  - title: "Nous Research release and training analysis"
    url: "https://nousresearch.com/arete"
---

## 核心判断

研究重点在于后训练对回答方式和价值取向的影响。模型方报告其自定义评测指标显著变化，同时声称部分能力指标变化不大；这些均是作者限定数据、标注规则与裁判模型之下的结果，不等于客观中立或所有任务更可靠。

## 评测要求

将事实正确性、不同意见的公平呈现、拒答变化、Agent 行动质量和新偏差分开评估。此模型为文本 SFT，不应因为底座有视觉能力就认为它在多模态视频理解上得到改善。
