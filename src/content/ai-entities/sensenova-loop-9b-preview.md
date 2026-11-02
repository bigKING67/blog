---
name: "SenseNova-Loop-9B-Preview"
kind: model
summary: "SenseNova 2026-10-30 公开的文本与图像输入模型，使用共享权重循环解码层和长上下文训练，面向 Agent、编码及文档任务。"
firstSeen: 2026-10-30
updated: 2026-11-02
status: research
tags: [multimodal, long-context, looped-transformer, open-weight, agent]
officialUrl: "https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview"
githubUrl: ""
paperUrl: ""
relevancePi67: 82
relevanceAios: 78
maturity: 61
related: [context-language-models]
timeline:
  - date: 2026-10-30
    title: "项目/模型发布并确认一手来源"
    summary: "首次公开发布信息来自官方公告、模型卡或官方代码仓库，发布方测评不视为独立验证。"
    status: research
  - date: 2026-11-02
    title: "纳入 AI Radar 研究"
    summary: "基于一手来源核验存在及发布状态，按工程成熟度规则评分，未完成本地独立评测。"
    status: research
sources:
  - title: "Official SenseNova-Loop model card"
    url: "https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview"
    published: "2026-10-30"
---

## 工程成熟度判断

61/100：已公开 Apache-2.0 权重与模型卡、训练和运行说明；依赖自定义推理实现，部分推理框架支持仍基于特定 PR，未有独立的长期稳定性证明。

## 研究行动

隔离执行自定义模型代码，构建长文本与多图证据任务评测；以准确率、峰值显存、TTFT、吞吐和错误恢复来衡量，不能将其标为原生音视频理解模型。

## 来源可信度

实体存在与明确发布事实已有一手来源；产品宣称的速度、准确率、排名和商业收益尚不视为独立验证。
