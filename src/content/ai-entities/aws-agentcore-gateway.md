---
name: Amazon Bedrock AgentCore Gateway
kind: product
summary: 托管 MCP Gateway，可统一接入多工具并配合身份认证和 Cedar 策略授权；Eon 公布了跨云运维接入案例。
firstSeen: 2026-10-20
updated: 2026-10-21
status: research
tags: [agent, mcp, tool-gateway, authorization, enterprise]
officialUrl: "https://aws.amazon.com/blogs/machine-learning/how-eon-built-multi-cloud-investigation-with-an-mcp-gateway-on-amazon-bedrock-agentcore/"
githubUrl: ""
paperUrl: ""
relevancePi67: 98
relevanceAios: 82
maturity: 85
related: []
timeline:
  - date: 2026-10-21
    title: 记录 AWS 与 Eon 联合发布的生产案例
    summary: AWS/Eon 在 2026-10-20 分享以单入口 MCP Gateway、独立人机身份与 Cedar 逐工具策略替代分散的本地 MCP 进程。开发者规模和提效数字为企业自述。
    status: research
sources:
  - title: "AWS and Eon: multi-cloud investigation with MCP Gateway"
    url: "https://aws.amazon.com/blogs/machine-learning/how-eon-built-multi-cloud-investigation-with-an-mcp-gateway-on-amazon-bedrock-agentcore/"
    published: "2026-10-20"
---

## 核心解读

Eon 案例采用统一 MCP URL，使用人类 SSO 身份与 Agent 客户端凭据区分主体，Cedar 在每次 tools/call 前执行授权。对大型工具目录采用动态列举策略以避免预索引的策略体积问题，但动态模式会损失某些语义检索能力。

## 工程判断

85/100：成熟托管平台有真实客户案例支持严肃生产评测；案例提及超过百名开发者及约 1 万次会话，但不是独立性能审计，也不代表所有功能在所有区域可用。对 pi-67 有价值的是单入口、多身份、最小权限和托管/自部署工具混合接入模式；不建议直接绑定某一家云厂商。
