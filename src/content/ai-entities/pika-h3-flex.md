---
name: Pika H3 Flex
kind: model
summary: Pika 于 2026-10-29 发布的基于 MiniMax H3 的音视频联合生成模型，采用六步采样并提供官方推理代码、模型适配器及多参考条件生成。
firstSeen: 2026-10-29
updated: 2026-10-30
status: research
tags: [video-generation, audio-generation, multimodal, open-weights, creative-tools]
officialUrl: "https://pika.art/blog/pika-h3-flex"
githubUrl: "https://github.com/Pika-Labs/Pika-H3-Flex"
paperUrl: ""
relevancePi67: 41
relevanceAios: 97
maturity: 70
related: []
timeline:
  - date: 2026-10-29
    title: Pika H3 Flex 发布模型、适配器与推理代码
    summary: 官方公布多参考音视频生成、原生 480p/768p 与六步采样；Pika API 提供音轨拆分和最高 4K 放大，后者并不包含于本地开源推理功能。
    status: research
sources:
  - title: "Pika: Introducing Pika H3 Flex"
    url: "https://pika.art/blog/pika-h3-flex"
    published: "2026-10-29"
  - title: "Pika: H3 Flex technical deep dive"
    url: "https://pika.art/blog/pika-h3-flex-research"
    published: "2026-10-29"
  - title: "Pika Labs: official inference repository"
    url: "https://github.com/Pika-Labs/Pika-H3-Flex"
    published: "2026-10-29"
  - title: "Pika Labs: official Hugging Face weights"
    url: "https://huggingface.co/Pika-Labs/Pika-H3-Flex"
    published: "2026-10-29"
---

## 工程判断

成熟度 **70/100**：官方提供模型权重、推理代码和 API，可现实评测，但部分效果依赖托管服务，商用与资源需求需独立确认。Pika 报告 15 秒、768p 片段的 Transformer 计算可低至 7 秒，这不是包含参考预处理、解码与服务排队的端到端耗时；排名及质量对比亦不能替代独立复现。

## 下一步

- 以商品主体保真、跨镜头一致性、文字可读性、音画同步、修改区域保留和单秒成本建立统一测试集。
- 分别记录本地开源推理与 API 托管能力；五类可编辑音轨及 4K 属于托管附加能力。
- 对商业视频样例验证内容使用权、音频素材来源及输出可用率，不因发布案例直接进入生产采用。
