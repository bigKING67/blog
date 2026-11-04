---
name: Transformers Model Integration Contracts (MIC)
kind: project
summary: Hugging Face 提出的模型集成契约方法，用缩小的代表性模型、可执行用例和固定基线，在廉价 CPU CI 中发现模型架构的行为回归。
firstSeen: 2026-11-04
updated: 2026-11-04
status: research
tags: [model-integration, testing, ai-infrastructure, ci, open-source]
officialUrl: "https://huggingface.co/blog/transformers-mic"
githubUrl: "https://github.com/huggingface/transformers-mic"
paperUrl: ""
relevancePi67: 84
relevanceAios: 90
maturity: 57
related: [embeddinggemma-2, lightonocr-3]
timeline:
  - date: 2026-11-03
    title: Hugging Face 公开 Model Integration Contracts
    summary: 通过 miniature fixture、可执行 Markdown 用例与经确认的输出基线，演示在 CPU CI 中捕获 UMT5 的注意力回归；该方案尚属拟议标准。
    status: research
  - date: 2026-11-04
    title: 纳入 AI Radar 作为模型更新回归验证候选
    summary: 核验官方技术文章、GitHub 和公开契约定义；评分关注可复现工程实现而非厂商声称的性能提升。
sources:
  - title: "Hugging Face: Transformers Model Integration Contracts"
    url: "https://huggingface.co/blog/transformers-mic"
    published: "2026-11-03"
  - title: "Hugging Face official transformers-mic repository"
    url: "https://github.com/huggingface/transformers-mic"
---

## 工程判断

缩小模型仍保留预处理器与关键层类型，用真实使用路径比较版本行为。官方报告示例中，缩小的 UMT5 fixture 在 CPU 测试中检测到一个已知回归，但这不能证明可以自动覆盖所有真实模型错误。

成熟度 57/100：有公开实现与演示，但契约方案仍在早期推广阶段，不能替代真实权重的端到端评测。

## 后续

- 将模型版本、processor/tokenizer、提示词结构、输出契约与测试集固定。
- 把轻量回归检测放在每次推理框架/模型升级之前，实际生产表现仍需真实数据复测。
