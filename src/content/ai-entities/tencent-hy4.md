---
name: Tencent Hy4
kind: model
summary: 腾讯于 2026-11-04 宣布的新一代模型，官方称新增视觉理解、计算机操作与长任务能力；模型权重及系统卡尚待发布，当前不能视为已可下载开放权重。
firstSeen: 2026-11-04
updated: 2026-11-05
status: watch
tags: [multimodal, visual-understanding, computer-use, coding, frontier-model]
officialUrl: "https://en.prnasia.com/releases/apac/tencent-launches-hy4-joining-the-ranks-of-the-world-s-leading-open-source-ai-models-554689.shtml"
githubUrl: ""
paperUrl: ""
relevancePi67: 88
relevanceAios: 82
maturity: 43
related: []
timeline:
  - date: 2026-11-04
    title: 官方宣布 Hy4 正式版本
    summary: 腾讯通过具名新闻稿披露图像理解、CLI/GUI 计算机操作及长任务能力；称将于未来数日开放权重和系统卡，本次核验未确认可供下载的最终版权重。
    status: watch
  - date: 2026-11-05
    title: AI Radar 一手来源记录
    summary: 记录发布事实与公开能力描述，维持 watch；所有成绩均属于发布方陈述，未有独立目标场景实测。
    status: watch
sources:
  - title: "Tencent: Tencent Launches Hy4 (official company press release)"
    url: "https://en.prnasia.com/releases/apac/tencent-launches-hy4-joining-the-ranks-of-the-world-s-leading-open-source-ai-models-554689.shtml"
    published: "2026-11-04"
---

## 工程判断

工程成熟度 **43/100**：具备正式公开公告和明确的产品方向，但发布新闻稿同时写明权重与系统卡「未来数日」发布。本记录不将「宣布将开放」写成「现在已可下载」；也没有核实开放 API 的接入条件。厂商发布的能力分数不能代替独立评测。

## 后续核验

- 确认官方最终权重、许可协议、模型卡和适配推理框架是否真正上线。
- 若有稳定 API 或开放权重，再以相同任务和成本比较视觉理解、工具调用及长任务成功率。
- 未核验视频输入能力，因此不将图片理解能力自动推断为原生视频理解能力。
