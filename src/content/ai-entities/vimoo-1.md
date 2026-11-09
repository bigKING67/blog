---
name: "Vimoo 1.0"
kind: model
summary: "Vimoo-AI 的开放权重视频生成家族，提供 11.7B T2V/I2V 与约 9.5B Lite；另有面向商品参考图的 Ecom 托管 API。"
firstSeen: 2026-11-09
updated: 2026-11-09
status: research
tags: [video-generation, open-weights, image-to-video, ecommerce, multimodal]
officialUrl: "https://huggingface.co/Vimoo-AI/Vimoo-1.0"
githubUrl: "https://github.com/Vimoo-AI/Vimoo-1.0"
paperUrl: ""
relevancePi67: 46
relevanceAios: 97
maturity: 67
related: []
timeline:
  - date: 2026-11-09
    title: "核验开放权重与 Ecom API 能力边界"
    summary: "核验普通 T2V/I2V、Lite 权重及推理代码；Ecom 支持 1–9 张商品参考图生成 20 秒 9:16 720p 视频的能力来自官方 API 介绍，不等同于 Ecom 全管线开放权重。"
    status: research
sources:
  - title: "Vimoo-AI official model card"
    url: "https://huggingface.co/Vimoo-AI/Vimoo-1.0"
  - title: "Vimoo 1.0 Lite official model card"
    url: "https://huggingface.co/Vimoo-AI/Vimoo-1.0-Lite"
  - title: "Vimoo official inference repository"
    url: "https://github.com/Vimoo-AI/Vimoo-1.0"
---

## 核心判断

Vimoo-Base 的模型权重可研究；Vimoo-PE 提示词增强、Vimoo-Enhancer 和 Ecom 商业管线不应默认视为完整开源。本地推理需单独核对显存、CUDA 版本、生成时延、商业使用条款和实际输出。

## 评测重点

商品外观与包装文字是否正确，镜头间商品一致性，卖点表达真实性，逐秒生成成本和高质量合格片段占比。官方展示和自制 Vimoo-VBench 不等于独立对比测试。
