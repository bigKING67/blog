---
name: ERNIE 5.5 Flash Preview
kind: model
summary: "百度 2026-11 发布的 280B 总参数、14B 激活参数 MoE 文本模型预览版，具有百万 Token 上下文，面向编程与长流程 Agent 任务。"
firstSeen: 2026-11-14
updated: 2026-11-14
status: watch
tags: [ernie, moe, coding-agent, long-horizon, text-model]
officialUrl: "https://ernie.baidu.com/release/ernie-5-5-flash-preview"
githubUrl: ""
paperUrl: ""
relevancePi67: 85
relevanceAios: 74
maturity: 63
related: [deepseek-harness]
timeline:
  - date: 2026-11-14
    title: API 及开放权重计划核验
    summary: "百度官网确认模型预览版已在千帆提供 API，280B 总参数、14B 激活参数、1M 上下文；Apache 2.0 权重为即将开源的计划，不能写成已公开。视频制作案例通过文字模型协调外部工具实现。"
    status: watch
sources:
  - title: "Baidu ERNIE 5.5 Flash Preview official release"
    url: "https://ernie.baidu.com/release/ernie-5-5-flash-preview"
    published: "2026-11-11"
  - title: "Baidu 2026-11-12 corporate announcement"
    url: "https://www.prnewswire.com/news-releases/baidu-unveils-latest-ernie-models-amid-broader-full-stack-ai-lineup-and-debuts-token-exchange-to-power-intelligent-organizations-302937959.html"
    published: "2026-11-12"
---
## 技术判断

这是文本模型，官网明确其自身不能看屏幕，复杂多媒体创作由 Agent Harness 与外部图像/视频工具完成。14B 激活参数不等于总权重只有 14B，也不等于普通消费级显卡可完整自部署。

## 工程验证重点

通过相同工具与成本预算比较长程编程、素材编排及可验证结果质量。厂商演示和 benchmark 应记录为自报结果，而非独立证据。成熟度反映已有 API 测试途径。
