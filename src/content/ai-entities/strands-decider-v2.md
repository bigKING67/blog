---
name: "Strands Decider v2"
kind: model
summary: "AWS 发布 Gemma 4 系列约束决策模型，以一次前向计算为候选选项输出概率。"
firstSeen: 2026-11-24
updated: 2026-11-24
status: research
tags: ["decision-model","agent","multimodal","open-weights"]
officialUrl: "https://strandsagents.com/blog/introducing-strands-decider-v2/"
githubUrl: ""
paperUrl: ""
relevancePi67: 94
relevanceAios: 96
maturity: 74
related: ["microsoft-decision-1"]
timeline:
  - date: 2026-11-24
    title: "一手来源核验并纳入长期观察"
    summary: "11 月 23 日发布五种规格，Apache 2.0 权重与推理入口由官方提供。E4B 作者报告文本基准均分 62.7 至 74.4；31B 报告图像和视频基准结果，不可外推到 E4B 或特定领域。建议验证概率校准、拒判、中文分类和实际资源需求；模型不输出开放式叙述。"
    status: research
sources:
  - title: "Strands Decider v2 release"
    url: "https://strandsagents.com/blog/introducing-strands-decider-v2/"
    published: "2026-11-23"
  - title: "Strands Decider documentation"
    url: "https://strandsagents.com/decider/"
---

## 工程判断

11 月 23 日发布五种规格，Apache 2.0 权重与推理入口由官方提供。E4B 作者报告文本基准均分 62.7 至 74.4；31B 报告图像和视频基准结果，不可外推到 E4B 或特定领域。建议验证概率校准、拒判、中文分类和实际资源需求；模型不输出开放式叙述。

成熟度 74/100，依据仓库工程就绪度规则，非独立模型质量排名。
