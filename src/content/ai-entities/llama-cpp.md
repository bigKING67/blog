---
name: "llama.cpp"
kind: framework
summary: "跨平台本地大模型推理框架；2026-11-13 libllama 与 ggml 发布 v1.0.0，开始为公开 C API 提供语义化版本兼容边界。"
firstSeen: 2026-11-16
updated: 2026-11-16
status: research
tags: [local-inference, open-source, multimodal, gguf, runtime]
officialUrl: "https://huggingface.co/blog/ggml-org/llama-cpp-v1"
githubUrl: "https://github.com/ggml-org/llama.cpp"
paperUrl: ""
relevancePi67: 91
relevanceAios: 88
maturity: 88
related: [mingbird]
timeline:
  - date: 2026-11-13
    title: "libllama 和 libggml 公开 v1.0.0"
    summary: "维护团队宣布公共 C API 和 ABI 兼容变动将遵循主版本号；次版本兼容新增，补丁版本用于修复。此为稳定的版本治理承诺，不等于所有模型/后端均无缺陷。"
    status: research
  - date: 2026-11-16
    title: "首次纳入 AI Radar 长期跟踪"
    summary: "基于维护团队一手说明评估跨平台推理和升级回归价值；尚未对特定消费级 GPU 的模型兼容性、吞吐和显存使用进行独立验证。"
    status: research
sources:
  - title: "ggml-org: llama.cpp v1.0.0 release announcement"
    url: "https://huggingface.co/blog/ggml-org/llama-cpp-v1"
    published: "2026-11-13"
  - title: "Official llama.cpp source repository"
    url: "https://github.com/ggml-org/llama.cpp"
---

## 工程判断

工程成熟度 88/100：成熟开源推理框架、跨平台后端及公开分发渠道足以支持严肃生产前评估；不代表所有模型结构都已通过独立质量测试。

值得在 pi-67 / AIOS 的本地模型层进行量化与多模态兼容性回归，并明确 pin 版本、构建环境、性能基线和回退路径。重大版本升级应检查实际 API 破坏性变化，而不是将 1.0.0 视为模型能力提升。
