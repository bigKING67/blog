---
name: BWM-Forge
kind: paper
summary: "2026-11-12 的 Agentic World Programming 论文，利用 Coding Agent 构造可编辑 Blender 场景及代理视频，控制机器人动作、镜头与后续视频生成。"
firstSeen: 2026-11-14
updated: 2026-11-14
status: research
tags: [agentic-video, blender, scene-programming, controllable-generation, world-model]
officialUrl: "https://arxiv.org/abs/2611.16221"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.16221"
relevancePi67: 65
relevanceAios: 88
maturity: 34
related: [hyperframes, atas]
timeline:
  - date: 2026-11-14
    title: 论文原文核验
    summary: "论文 11 月 12 日首次公开，展示场景代码、代理视频、生成渲染及复审反馈的多 Agent 流程；实验为五类机器人、15 项任务，代码/权重生产可用性尚未独立核实。"
    status: research
sources:
  - title: "BWM-Forge original paper on arXiv"
    url: "https://arxiv.org/abs/2611.16221"
    published: "2026-11-12"
---
## 技术判断

论文贡献在于把可编辑场景、运动与摄像机轨迹表达成代码，而非让视频模型单独隐式决定所有细节。研究面向机器人与具身数据生成，不能直接视为广告视频生成器。

## 工程验证重点

可借鉴结构化分镜、可执行代理预览、自动校验与复用经验。研究成熟度较低，作者报告的视觉质量优势不构成独立产品级验证。
