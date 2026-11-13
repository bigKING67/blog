---
name: MiniMax H3 Image
kind: model
summary: MiniMax 于 2026-11-10 发布开放权重图像生成与编辑模型，统一文生图和多参考图编辑；依赖大规模文本编码器，并采用有商业限制的社区许可证。
firstSeen: 2026-11-10
updated: 2026-11-13
status: research
tags: [image-generation, image-editing, multimodal, open-weights, commercial-license]
officialUrl: "https://github.com/MiniMax-AI/MiniMax-H3-Image"
githubUrl: "https://github.com/MiniMax-AI/MiniMax-H3-Image"
paperUrl: ""
relevancePi67: 65
relevanceAios: 97
maturity: 72
related: []
timeline:
  - date: 2026-11-10
    title: 开放图像生成与编辑权重
    summary: 官方项目披露 33.1B DiT、6 步采样、最高 16MP 常用输出和最多 16 张参考图的编辑能力；实际生成质量与算力需求待复测。
    status: research
  - date: 2026-11-13
    title: 核验完整推理依赖和社区许可证
    summary: 官方仓库显示 BF16 DiT 文件约 68.65GB，完整运行还依赖 MiniMax H3 文本编码器；许可证对第三方托管及特定营收情形规定单独书面授权，不能直接视为 Apache 2.0。
    status: research
sources:
  - title: "MiniMax official H3-Image repository and deployment guide"
    url: "https://github.com/MiniMax-AI/MiniMax-H3-Image"
  - title: "MiniMax official H3-Image model card"
    url: "https://huggingface.co/MiniMaxAI/MiniMax-H3-Image"
  - title: "MiniMax H3-Image Community License (release date)"
    url: "https://huggingface.co/MiniMaxAI/MiniMax-H3-Image/blob/main/LICENSE"
    published: "2026-11-10"
---

## 工程判断

成熟度 72/100：有公开权重、推理适配和 API，具备工程评测条件；但显存需求高、商业使用条件需要法务逐条确认，尚无公开可重复的目标业务生产成绩。官方画质和指令遵循宣传不等于独立评测。

## 评测方向

- 建立商业视觉测试集，评价参考商品主体一致性、文字准确率、多轮编辑稳定性与单位合格图片成本。
- 区分云 API 与本地部署的硬件和许可证条件，避免把开放权重视为无条件可商用。
- 对较大文本编码器和 16MP 图像生成计算开销进行端到端测量；不要推断 12GB GPU 可完整本地运行。
