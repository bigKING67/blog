---
name: "SenseNova 6.8 Code2Video"
kind: model
summary: "基于 Qwen3.8-27B 后训练的代码驱动视频创作模型，公开权重、生产 Skill 与渲染审查轨迹，适合程序化短片、动效与可编辑内容研究。"
firstSeen: 2026-11-08
updated: 2026-11-08
status: research
tags: [video-generation, code-video, open-weights, multimodal, creative-engine, agent]
officialUrl: "https://huggingface.co/sensenova/SenseNova-6.8-Code2Video"
githubUrl: "https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video"
paperUrl: ""
relevancePi67: 67
relevanceAios: 98
maturity: 66
related: [hyperframes, artcraft]
timeline:
  - date: 2026-11-08
    title: "一手权重与仓库核验，首次进入 AI Radar"
    summary: "确认 Hugging Face 提供 Qwen3.8-27B 衍生模型、Apache-2.0 标记及代码化渲染资料；作者明确称尚无系统 Benchmark、生产任务可能运行数小时，不能等同写实视频生成服务。"
    status: research
sources:
  - title: "SenseNova 6.8 Code2Video official Hugging Face model card"
    url: "https://huggingface.co/sensenova/SenseNova-6.8-Code2Video"
  - title: "OpenSenseNova: Code2Video official source and production skill"
    url: "https://github.com/OpenSenseNova/SenseNova-6.8-Code2Video"
---

## 核心解读

用可编辑代码表示场景、物体、字体、镜头与时间线，并通过渲染、逐帧检查和定向修复迭代。相比黑盒像素采样，这种方式让定时、文案和几何位置具有更好的可检查性。

## 工程判断

66/100：权重和工作流已可下载，能够进入研究性工程评测，但离成熟商业生产仍有距离。它主要输出程序化内容，并非直接生成高质量真人实拍广告；官方示例和长会话描述尚未经独立业务评测。27B 规模及多卡部署示例也不适合直接假设在普通单张 12GB 显卡完整运行。

## 下一步

- 与确定性程序渲染框架比较字幕、动效、图文产品介绍和品牌视觉在时间轴精度、编辑代价、可审计性方面的质量。
- 将模型生成的代码视为不可信执行产物，沙箱渲染并限制网络/文件权限。
- 测量单条合格内容总成本，纳入多轮返工和长会话耗时。
