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
