---
name: "VideoJSON"
kind: paper
summary: "超长视频理解研究，使用结构化 JSON 记录和沙箱内 Agent 编程检索代替复杂专用记忆结构。"
firstSeen: 2026-11-26
updated: 2026-11-26
status: watch
tags: ["video-understanding","agent","context-engineering","memory"]
officialUrl: "https://arxiv.org/abs/2611.28167"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.28167"
relevancePi67: 91
relevanceAios: 96
maturity: 35
related: ["wemm-video","videotapestry"]
timeline:
  - date: 2026-11-20
    title: "原始论文核验"
    summary: "论文提交于 11 月 20 日；作者称代码将在发表后公开，当前不作为已可部署项目。"
    status: watch
sources:
  - title: "原始论文"
    url: "https://arxiv.org/abs/2611.28167"
    published: "2026-11-20"
---

## 工程判断

35/100。索引阶段每分钟生成包含描述、事件、实体和转写的 JSON；查询阶段 Agent 在沙箱中用程序组合查询。作者报告在三项超长视频基准相对 MAGIC-Video 分别提升 7、20、24.75 点，尚未独立复现。分钟粒度并不适合所有短视频时间定位；可研究镜头/事件粒度、原始证据回查、结构化与向量检索混合方案，并限制查询程序权限和资源。
