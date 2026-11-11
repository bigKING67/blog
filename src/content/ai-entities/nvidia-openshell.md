---
name: NVIDIA OpenShell
kind: project
summary: 面向 Agent 执行安全边界的开放 Runtime / Sandbox 研究对象。
firstSeen: 2026-09-29
updated: 2026-11-11
status: research
tags: [sandbox, agent-security, runtime]
officialUrl: "https://www.nvidia.com/en-us/ai/openshell/"
githubUrl: "https://github.com/NVIDIA/OpenShell"
paperUrl: ""
relevancePi67: 94
relevanceAios: 95
maturity: 83
related: [mxc, deepseek-harness]
timeline:
  - date: 2026-09-29
    title: 首次进入 AI 简报 / 技术研究
    summary: 历史提及记录已从此前简报回填到 AI Radar；后续更新时应重新核验一手来源与成熟度。
    status: research
  - date: 2026-10-15
    title: 一手来源核验
    summary: 已通过官方站点、官方 GitHub 或官方文档确认该实体真实存在，并补充长期可追溯来源。
    status: research
  - date: 2026-11-10
    title: NVIDIA 宣布将 OpenShell 贡献给 CNCF Sandbox
    summary: 官方宣布 OpenShell 进入 CNCF Sandbox 社区治理，并与 Agent Substrate 探索集成；CNCF Sandbox 阶段不等于通过生产安全认证。
    status: research
sources:
  - title: "NVIDIA OpenShell"
    url: "https://www.nvidia.com/en-us/ai/openshell/"
  - title: "NVIDIA OpenShell GitHub"
    url: "https://github.com/NVIDIA/OpenShell"
  - title: "NVIDIA OpenShell documentation"
    url: "https://docs.nvidia.com/openshell/latest/home"
  - title: "NVIDIA: OpenShell CNCF contribution at KubeCon"
    url: "https://blogs.nvidia.com/blog/open-source-openshell-infrastructure/"
    published: "2026-11-10"
  - title: "NVIDIA: OpenShell runtime controls technical details"
    url: "https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell"
    published: "2026-09-28"
---

## 历史导入说明

这是从此前 AI 深度简报中回填的历史实体。当前条目先保存“曾被关注以及为什么被关注”的事实，不把旧简报中的所有技术细节直接视为永久有效结论。

后续每日 Intelligence Pipeline 再遇到该实体时，应优先补充一手来源、更新成熟度、状态和时间线，而不是重复创建新条目。

## 当前关注点

面向 Agent 执行安全边界的开放 Runtime / Sandbox 研究对象。

## 2026-11-10 工程变化

NVIDIA 正式宣布向 CNCF 贡献 OpenShell 作为 Sandbox 项目，增强社区治理及跨宿主发展基础。Sandbox 阶段属于早期治理/孵化，不是独立安全审计通过。成熟度由 80 调整为 83，是对开源工程的部署评测条件及社区治理条件的判断，非安全性或模型质量分数。关注独立沙箱、凭据隔离、细粒度权限和可审计执行，并验证其对不同 Agent Harness 的兼容性。
