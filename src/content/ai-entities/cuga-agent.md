---
name: CUGA Agent
kind: framework
summary: IBM Research 开源的企业通用 Agent Harness，强调应用 API 协作、任务分解、工具短名单、运行时策略及受控执行。
firstSeen: 2026-11-04
updated: 2026-11-04
status: research
tags: [agent, harness, enterprise, tool-use, runtime-security, open-source]
officialUrl: "https://huggingface.co/blog/ibm-research/cuga-harness"
githubUrl: "https://github.com/cuga-project/cuga-agent"
paperUrl: ""
relevancePi67: 96
relevanceAios: 86
maturity: 74
related: [hermes-agent, deepseek-harness, nvidia-openshell]
timeline:
  - date: 2026-11-03
    title: IBM 公布跨 Harness 的对照实验
    summary: IBM 使用相同 GLM-5.3-flash 模型在 90 项 AppWorld 任务上比较 CUGA、Hermes、Deep Agents；报告通过任务数分别为 73、42、27。各系统配置并不相同且实验仅覆盖一个基准，不能作为通用排行。
    status: research
  - date: 2026-11-04
    title: 核验公开实现与运行时策略设计
    summary: 确认官方研究文章与开源仓库；关注权限在模型以外的工具执行层强制执行，不将厂商自测分数视为独立第三方验证。
sources:
  - title: "IBM Research: Same Model, Different Harness"
    url: "https://huggingface.co/blog/ibm-research/cuga-harness"
    published: "2026-11-03"
  - title: "CUGA Agent official source"
    url: "https://github.com/cuga-project/cuga-agent"
---

## 工程判断

CUGA 通过任务分解、局部工具集、CodeAct、执行前验证、结果反思以及分页审计构成工作流。更重要的是，策略防线在运行时而非纯粹 Prompt 中执行。IBM 的 90 任务测试由项目相关方执行，且使用了不同的 Harness 配置，因此数值不可作为全面领先的证据。

成熟度 74/100：存在公开源码和可测工程架构；生产可靠性、资源占用与安全有效性仍需要目标场景复现。

## 建议评测

- 以相同模型、相同工具及预算，对比工具筛选和执行前检查带来的任务成功率变化。
- 将安全策略放在工具网关与执行沙箱，不依赖系统提示词。
- 重点关注多用户权限隔离及跨应用任务恢复。
