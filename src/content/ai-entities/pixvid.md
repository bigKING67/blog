---
name: PixVid (Back to Pixels)
kind: paper
summary: "2026-11-12 发布的视频扩散论文，将潜空间视频生成转换到逐帧像素空间，以改善分辨率扩展、逐帧控制和动作条件编辑。"
firstSeen: 2026-11-14
updated: 2026-11-14
status: research
tags: [video-generation, pixel-space, diffusion, editing, temporal-control]
officialUrl: "https://chenshuo20.github.io/PixVid/"
githubUrl: ""
paperUrl: "https://arxiv.org/abs/2611.17336"
relevancePi67: 38
relevanceAios: 84
maturity: 37
related: [atas]
timeline:
  - date: 2026-11-14
    title: 原始论文和作者项目页核验
    summary: "论文于 11 月 12 日公开，描述基于 Wan2.1-14B 的像素空间逐帧预测方案；分辨率及逐帧交互性能属于作者实验，未确认开源权重与完整可复现推理流程。"
    status: research
sources:
  - title: "PixVid original paper on arXiv"
    url: "https://arxiv.org/abs/2611.17336"
    published: "2026-11-12"
  - title: "PixVid authors' project page"
    url: "https://chenshuo20.github.io/PixVid/"
---
## 技术判断

论文尝试绕开多帧 VAE 潜变量的控制粒度限制，使动作可在下一帧影响输出。官方实验中有更高分辨率与运动编辑质量表现，但不能由此推断工程推理成本低。

## 工程验证重点

观察逐帧控制、条件编辑与跨镜头一致性研究，待完整代码和权重可获取后再决定是否开展生产级集成。
