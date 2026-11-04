---
name: IBM Palette
kind: research
summary: IBM Research 探索用 20B 模型的 LoRA、结构化设计简报与代码生成来生产符合特定设计语言的演示文稿，并结合渲染后几何检查与可验证修复。
firstSeen: 2026-11-04
updated: 2026-11-04
status: watch
tags: [generative-design, small-model, lora, visual-quality, agent, research]
officialUrl: "https://huggingface.co/blog/ibm-research/palette-deck-building"
githubUrl: ""
paperUrl: ""
relevancePi67: 68
relevanceAios: 90
maturity: 47
related: [artcraft, hyperframes]
timeline:
  - date: 2026-11-03
    title: IBM Research 公布 Palette 研究方案
    summary: 将设计规划和逐页代码渲染拆开，训练 20B 模型使用 LoRA，并通过几何检测与回退机制自动修复幻灯片；报告中的性能与质量属于项目方实验。
    status: watch
  - date: 2026-11-04
    title: 进入早期技术观察
    summary: 一手来源确认存在公开技术说明，但尚未核实有可下载权重与完整复现仓库；因此保持 watch 和较低工程成熟度，不作可直接集成判断。
sources:
  - title: "IBM Research: Palette official technical article"
    url: "https://huggingface.co/blog/ibm-research/palette-deck-building"
    published: "2026-11-03"
---

## 工程判断

其创新在于拆分叙事与视觉布局，利用中间 JSON 规划驱动逐页代码生成；生成后检查遮挡、溢出等可量化错误，只接受验证改善的修复。公开文章描述了约 1,000 份合成演示文稿的训练数据与 PresentBench 结果，但尚缺少完整可独立复现材料。

成熟度 47/100：研究原型有明确技术路线，但缺少可确认的生产接口和权重；厂商实验不视为第三方验证。

## 可迁移方法

- 将商业视觉任务拆分为规划、结构化布局、生成、渲染及检测。
- 将商品文字准确率、遮挡率、可读性作为自动验收信号。
- 修复版本只有经过明确质量检测优于原结果时才替换原版本。
