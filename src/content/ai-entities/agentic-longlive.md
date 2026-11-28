---
name: "Agentic LongLive"
kind: paper
summary: "异步 Agent 为流式长视频生成维护人物、物体和场景的图文状态。"
firstSeen: 2026-11-28
updated: 2026-11-28
status: watch
tags: ["video-generation","visual-memory","agent"]
officialUrl: "https://nvlabs.github.io/LongLive/Agentic-LongLive/"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.34907"
relevancePi67: 72
relevanceAios: 96
maturity: 39
related: ["atas","reel"]
sources:
  - title: "Original arXiv paper"
    url: "https://arxiv.org/abs/2611.34907"
    published: "2026-11-25"
  - title: "Project technical documentation"
    url: "https://nvlabs.github.io/LongLive/Agentic-LongLive/"
timeline:
  - date: 2026-11-28
    title: "核验原始论文并纳入研究"
    summary: "作者报告 25 个故事、857 个镜头，持续状态准确率提升 26.3 点，主角身份提升 44.9 点。实时演示依赖多卡 B200；时间开销不代表总算力成本。项目页已核验，代码与权重具体可用性未核实。"
    status: watch
---

## 工程判断

记忆 Agent 并行处理已出现的提示词，形成实体图像与镜头参考，避免把生成错误直接写回记忆；生成端使用注意力 sink 接入参考。

AIOS 可借鉴版本化人物、商品、场景状态与镜头参考图；闭源生成 API 只能通过公开参考输入能力适配，不假设能修改 KV cache。

39/100。作者报告 25 个故事、857 个镜头，持续状态准确率提升 26.3 点，主角身份提升 44.9 点。实时演示依赖多卡 B200；时间开销不代表总算力成本。项目页已核验，代码与权重具体可用性未核实。
