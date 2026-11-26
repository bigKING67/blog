---
name: "RoboTrack"
kind: project
summary: "Ai2 的真实操作视频点跟踪评测及合成训练数据项目，含轻量 RoboTracker 和大型 RoboTracker-Warp。"
firstSeen: 2026-11-26
updated: 2026-11-26
status: research
tags: ["computer-vision","point-tracking","video","synthetic-data"]
officialUrl: "https://huggingface.co/blog/allenai/robotrack"
githubUrl: "https://github.com/allenai/robotrack"
paperUrl: ""
relevancePi67: 48
relevanceAios: 87
maturity: 65
related: ["reel"]
timeline:
  - date: 2026-11-23
    title: "公开跟踪模型与数据"
    summary: "11 月 23 日发布技术文章、数据及检查点；RoboTracker 为 Apache-2.0，Warp 权重非商业许可。"
    status: research
sources:
  - title: "Ai2 技术文章"
    url: "https://huggingface.co/blog/allenai/robotrack"
    published: "2026-11-23"
  - title: "官方代码及许可"
    url: "https://github.com/allenai/robotrack"
---

## 工程判断

65/100。轻量 RoboTracker 基于 17M 参数 AllTracker，合成数据含 1500 万点轨迹。作者报告 RoboTrack-Bench AJ 62.6→63.4；机器人操作评测不能证明广告素材跟踪效果。可研究商品局部关键点、遮挡、跨帧证据和运动约束。Warp 权重 CC BY-NC 4.0，相关第三方代码亦有限制；数据与视频许可须逐项审查。
