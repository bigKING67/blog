---
name: "Shirudo"
kind: project
summary: "OpenAI 与 Cisco 发布的 Linux eBPF 临时防护运行时，结合签名、验证和受控部署。"
firstSeen: 2026-11-25
updated: 2026-11-25
status: research
tags: ["agent-security","linux","ebpf","runtime"]
officialUrl: "https://openai.com/index/introducing-shirudo/"
githubUrl: "https://github.com/shirudo-dev/shirudo"
paperUrl: ""
relevancePi67: 91
relevanceAios: 73
maturity: 55
related: ["pi-67-runtime-security"]
sources:
  - title: "OpenAI announcement"
    url: "https://openai.com/index/introducing-shirudo/"
    published: "2026-11-23"
  - title: "Official repository"
    url: "https://github.com/shirudo-dev/shirudo"
timeline:
  - date: 2026-11-25
    title: "一手来源核验与工程评估"
    summary: "核验官方发布与预发布仓库；生产目标需要相应内核补丁和 TPM 2.0。"
    status: research
---

## 核心解读与工程判断

Shirudo 提供签名的临时防护程序、监控与运营者批准机制，使防护可以在正式修补前应用。官方展示受控测试，不等同于通用防护保障。pi-67 可参考生成策略、独立验证、审批和审计的分层。不能替代正常补丁、隔离和权限控制。55/100：预发布原型，有代码与 VM 快速开始，生产兼容性受限。
