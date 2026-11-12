---
name: "Gemini Decision 1 / Gemini Decisions API"
kind: model
summary: "Google 于 2026-11-11 通过 Gemini Decisions API 提供面向封闭集合判断的多模态决策模型，可一次处理多个真假、选择及评分问题；需独立验证置信度校准与业务准确率。"
firstSeen: 2026-11-12
updated: 2026-11-12
status: research
tags: [multimodal, decision-model, agent, model-routing, evaluation]
officialUrl: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/"
githubUrl: ""
paperUrl: ""
relevancePi67: 88
relevanceAios: 97
maturity: 81
related: [microsoft-decision-1]
timeline:
  - date: 2026-11-12
    title: "一手来源核验并纳入长期研究"
    summary: "Google 官方 11 月 11 日公告模型标识 gemini-decision-1 和 Decisions API；支持文本、图像、音频、视频及 PDF，最多 1000 个判断问题。延迟、价格与校准优势属于厂商报告，尚未独立复测。"
    status: research
sources:
  - title: "Google: Gemini Decisions API"
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/"
    published: "2026-11-11"
---

## 工程解读

针对预先定义的真假判断、2–255 选项选择及有序评分，API 为同一多模态输入返回多个问题的评分和置信度，而非生成长段自由文本。官方披露最长输入 256K Token、单次最多 1000 个问题、定价为每百万输入 Token 0.10 美元且输出 Token 不计费；在指定测试条件下端到端 150–250 毫秒。数字属于厂商自报，不能替代实际任务延迟与成本测试。

**成熟度 81/100：** 已有公开 API 与明确使用说明，适合严肃生产前评测；没有本项目独立验证。模型评分不等于安全保证，置信度应在目标数据集校准。

## 研究动作

- 用人工标注样本测试多模态素材的卖点分类、镜头类型判别和质量评分，对照生成式 VLM。
- 记录准确率、召回率、ECE/校准误差、P95 时延及单位合格判断成本；对低置信度结果增加复核而非自动采纳。
- Agent 模型路由与策略判定应保留独立权限约束层。

