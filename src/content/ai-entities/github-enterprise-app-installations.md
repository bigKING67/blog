---
name: GitHub Enterprise App Installations GA (2026)
kind: product
summary: GitHub 于 10 月 23 日宣布企业级 GitHub App 安装正式可用，扩展最小权限的治理、安全与管理 API 能力。
firstSeen: 2026-10-24
updated: 2026-10-24
status: watch
tags: [github-app, enterprise, permissions, developer-tools, governance]
officialUrl: "https://github.blog/changelog/2026-10-23-enterprise-installations-for-github-apps-generally-available/"
githubUrl: ""
paperUrl: ""
relevancePi67: 86
relevanceAios: 58
maturity: 87
related: [paperclip]
timeline:
  - date: 2026-10-24
    title: 核验 10 月 23 日官方 GA 公告
    summary: GitHub 官方确认企业安装正式可用，并扩展策略、规则、访问限制和管理权限；这是 GitHub 平台专属能力，不代表其他 Git 托管平台具有相同 API。
    status: watch
sources:
  - title: "GitHub Changelog: Enterprise installations for GitHub Apps GA"
    url: "https://github.blog/changelog/2026-10-23-enterprise-installations-for-github-apps-generally-available/"
    published: "2026-10-23"
---
## 工程判断
87/100：已进入 GA，可用于正式生产评估。值得借鉴细粒度授权、安装范围和机器人凭据生命周期的架构思想，但 pi-67 的代码托管层仍应保持 GitHub/GitLab/自托管中立。
