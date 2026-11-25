---
name: "ViDecide"
kind: paper
summary: "因果视频扩散以逐状态决策和纠错微调改善多步视觉规划，提供研究代码、权重和规则验证器。"
firstSeen: 2026-11-25
updated: 2026-11-25
status: research
tags: ["video-generation","visual-planning","evaluation"]
officialUrl: "https://kevin-thu.github.io/ViDecide/"
githubUrl: "https://github.com/Kevin-thu/ViDecide"
paperUrl: "https://arxiv.org/abs/2611.26389"
relevancePi67: 72
relevanceAios: 93
maturity: 64
related: ["aios-creative-engine"]
sources:
  - title: "Original paper"
    url: "https://arxiv.org/abs/2611.26389"
    published: "2026-11-19"
  - title: "Author repository"
    url: "https://github.com/Kevin-thu/ViDecide"
  - title: "Model card and license"
    url: "https://huggingface.co/Kevin-thu/ViDecide"
timeline:
  - date: 2026-11-25
    title: "一手来源核验与工程评估"
    summary: "核验论文、代码及模型卡；权重 CC BY-NC 4.0，作者文档报告单视频约 30GB 显存。"
    status: research
---

## 核心解读与工程判断

将视频生成拆为连续状态变化并自适应结束，使用规则验证每个中间状态。作者报告严格成功率平均 83.8%，标准微调 23.3%，并非商业广告质量指标。AIOS 可借鉴可验证的动作状态与逐段验收。权重仅限非商业用途，不可默认商用；64/100，具备研究复现条件，未独立验证。
