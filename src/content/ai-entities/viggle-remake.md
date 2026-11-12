---
name: "Viggle Remake"
kind: model
summary: "Viggle 发布基于 MiniMax H3 的视频编辑 LoRA 与 MCP 工作流，尝试在保持原运动、镜头和音轨基础上替换人物、物体或环境；模型权重受 MiniMax H3 Community License 约束。"
firstSeen: 2026-11-12
updated: 2026-11-12
status: research
tags: [video-editing, lora, multimodal, mcp, video-generation]
officialUrl: "https://huggingface.co/Viggle/Viggle-Remake"
githubUrl: ""
paperUrl: ""
relevancePi67: 54
relevanceAios: 94
maturity: 64
related: [rea-video, hyperframes]
timeline:
  - date: 2026-11-12
    title: "一手来源核验并纳入长期研究"
    summary: "官方模型卡证实 swap/edit 两个 LoRA 模式、MCP 分镜处理和 ComfyUI 量化工作流。官方未在模型卡明确首次发布日；本日期是收录日期。商业授权、人像合规、显存约束需另行审查。"
    status: research
sources:
  - title: "Viggle Remake official model card and artifacts"
    url: "https://huggingface.co/Viggle/Viggle-Remake"
---

## 工程解读

Viggle Remake 提供 `swap` 和 `edit` 两种 LoRA 模式：人物替换和对对象、背景、天气、光线的修改。官方 MCP 流程会寻找剪辑点、分段处理并重新合成；保留原音轨而不生成新声音。

**成熟度 64/100：** 已有权重、推理脚本和工作流，但对硬件、来源画面质量与授权条件有明显依赖。官方介绍 bf16 参考推理通常需要 80GB 及以上 GPU；12–24GB 量化路径使用 ComfyUI 手动工作流，不能等同完整自动化代理。权重使用 MiniMax H3 Community License，代码 Apache 2.0；不能当作所有组成部分均可无条件商用。

## 研究动作

- 使用已获合法授权的人物与商品素材进行动作/镜头保留、文字细节、物体编辑、时间轴漂移测试。
- 分离视频改写能力与安全审核：模型不提供人像授权判断。
- 比较量化路径、远端 GPU 与商业 API 的单位合格视频成本。

