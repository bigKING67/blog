---
name: Databricks Genie
kind: product
summary: Databricks 的企业 AI 工作平台；2026-11-11 官方更新强调持续自主任务、Genie Ontology、跨企业搜索与 Unity Gateway 统一权限及成本控制。
firstSeen: 2026-11-11
updated: 2026-11-13
status: research
tags: [enterprise-agent, context-engineering, ontology, governance, product]
officialUrl: "https://www.databricks.com/product/genie"
githubUrl: ""
paperUrl: ""
relevancePi67: 85
relevanceAios: 89
maturity: 76
related: []
timeline:
  - date: 2026-11-11
    title: 发布持续任务型新版 Genie
    summary: 官方宣布从问答扩展到长期、主动的企业任务；Ontology 描述业务语义，Search 检索企业信息，Unity Gateway 施加工具权限、执行追踪和预算限制。
    status: research
  - date: 2026-11-13
    title: 作为业务上下文和治理架构参考纳入 Radar
    summary: 官方产品与功能描述已核验，但供应商案例和产能收益尚未经独立复现；完整平台是商业产品而非开源代码组件。
    status: research
sources:
  - title: "Databricks: The new Genie — autonomous AI for complex enterprise work"
    url: "https://www.databricks.com/blog/new-genie-autonomous-ai-complex-enterprise-work"
    published: "2026-11-11"
  - title: "Databricks Genie official product documentation"
    url: "https://www.databricks.com/product/genie"
---

## 工程判断

成熟度 76/100：具有既有商业产品、实际客户与明确可用组件，但最新自主能力仍需场景验证；非开源、供应商案例不构成独立效果证明。状态维持 research，不意味着已经接入或采用。

## 评测方向

- 将企业本体和业务语义、数据访问策略、Agent 状态与工具执行分层建模。
- 测试信息来源可追溯、业务指标定义一致性、权限继承及不同用户隔离。
- 对持续任务设置预算、人工审批与可撤销执行边界；不将厂商托管设计直接等同于私有部署方案。
