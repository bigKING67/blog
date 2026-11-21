---
name: RL Post-Training in Diffusion Transformers Is Activation Steering
kind: paper
summary: 2026-11-19 的生成模型研究，检验以冻结模型上的输入无关激活偏移向量复现扩散 Transformer 强化学习后训练质量收益的程度。
firstSeen: 2026-11-19
updated: 2026-11-21
status: research
tags: [diffusion, image-generation, video-generation, post-training, parameter-efficiency]
officialUrl: "https://arxiv.org/abs/2611.26627"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.26627"
relevancePi67: 44
relevanceAios: 88
maturity: 35
related: []
timeline:
  - date: 2026-11-19
    title: 原始论文公开
    summary: 作者在六个图像模型及两个视频模型上报告固定 Steering Vectors 可恢复大部分特定 RL 奖励收益；这属于论文的实验报告，未独立复核。
    status: research
  - date: 2026-11-21
    title: 收录为低成本后训练研究候选
    summary: 研究参数更少的激活 Steering 机制，但不把特定奖励指标等同于商业素材质量；未确认跨不同架构和业务内容的泛化。
    status: research
sources:
  - title: "RL Post-Training in Diffusion Transformers Is Activation Steering (arXiv)"
    url: "https://arxiv.org/abs/2611.26627"
    published: "2026-11-19"
---

## 核心方法

作者向冻结扩散 Transformer 的层输出加入固定、不依赖 Prompt 的 Steering Vectors，研究与 RL 后训练权重更新之间的关系。在 SD3.5-M 案例中，报告 0.29M 参数的 Steering Vectors 对比 18.8M 的 RL LoRA 少约 65 倍；在特定实验设置与奖励上复现大量收益。

## 工程判断

35/100：论文的一手技术与实验描述可验证其研究存在，但没有对外部任务完成独立质量评估。复现论文奖励增益并不等于可用性、安全性或真实商业生成质量一致提升。

## 评测建议

未来可在开放扩散模型上测试商品细节、文字准确率、身份一致性与视频连续性，重点测量跨分布泛化、训练成本、推理性能及人类盲评结果。