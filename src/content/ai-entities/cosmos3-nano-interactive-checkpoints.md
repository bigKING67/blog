---
name: NVIDIA Cosmos 3 Nano Interactive Checkpoints
kind: model
summary: NVIDIA 于 2026-11-05 发布四类 Cosmos 3 Nano 专用开放权重检查点，覆盖多视角仿真、传感器生成与动作条件视频预测。
firstSeen: 2026-11-07
updated: 2026-11-07
status: research
tags: [world-model, multimodal, video-generation, physical-ai, open-weights]
officialUrl: "https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation"
githubUrl: ""
paperUrl: ""
relevancePi67: 58
relevanceAios: 83
maturity: 66
related: [atas]
timeline:
  - date: 2026-11-05
    title: 四种专用 Cosmos 3 Nano 检查点发布
    summary: NVIDIA 官方分别推出 Transfer-Auto、Sim-Auto、Sim-Transfer 与 Sim-Bimanual；每个为 Cosmos 3 Nano 后训练的 16B 训练参数模型，许可为 OpenMDW1.1。
    status: research
  - date: 2026-11-07
    title: 纳入世界模型与条件视频技术研究
    summary: 有官方开放权重和训练说明，尚不能推断其适合通用品牌视频创作或消费级显卡部署；需要区分仿真用途与广告生成用途。
    status: research
sources:
  - title: "NVIDIA: Cosmos 3 open models for interactive world simulation"
    url: "https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation"
    published: "2026-11-05"
  - title: "NVIDIA Cosmos 3 Nano Sim-Bimanual official checkpoint"
    url: "https://huggingface.co/nvidia/Cosmos3-Nano-Sim-Bimanual"
    published: "2026-11-05"
---

## 工程判断

四种检查点面向车载多视角 RGB/LiDAR、模拟器空间状态到视频、机器人动作到视频等明确任务。具备开放权重、训练说明及技术文档，工程成熟度 **66/100**；尚无独立验证表明适合普通广告视频或可低成本端侧部署。官方给出的 GB200 等实验硬件不等于最低配置。

## 研究方向

- 关注“显式世界状态/动作 → 视觉结果”的控制架构，不将物理仿真模型直接理解为成品营销视频生成模型。
- 研究连续生成的误差累积、时序状态一致性和实时反馈回路。
