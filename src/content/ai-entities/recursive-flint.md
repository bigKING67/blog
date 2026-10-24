---
name: Recursive Flint
kind: model
summary: Recursive 发布的开源本地 Coding Agent MoE 模型，约 39.8B 总参数、2.5B 激活参数，面向代码修复、工具调用及离线推理。
firstSeen: 2026-10-24
updated: 2026-10-24
status: research
tags: [coding-model, open-weights, moe, local-agent, agent-evaluation]
officialUrl: "https://recursive.com/updates/introducing-recursive-flint"
githubUrl: "https://github.com/recursive-oss/rec"
paperUrl: ""
relevancePi67: 94
relevanceAios: 42
maturity: 73
related: [prime-agent]
timeline:
  - date: 2026-10-24
    title: 核验 10 月 21 日开源发布
    summary: 官方模型卡确认 Apache-2.0 权重、参数规模和本地推理接入。厂商性能与 benchmark 为自报；尚未在 pi-67 独立评测。
    status: research
sources:
  - title: "Recursive Flint official model card"
    url: "https://huggingface.co/RecursiveSI/flint"
    published: "2026-10-21"
  - title: "Recursive Flint official launch"
    url: "https://recursive.com/updates/introducing-recursive-flint"
    published: "2026-10-21"
---
## 工程判断
具备可下载权重、公开许可及推理接入路径，适合加入 pi-67 的本地 Coding Agent 评测池（成熟度 73/100）。模型仍需按同一工具环境、任务难度和总资源预算评测，不能仅凭供应商 benchmark 判断质量。约 40B 总参数决定了其量化权重及 KV Cache 仍需要足够内存；不能因为单 token 激活 2.5B 就认为适合所有低显存设备。
