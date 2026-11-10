---
name: "Claude Fable 5.2 / Mythos 5.2"
kind: model
summary: "Anthropic 于 2026-11-09 发布同一底座的两种访问配置：Fable 提供广泛 API 访问并有强化安全限制，Mythos 面向通过核验的专业机构；重点面向高难度编码、推理及科学任务。"
firstSeen: 2026-11-10
updated: 2026-11-10
status: research
tags: [frontier-model, agent, coding, safety, vision]
officialUrl: "https://www.anthropic.com/claude-fable-and-mythos-5-2"
githubUrl: ""
paperUrl: ""
relevancePi67: 95
relevanceAios: 69
maturity: 85
related: []
timeline:
  - date: 2026-11-10
    title: "Fable 5.2 全平台开放；Mythos 5.2 仅限核验组织"
    summary: "官方确认两者共用底座；Fable 具安全分类与回退，Mythos 提供受控访问。普通 API 标价每百万输入/输出 token 为 8/40 美元；最高 30% 生成加速等属于厂商披露，未独立复现。"
    status: research
sources:
  - title: "Anthropic 官方发布与可用性"
    url: "https://www.anthropic.com/claude-fable-and-mythos-5-2"
    published: "2026-11-09"
---

## 工程判断
85/100 表示可进入严肃 API 工程评测，不代表模型 Benchmark 独立领先。Fable 与 Mythos 是同底座不同安全和访问配置，故合并为一个长期 Entity，不重复造两个实体。

## 研究行动
面向多阶段编程和长任务，在同一模型路由及工具预算下记录成功率、端到端成本、输出审查与越权拒绝表现。对高敏任务保留独立的权限控制，不以模型自带保护替代沙箱。
