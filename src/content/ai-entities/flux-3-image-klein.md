---
name: FLUX 3 Image Klein
kind: model
summary: Black Forest Labs 于 10 月 15 日发布的 5.6B 开放权重图像生成与编辑模型，支持多参考图和布局框控制。
firstSeen: 2026-10-24
updated: 2026-10-24
status: research
tags: [image-generation, image-editing, open-weights, multimodal, creative-tools]
officialUrl: "https://bfl.ai/blog/flux-3-image-klein"
githubUrl: ""
paperUrl: ""
relevancePi67: 42
relevanceAios: 96
maturity: 79
related: [hyperframes, artcraft]
timeline:
  - date: 2026-10-24
    title: 核验 10 月 15 日模型及 Diffusers 接入
    summary: 官方发布与 Hugging Face 技术文章证实 5.6B、开放权重、参考图编辑及布局控制，实际质量和成本需在自有公开样例评估。采用 FLUX Kommunity License，商业使用需核查资格。
    status: research
sources:
  - title: "Black Forest Labs official release"
    url: "https://bfl.ai/blog/flux-3-image-klein"
    published: "2026-10-15"
  - title: "Hugging Face Diffusers integration"
    url: "https://huggingface.co/blog/flux-3"
    published: "2026-10-15"
---
## 工程判断
79/100：可在 Diffusers / ComfyUI 等环境开展图像编辑和生成评测，但厂商速度与质量曲线尚未独立复现。对 AIOS 主要用于视觉素材和营销图的受控生成，不是现成的视频自动混剪组件；商用前应核对 FLUX Kommunity License 条件。
