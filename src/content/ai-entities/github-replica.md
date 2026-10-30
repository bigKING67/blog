---
name: GitHub Replica
kind: project
summary: GitHub Design 于 2026-10-28 开源的 AI 交互原型工具，将团队已有设计组件、模式和文档作为生成约束，并提供可选的自托管协作 Hub。
firstSeen: 2026-10-28
updated: 2026-10-30
status: research
tags: [design-engineering, prototyping, open-source, design-system, agent]
officialUrl: "https://github.blog/changelog/2026-10-28-introducing-replica-an-open-source-ai-prototyping-tool/"
githubUrl: "https://github.com/github/replica"
paperUrl: ""
relevancePi67: 84
relevanceAios: 75
maturity: 63
related: []
timeline:
  - date: 2026-10-28
    title: GitHub Design 公布 Replica 开源工具
    summary: 以设计系统组件、设计规范和文档为约束生成可交互原型，提供本地原型与可选自托管 Replica Hub；发布说明标注 MIT 许可，缺乏长期生产表现证据。
    status: research
sources:
  - title: "GitHub: Introducing Replica"
    url: "https://github.blog/changelog/2026-10-28-introducing-replica-an-open-source-ai-prototyping-tool/"
    published: "2026-10-28"
  - title: "Official GitHub Replica repository"
    url: "https://github.com/github/replica"
---

## 工程判断

成熟度 **63/100**：官方开源仓库与 MIT 许可便于实际测试，但发布较新，生产稳定性和生态成熟度尚待观察。Replica 侧重交互原型和设计系统复用，并非图片视频生成模型。

## 下一步

- 验证组件复用准确率、交互可用性、设计系统一致性与原型反馈闭环。
- 评估私有项目的设计资产权限边界、Hub 自托管成本和协作功能。
- 与现有产品 UI 工作流对比，不以演示效果替代质量测试。
