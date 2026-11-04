---
name: StateBench
kind: research
summary: Ai2 发布的长上下文实体状态追踪基准，以四层状态更新复杂度衡量模型对跨文档事件与依赖链的理解；开源代码和数据可用于复现。
firstSeen: 2026-11-04
updated: 2026-11-04
status: research
tags: [context-engineering, long-context, benchmark, state-tracking, open-source]
officialUrl: "https://huggingface.co/blog/allenai/statebench"
githubUrl: "https://github.com/allenai/state-bench"
paperUrl: ""
relevancePi67: 96
relevanceAios: 85
maturity: 70
related: [statetape, context-language-models]
timeline:
  - date: 2026-11-03
    title: Ai2 公开 StateBench 研究与评测工具
    summary: 官方介绍四种由不可变赋值到跨变量依赖的状态追踪任务；报告长输入下多个前沿模型的困难，实验结论有特定数据和设置边界。
    status: research
  - date: 2026-11-04
    title: 纳入 AI Radar 工程评测候选
    summary: 核验官方论文介绍、开源仓库及公开数据；成熟度 70 表示数据与代码可进行复现，不代表模型评测结论得到独立验证。
sources:
  - title: "Ai2: StateBench official release"
    url: "https://huggingface.co/blog/allenai/statebench"
    published: "2026-11-03"
  - title: "Ai2: StateBench GitHub"
    url: "https://github.com/allenai/state-bench"
  - title: "Ai2: StateBench dataset"
    url: "https://huggingface.co/datasets/allenai/state-bench"
---

## 工程判断

StateBench 区分寻找初始值、识别最后一次赋值、连续累计更新、跨实体引用赋值等不同难度。2026-11-03 的官方报告发现，多个被测模型在更长的复杂依赖序列上会显著下降。应避免将合成赋值题成绩直接推广为真实企业任务准确率。

成熟度 70/100：有公开代码、数据和可复现实验入口，可开展实际评测；它是评测基准而非直接部署的应用服务。

## 建议评测

- 以固定事件序列测试 Agent 长会话中任务状态、工具结果和授权状态的一致性。
- 对视频分镜中的人物、商品、场景状态变化建立可追溯的外部状态表。
- 将输出正确率与时间定位、状态更新遗漏率共同作为指标。
