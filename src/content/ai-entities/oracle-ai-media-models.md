---
name: Oracle AI Media Models
kind: product
summary: Oracle 于 2026-10-27 公布的 OCI 媒体生成与检索模型系列，包含文生视频、文生图、图片编辑及媒体库语义发现方向；目前受限 Beta。
firstSeen: 2026-10-27
updated: 2026-10-28
status: watch
tags: [video-generation, image-editing, media-search, multimodal, enterprise-ai]
officialUrl: "https://blogs.oracle.com/ai-and-datascience/oracle-ai-media-models"
githubUrl: ""
paperUrl: ""
relevancePi67: 45
relevanceAios: 94
maturity: 53
related: [artcraft, vidforge]
timeline:
  - date: 2026-10-27
    title: Oracle 公布 AI Media Models 预览
    summary: 官方确认部分客户可通过 OCI 管理端点测试文生视频、文生图和单图编辑，并介绍媒资语义检索方向；训练数据权利说明来自厂商陈述。
    status: watch
  - date: 2026-10-28
    title: 纳入 AI Radar 内容生产候选
    summary: 由于目前仅限特定客户 Beta，未获取实际价格、SLA、模型效果或媒体检索 API 的全面可用性证据。
    status: watch
sources:
  - title: "Oracle: Introducing Oracle AI Media Models on OCI in Preview"
    url: "https://blogs.oracle.com/ai-and-datascience/oracle-ai-media-models"
    published: "2026-10-27"
---

## 核心解读

不同于仅推出生成模型的路线，Oracle 将数据来源治理、媒体检索、模型定制与生成接口放在同一媒体资产生产链中。厂商宣称采用经授权训练数据，不能替代对模型输出权利与素材许可证的法律核查。

## 工程成熟度判断

53/100：厂商已开放部分客户 Beta，具备早期应用形态，但缺乏开放可复现的性能、价格和稳定性测试。

## 实际验证建议

在接口具备可用条件后，比较商品主体保真、图像编辑定位、视频一致性、素材库检索召回率、可用性与单素材成本。
