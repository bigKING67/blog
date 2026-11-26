---
name: "WeMM-Video"
kind: model
summary: "腾讯微信视觉团队与清华研究人员推出的中英双语视听联合理解模型系列，含 2B、4B、9B、35B-A3B。"
firstSeen: 2026-11-26
updated: 2026-11-26
status: research
tags: ["multimodal","video-understanding","audio","local-inference"]
officialUrl: "https://huggingface.co/collections/tencent/wemm-video"
githubUrl: "https://github.com/Tencent/WeMM-Video"
paperUrl: "https://arxiv.org/abs/2611.26409"
relevancePi67: 65
relevanceAios: 98
maturity: 74
related: ["videojson","videotapestry"]
timeline:
  - date: 2026-11-19
    title: "技术报告与开放权重核验"
    summary: "技术报告提交于 11 月 19 日，官方仓库及 2B/4B 权重和量化模型卡已核验；未独立复现。"
    status: research
sources:
  - title: "技术报告"
    url: "https://arxiv.org/abs/2611.26409"
    published: "2026-11-19"
  - title: "官方 GitHub"
    url: "https://github.com/Tencent/WeMM-Video"
  - title: "官方 2B 模型卡"
    url: "https://huggingface.co/tencent/WeMM-Video-2B"
  - title: "官方 4B 模型卡"
    url: "https://huggingface.co/tencent/WeMM-Video-4B"
  - title: "4B GGUF 模型卡"
    url: "https://huggingface.co/tencent/WeMM-Video-4B-GGUF"
---

## 工程判断

74/100。4B 官方 BF16 文件为 10.45 GiB，GGUF 三组件合计约 7.53 GiB，不含运行缓存等开销。GGUF 使用项目原生运行时，不能假定通用 GGUF 后端具备完整音视频支持。官方代码和所核对 2B/4B 权重标示 Apache-2.0，第三方组件须分别核验。作者报告 4B Thinking 在 Video-MME（有音频）得 83.9、Video-MME-v2（有音频）48.1；非独立评测，不能推断商业视频切分质量。适合建立按帧预算、音频消融、时间区间 IoU、结构化输出和吞吐的对照测试。
