# AI Radar Maintenance Guide

AI Radar is the public, Git-backed AI intelligence layer of this blog.

## Source of truth

Public AI intelligence lives in this repository:

- `src/content/ai-entities/` — long-lived entities
- `src/content/ai-briefs/` — daily brief history
- `src/data/ai/relations.json` — explicit graph edges

Git history is the audit log. Do not introduce a database for V1.

## Daily update rules

1. Read the current `master` state before writing.
2. Resolve entities before creating new files.
3. Update an existing entity when the same model/project/paper appears again.
4. Create a new entity only when it is genuinely new.
5. Append material changes to `timeline`.
6. Prefer first-party sources: official release notes, papers, GitHub repositories and model cards.
7. Historical imported entities with `maturity: 0` are intentionally unverified placeholders. Revalidate them before upgrading maturity or making strong claims.
8. Daily briefs are time-indexed views; entities are the long-term knowledge layer.

## Status lifecycle

`discovered → watch → research → test → adopt`

Terminal/alternative states:

- `reject`
- `archived`

A status change should be explained in the entity timeline.

## Maturity rubric

`maturity` is an internal engineering-readiness score, not a model-quality leaderboard.

- `1–39` — concept / very early research
- `40–59` — research prototype / early open-source project
- `60–79` — actively developed and realistically testable
- `80–89` — mature enough for serious production evaluation
- `90–100` — strong production/community evidence; still not an automatic ADOPT decision

`0` is reserved for temporary historical imports that have not yet been source-verified. CI rejects maturity 0 once an entity enters the maintained knowledge base.

Every maintained entity must include at least one primary or directly attributable source. A source confirms the existence or specific claim; it does not make vendor benchmarks independently verified.

## Pull request policy

Automated intelligence updates must:

- use branch `ai-radar/YYYY-MM-DD`
- create a Pull Request
- never write directly to `master`
- only update content/data files automatically

Code, schema, dependencies, build scripts and deployment configuration require manual review.

## Public/private boundary

This repository is public.

Allowed:
- public projects, models and papers
- public sources
- personal public technical judgments
- public pi-67 / AIOS research directions that are safe to disclose

Forbidden:
- credentials or API keys
- private company data
- internal sales/finance data
- employee information
- unreleased confidential product plans
- private enterprise memory

Private intelligence should live in a separate protected system, not this repository.

## Deployment

No special AI Radar deployment exists.

`master → Cloudflare Pages → pnpm build:pages → pnpm build → Astro + Pagefind → dist`

AI Radar should remain compatible with that pipeline.
