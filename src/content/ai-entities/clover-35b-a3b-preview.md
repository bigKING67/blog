---
name: "Clover-35B-A3B-Preview"
kind: model
summary: "DiffuSpace 于 2026-10-30 开放的 35B 总参数、3B 激活参数扩散式 MoE 语言模型，侧重 Agent 编程和推理效率。"
firstSeen: 2026-10-30
updated: 2026-11-02
status: research
tags: [diffusion-llm, open-weight, agent, coding, model-evaluation]
officialUrl: "https://huggingface.co/blog/Diffuspace/clover-35b-a3b-preview"
githubUrl: "https://github.com/DiffuSpace/Clover-35B-A3B-Preview"
paperUrl: ""
relevancePi67: 92
relevanceAios: 48
maturity: 66
related: [gemini-4-argon]
timeline:
  - date: 2026-10-30
    title: "项目/模型发布并确认一手来源"
    summary: "首次公开发布信息来自官方公告、模型卡或官方代码仓库，发布方测评不视为独立验证。"
    status: research
  - date: 2026-11-02
    title: "纳入 AI Radar 研究"
    summary: "基于一手来源核验存在及发布状态，按工程成熟度规则评分，未完成本地独立评测。"
    status: research
sources:
  - title: "DiffuSpace launch announcement"
    url: "https://huggingface.co/blog/Diffuspace/clover-35b-a3b-preview"
    published: "2026-10-30"
  - title: "Official Clover model card"
    url: "https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview"
    published: "2026-10-30"
  - title: "Official Clover repository"
    url: "https://github.com/DiffuSpace/Clover-35B-A3B-Preview"
---

## 工程成熟度判断

66/100：已公开 Apache-2.0 权重与初步推理实现，具备可复现实验入口；新发布、推理后端及真实 Agent 任务可靠性仍待第三方验证，属可测试但未成熟生产阶段。

## 研究行动

使用同一代码任务集，对比任务成功率、工具调用有效率、全链路耗时和每个成功任务的实际费用；注意 5070 Ti 16GB 测试不代表更低显存配置可复现。

## 来源可信度

实体存在与明确发布事实已有一手来源；产品宣称的速度、准确率、排名和商业收益尚不视为独立验证。
