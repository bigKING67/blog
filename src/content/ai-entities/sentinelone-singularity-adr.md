---
name: SentinelOne Singularity Agentic Detection and Response
kind: product
summary: "SentinelOne 于 2026-10-21 公布的企业 Agent 运行时安全产品，覆盖 Agent/MCP 清点、行为追踪、权限政策及单个 Agent 的隔离处置；目前仅早期访问。"
firstSeen: 2026-11-03
updated: 2026-11-03
status: watch
tags: [agent-security, runtime, policy, observability, enterprise, early-access]
officialUrl: "https://www.sentinelone.com/press/sentinelone-launches-singularity-agentic-detection-and-response-to-stop-rogue-and-malicious-ai-agents-at-machine-speed/"
githubUrl: ""
paperUrl: ""
relevancePi67: 91
relevanceAios: 73
maturity: 51
related: [nvidia-openshell]
timeline:
  - date: 2026-10-21
    title: 官方宣布 Singularity ADR 早期访问
    summary: "SentinelOne 发布 Agent 及 MCP 清点、行为追踪、意图偏移检测、控制与单 Agent 隔离等产品主张；早期访问不等于已实现普遍生产验证。"
    status: watch
  - date: 2026-11-03
    title: 一手资料核验并纳入 AI Radar
    summary: "确认属于早期访问商业安全产品，公开细节以厂商文档为准。因缺乏可直接独立部署及复现数据，成熟度设 51。"
    status: watch
sources:
  - title: "SentinelOne 官方发布公告"
    url: "https://www.sentinelone.com/press/sentinelone-launches-singularity-agentic-detection-and-response-to-stop-rogue-and-malicious-ai-agents-at-machine-speed/"
    published: "2026-10-21"
---

## 工程判断

产品主张体现了将 Agent 行为与系统进程关联的安全控制面：发现工具与权限、追踪执行、策略阻止越权操作、隔离异常 Agent。上述均为厂商声明，尚不能认定覆盖率与阻断效果经过独立验证。

## 工程成熟度与边界

**51/100：早期访问商业产品。** 可作为设计研究和供应商评估对象，尚不宜被描述为已验证的通用 Agent 运行时组件。

## 下一步

提炼与具体厂商无关的安全需求，评测执行追踪、工具授权、凭据隔离、异常检测及单任务撤销；保持运行时策略与 Agent 推理模型相互独立。
