---
name: "WeVisForensics"
kind: paper
summary: "2026-11-16 公开的 AI 生成视频取证研究，采用主调查 Agent、视觉/音频检查子 Agent 与时间区间证据，以双时间尺度优化迭代检查策略。"
firstSeen: 2026-11-18
updated: 2026-11-18
status: watch
tags: ["video-understanding", "aigc-detection", "multimodal", "agent", "research"]
officialUrl: "https://arxiv.org/abs/2611.21373"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.21373"
relevancePi67: 64
relevanceAios: 90
maturity: 34
related: ["aios-video-rag", "aios-visual-memory"]
timeline:
  - date: 2026-11-16
    title: "WeVisForensics 论文首次公开"
    summary: "作者提出自进化多检查员音画证据链及 ForenCue-30K；论文报告 95.2% 平均检测准确率，但属于论文作者自测，不代表通用视频真实性结论。"
    status: watch
  - date: 2026-11-18
    title: "纳入待跟踪研究"
    summary: "已核验原始论文；未确认可复现的完整代码、数据和权重发布，因此保持早期研究成熟度，不标记可部署。"
    status: watch
sources:
  - title: "WeVisForensics original paper"
    url: "https://arxiv.org/abs/2611.21373"
    published: "2026-11-16"
---

## 工程判断

34/100：原始论文与方法可核验，但代码、数据与独立实验暂未确认。论文自报的 95.2% 准确率不能用于断言商业素材审核可靠，也不应直接作为平台合规判断。

## 追踪要点

- 后续监测正式发布、许可或开放范围变化，重要变化追加 timeline。
- 使用真实任务与固定评测集独立验证，不以厂商基准替代工程测试。
