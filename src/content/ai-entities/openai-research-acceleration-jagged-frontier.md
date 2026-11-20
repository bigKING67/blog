---
name: "Research acceleration: The jagged frontier"
kind: research
summary: OpenAI 2026-11-18 发布的 AI 研发加速研究报告；基于内部任务、使用情况与访谈量化 Coding Agent 的非均匀任务成功率，区分实验活动增加与实际研究能力提升。
firstSeen: 2026-11-18
updated: 2026-11-20
status: research
tags: [agent-evaluation, coding-agent, research-productivity, methodology, safety]
officialUrl: "https://openai.com/index/research-acceleration-jagged-frontier/"
githubUrl: ""
paperUrl: "https://openai.com/index/research-acceleration-jagged-frontier/"
relevancePi67: 94
relevanceAios: 83
maturity: 32
related: [swe-critix, reviewbench]
timeline:
  - date: 2026-11-18
    title: OpenAI 发布研究加速测量报告
    summary: 官方披露内部 Agent 任务的不同类别成功率、使用强度和评价方法；数字为单家实验室的内部测量，不是可推广的独立外部基准。
    status: research
  - date: 2026-11-20
    title: 纳入 AI Radar 长期方法论跟踪
    summary: 以原始研究报告核实来源；评分 32 反映方法论研究而非可部署的软件系统，不将模型自评或内部样本视为独立验证。
    status: research
sources:
  - title: "OpenAI: Research acceleration — The jagged frontier"
    url: "https://openai.com/index/research-acceleration-jagged-frontier/"
    published: "2026-11-18"
---

## 核心结论与边界

报告指出 AI 研发任务具有明显非均匀性：按其内部估计，观察训练运行问题比从零编写推理/服务系统更容易完成。任务难度分桶和被委派任务种类随时间变化，不能把成功率改善全部归因于模型进步。

## 工程成熟度

**32/100（research）**。这是具备方法披露的一手研究报告，不是开源产品，也没有提供一套可直接照搬的完整独立生产评测系统。内部数据和自报基准尚未经外部复现。

## 实践启发

对 Agent/视频流水线分别统计任务类别、零干预成功率、人类复核成本、返工次数与最终真实收益；避免以调用次数、生成代码行数或实验数量冒充任务产出。
