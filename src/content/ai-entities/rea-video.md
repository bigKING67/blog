---
name: "rea-video"
kind: project
summary: "开源视频逐镜头逆向分析工具，使用 FFmpeg、音视频证据与可选视觉模型区分实拍/生成/代码动画，生成结构化复刻方案；并非直接输出完成视频的全自动生成器。"
firstSeen: 2026-11-12
updated: 2026-11-12
status: research
tags: [video-analysis, shot-detection, audio, open-source, agent-skills]
officialUrl: "https://github.com/JuneYaooo/rea-video"
githubUrl: "https://github.com/JuneYaooo/rea-video"
paperUrl: ""
relevancePi67: 70
relevanceAios: 98
maturity: 65
related: [hyperframes, videotapestry]
timeline:
  - date: 2026-11-12
    title: "一手来源核验并纳入长期研究"
    summary: "核对项目官方 README、Apache-2.0 代码、CLI 用法、证据流程及自报评测。原始发布日期未核实；此日期为 AI Radar 首次收录日期，而非项目首次公开日期。作者报告的分类准确率未在独立视频集上复测。"
    status: research
sources:
  - title: "rea-video official GitHub repository and README"
    url: "https://github.com/JuneYaooo/rea-video"
  - title: "rea-video evaluation notes"
    url: "https://github.com/JuneYaooo/rea-video/blob/main/eval/RESULTS.md"
---

## 工程解读

项目先做镜头切分、声乐/人声/音效拆分，再利用帧率、传感器噪声、运动、元数据等证据与视觉模型进行分镜类型分析，生成 HTML 报告及拍摄、生成、程序化制作计划。可选 Gemini/Doubao 等视觉模型，不依赖其才能运行基础流程。

**成熟度 65/100：** 有可执行 CLI、示例和评测说明，适合工程验证；作者对少量样本报告的高准确率只是仓库自测，而且平台转码会影响元数据与噪声证据，不能推断商业短视频的框架切分质量。

## 研究动作

- 研究镜头、字幕、节奏、BPM、音效及生成方式分类的独立规则与证据质量。
- 用包含平台二次压缩、混剪、真人商品展示、字幕特效的标注集验证镜头边界、事件时间戳与内容分类。
- 对第三方素材仅做合法学习与分析；不得把复刻计划视为获得版权/肖像授权。

