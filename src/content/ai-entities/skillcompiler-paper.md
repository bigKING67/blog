---
name: "SkillCompiler（程序化编译自进化 Agent Skills）"
kind: paper
summary: "将技能中可确定执行的步骤编译为可验证程序，同时将不确定部分保留给 LLM 推理。"
firstSeen: 2026-11-01
updated: 2026-11-01
status: research
tags: [agent-skills, context-engineering, verification, research]
officialUrl: ""
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2610.39508"
relevancePi67: 94
relevanceAios: 82
maturity: 32
related: [context-evo]
timeline:
  - date: 2026-11-01
    title: 核验 10 月 29 日原始论文并进入研究
    summary: "论文提出将可确定性操作编译为已验证程序并复用程序资产；尚未核实作者提供可运行开源实现，研究成绩未独立复现。"
    status: research
sources:
  - title: "Compile Away Uncertainty 原始论文"
    url: "https://arxiv.org/abs/2610.39508"
---

## 工程判断

这是程序化 Skill 和 LLM 推理协作的研究方案，并非同名第三方 SkillCompiler 开源仓库。将有明确输入、输出和约束的重复性步骤固定为程序，可减少 Agent 不必要的反复推理。当前只有论文一手依据，不能把作者报告的最多 32.33% 提升视为独立验证。

## 待验证

设计一组可复现任务，比较纯自然语言 Skill 与混合程序式 Skill 的成功率、异常恢复、成本和错误传播。工程成熟度 32/100，属于早期研究阶段。
