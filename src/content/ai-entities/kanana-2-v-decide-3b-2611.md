---
name: Kanana-2-v-decide-3b-2611
kind: model
summary: Kakao 于 2026-11-06 开放权重的 3.67B 级视觉与文本决策模型，直接输出选择、真值概率和评分；不生成自然语言。
firstSeen: 2026-11-07
updated: 2026-11-07
status: research
tags: [decision-model, multimodal, vision, agent-routing, open-weights]
officialUrl: "https://huggingface.co/kakaocorp/kanana-2-v-decide-3b-2611"
githubUrl: ""
paperUrl: ""
relevancePi67: 94
relevanceAios: 89
maturity: 68
related: [microsoft-decision-1]
timeline:
  - date: 2026-11-06
    title: Kakao 发布 Kanana-2-v-decide 开放权重
    summary: Kakao 官方 Hugging Face 组织上线模型，面向选项判定、真假判断、分数评估及图文联合决策；性能与延迟是厂商自测。
    status: research
  - date: 2026-11-07
    title: 经直接来源核验后纳入 AI Radar
    summary: 确认官方模型页面和模型家族收录，记录为可下载权重的早期评测候选；许可证不是 Apache 2.0，未完成独立速度和质量验证。
    status: research
sources:
  - title: "Kakao official Hugging Face checkpoint"
    url: "https://huggingface.co/kakaocorp/kanana-2-v-decide-3b-2611"
    published: "2026-11-06"
  - title: "Kakao official decision-model collection"
    url: "https://huggingface.co/collections/kakaocorp/kanana-2-v-decide"
    published: "2026-11-06"
---

## 工程判断

已提供官方权重，适合开展结构化决策评测，因此成熟度为 **68/100（可实际测试）**，不表示在多语言、视觉与真实任务上经过独立验证。官方资料介绍约 3.67B 参数、文本与图像输入、choice / noul / score 等输出形式。厂商报告单卡 H200 上平均响应小于 0.04 秒及相关 Benchmark 领先；本知识库不把这些数字视为独立测量。

## 评测方向

- 与通用小模型比较分类准确率、置信度校准、拒答策略、真实任务端到端耗时。
- 对图片的品牌/商品/镜头属性判断，建立人工标注集核查误判率。
- 核实 Kanana Open License 具体商用与署名条款，不能将开放权重误认为无条件宽松许可。
