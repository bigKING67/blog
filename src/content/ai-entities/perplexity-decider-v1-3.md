---
name: "Perplexity Decider v1.3 / Flash v1.3"
kind: model
summary: "Perplexity 发布的结构化决策模型家族；基于 Qwen3.8-27B 与 Qwen3.5-4B，新增 Locate 文本区间提取，支持文本/图像分类、概率与评分。"
firstSeen: 2026-11-16
updated: 2026-11-16
status: research
tags: [decision-model, multimodal, classification, agent-routing, open-weights]
officialUrl: "https://www.perplexity.ai/hub/blog/perplexity-decider"
githubUrl: ""
paperUrl: ""
relevancePi67: 88
relevanceAios: 93
maturity: 67
related: [microsoft-decision-1]
timeline:
  - date: 2026-11-12
    title: "Perplexity 公布 Decider v1.3 与 Flash v1.3"
    summary: "官方模型卡描述 choice/noul/score/locate 等结构化判断与文本证据区间提取；Flash 基于 Qwen3.5-4B，较大版本基于 Qwen3.8-27B。发布方评测数据没有独立复现。"
    status: research
  - date: 2026-11-16
    title: "核验模型卡的访问与部署限制"
    summary: "虽然模型卡标注 Apache 2.0，但使用说明称模型仓库需要有权限的 Hugging Face Token。Flash BF16 仅权重约占 8.5GiB，还需要运行余量，无法仅据容量推断 12GB GPU 可稳定运行。"
    status: research
sources:
  - title: "Perplexity official Decider v1.3 technical announcement"
    url: "https://www.perplexity.ai/hub/blog/perplexity-decider"
    published: "2026-11-12"
  - title: "Perplexity Decider Flash v1.3 official Hugging Face model card"
    url: "https://huggingface.co/perplexity-ai/pplx-decider-flash-v1.3"
  - title: "Perplexity Decider v1.3 official Hugging Face model card"
    url: "https://huggingface.co/perplexity-ai/pplx-decider-v1.3"
---

## 工程判断

67/100：模型卡、API 访问路径与可验证的请求协议已经公开；权重仍有访问门槛，公开性能数字不应当成独立验证。该成熟度不代表高于其他视觉模型的质量排名。

建议在 pi-67 评估工具路由与任务分级，在 AIOS 评估镜头类别及商品属性判定、置信度校准。Locate 是文本字符区间定位，不是视频时间戳定位。与 Qwen3.5-4B 视频理解不能直接画等号。
