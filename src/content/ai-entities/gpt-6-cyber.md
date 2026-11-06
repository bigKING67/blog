---
name: GPT-6 Cyber
kind: model
summary: OpenAI 于 2026-11-05 发布的安全研究专用模型，初期仅面向经批准的 Daybreak Red 用户，强调漏洞研究和执行边界约束。
firstSeen: 2026-11-05
updated: 2026-11-06
status: watch
tags: [frontier-model, agent, cybersecurity, safety, evaluation]
officialUrl: "https://openai.com/index/introducing-gpt-6-cyber/"
githubUrl: ""
paperUrl: ""
relevancePi67: 89
relevanceAios: 45
maturity: 52
related: [mxc, nvidia-openshell]
timeline:
  - date: 2026-11-05
    title: OpenAI 公布 GPT-6 Cyber 与受限使用安排
    summary: 官方公布模型的安全研究用途、厂商内部测试和 Daybreak Red 受限访问；没有将其当作公开通用 API 或独立测评胜出。
    status: watch
  - date: 2026-11-06
    title: 以受限模型身份纳入 AI Radar
    summary: 以一手发布作为模型存在和访问约束的证据；等待更广泛的第三方工程验证。
    status: watch
sources:
  - title: "OpenAI: GPT-6 Cyber official announcement"
    url: "https://openai.com/index/introducing-gpt-6-cyber/"
    published: "2026-11-05"
---

## 工程解读

相比直接使用受限模型，更值得参考其针对授权目标的范围约束、独立监测、隔离执行和高风险动作审查。官方公布的 ExploitGym 与越权率数字是厂商评测，不能视为外部复现。

## 成熟度与后续

52/100：产品已发布且有受限试用，但尚无法以公共渠道稳定复现；该分数仅表示工程可用性。持续观察 API 开放、系统卡和授权范围的可验证变化。
