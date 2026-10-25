---
name: Hi3D v1.0
kind: model
summary: 2026-10-23 公开的参考图与粗网格条件下的高分辨率三维几何细化模型，提供推理代码与权重，但不提供完整训练及论文评测工具。
firstSeen: 2026-10-23
updated: 2026-10-25
status: watch
tags: [3d, image-to-3d, open-source, geometry, content-generation]
officialUrl: "https://hi3d.ai/"
githubUrl: "https://github.com/hi3d-official/Hi3Dv1.0"
paperUrl: ""
relevancePi67: 28
relevanceAios: 72
maturity: 55
related: []
timeline:
  - date: 2026-10-23
    title: Hi3D v1.0 推理代码及权重公开
    summary: 官方仓库公开几何细化推理流程、权重加载及 Docker 文档，输入包含参考图与粗网格；未公开训练代码与评测框架。
    status: watch
  - date: 2026-10-25
    title: 核对工程边界和许可
    summary: 模型仅生成几何而不提供材质或纹理，生产接入需核对 Hi3D Open License 与第三方依赖许可；未完成独立渲染或性能复现。
    status: watch
sources:
  - title: "Official Hi3D v1.0 GitHub repository"
    url: "https://github.com/hi3d-official/Hi3Dv1.0"
    published: "2026-10-23"
---

## 工程判断

55/100 表示公开研究原型/初期工程实现。可以复现部分推理流程，但缺少作者训练代码与完整评价脚本，不能依据厂商自述认定其已通过生产验证。

项目的实际范围是对已有粗网格做几何细化，依赖图像条件；不等于从一张图片直接生成完整带纹理、材质和可商用的 3D 场景。隐藏视角是合理补全而非真实测量。

## AIOS 启发

可将其列入未来商品三维素材生成候选，但当前应优先完成质量、显存与推理成本评测。其授权为带条件的 Hi3D Open License，商业使用需要核查署名及规模条件，不能简单按 Apache-2.0 理解整个模型。
