---
name: Doubao Seedance 2.5 Flash
kind: model
summary: 字节跳动在火山方舟开放的 Seedance 2.5 系列低分辨率视频生成档位，支持多模态参考、视频编辑及延长，模型 ID 为 doubao-seedance-2-5-flash-261115。
firstSeen: 2026-11-19
updated: 2026-11-19
status: research
tags: [video-generation, multimodal, video-editing, creative-tool, model-evaluation]
officialUrl: "https://docs.volcengine.com/docs/ark/seedance-2-5?lang=zh"
githubUrl: ""
paperUrl: ""
relevancePi67: 54
relevanceAios: 96
maturity: 75
related: [vidforge, hyperframes]
timeline:
  - date: 2026-11-15
    title: Flash 版本进入视频生成 API 型号列表
    summary: 火山方舟列示 doubao-seedance-2-5-flash-261115，支持文生视频、首/首尾帧、全模态参考、编辑和延长，提供 480p 与 720p 输出；不支持 1080p、4K 与 Draft 模式。
    status: research
  - date: 2026-11-19
    title: 纳入视频生成工程评测候选
    summary: 已用火山方舟官方模型公告与能力表核对型号及限制，尚未独立比较实际成本、速度与商品一致性。
    status: research
sources:
  - title: "火山方舟：2026 年 11 月模型发布公告"
    url: "https://console.volcengine.com/ark/region:cn-beijing/docs/model-release-announcement"
    published: "2026-11-16"
  - title: "火山方舟：Doubao Seedance 2.5 系列教程"
    url: "https://docs.volcengine.com/docs/ark/seedance-2-5?lang=zh"
  - title: "火山方舟：视频生成能力列表"
    url: "https://docs.volcengine.com/docs/ark/video-generation-tutorial?lang=zh"
---

## 工程成熟度依据

75/100：有正式服务型号及可查的能力与规格，可开展 API 质量和成本测试；但未见可本地部署权重，也未完成独立高频创作评测。厂商宣传的速度和成本优势不能当作实测结论。

## 研究重点

- 在统一提示词与参考素材下比较商品外观保真、动作一致性、音画同步和镜头编辑质量。
- 按最终合格视频而非单次请求统计费用、重试次数和端到端时延。
- 4–30 秒、24fps、480p/720p 的档位定位更适合快速迭代；高分辨率交付应另行选择或升级。
