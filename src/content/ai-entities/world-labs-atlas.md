---
name: "World Labs Atlas"
kind: model
summary: "World Labs 原生跨文本、图像、视频与 3D 的空间世界模型；2026-11-12 扩大至公开 Web 工具与开发者 API。"
firstSeen: 2026-11-15
updated: 2026-11-15
status: research
tags: [world-model, spatial-intelligence, multimodal, video-generation, 3d]
officialUrl: "https://worldlabs.ai/atlas"
githubUrl: ""
paperUrl: ""
relevancePi67: 52
relevanceAios: 91
maturity: 81
related: [aios-creative-engine]
timeline:
  - date: 2026-09-01
    title: 首次发布 Atlas 世界模型
    summary: World Labs 官方介绍原生多模态空间建模、场景重建及摄像机控制视频生成，相关质量数字属于厂商自报。
    status: watch
  - date: 2026-11-12
    title: 面向公众开放 Atlas 工具与 API
    summary: World Labs 官方发布页面显示 Atlas 通过 Web 应用与开发者 API 可使用；不等于开放了模型权重，第三方对商业质量和费用仍需评测。
    status: research
  - date: 2026-11-15
    title: 收录至 AI Radar
    summary: 按已具备公共试用与开发接口的工程条件记为 research；成熟度为工程评测准备度，不是生成质量排名。
    status: research
sources:
  - title: "World Labs: Atlas world model announcement"
    url: "https://worldlabs.ai/blog/atlas"
    published: "2026-09-01"
  - title: "World Labs: Atlas product and API"
    url: "https://worldlabs.ai/atlas"
  - title: "World Labs: November 12 Atlas release listing"
    url: "https://worldlabs.ai/blog"
    published: "2026-11-12"
---

## 工程判断

Atlas 的重要性是把多视角场景一致性、空间重建与摄像机路径控制作为可编程创作资产。与普通逐段视频模型不同，3D 世界表示可为预演和多镜头一致性提供显式约束。它不是传统广告素材自动混剪器，也不能视为已公开权重。

**成熟度 81/100：** 已提供公共产品和开发者接入，达到严肃生产前测试阶段；公开材料并未构成独立的质量、延迟和成本验证。

## 后续验证

- 以真实但获授权的场景图片测试视角一致性、几何稳定性、重建保真和镜头路径可控性。
- 对接 API 前核实价格、配额、授权条款与输出格式。
- 与程序化 3D、传统图生视频及视频生成工作流进行同场景比较。
