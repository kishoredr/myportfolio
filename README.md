# DevOps/SRE Portfolio – Next.js 14 + Tailwind CSS + shadcn/ui

A modern, high‑performance personal website for a DevOps/SRE/Cloud engineer. Designed to feel personal, credible, and fast, with tasteful motion and first‑class accessibility. Content lives in‑repo (MDX/JSON) — no external CMS.

> Core goals: metric‑driven storytelling, production credibility, clean UX, excellent Lighthouse scores.

---

## Features at a glance

- **Pages**: Home, About, Skills, Portfolio (filterable), Case Studies (MDX), Experience, Testimonials, Open Source, Talks/Writing, Services (optional), Contact (server action), Resume (PDF + web).
- **Animations**: Subtle micro‑interactions and section reveals via Framer Motion; respects `prefers-reduced-motion`.
- **Content**: MDX for longform (case studies, talks) + JSON/TS for structured data (projects, testimonials).
- **Open Source**: Pull pinned repos and recent contributions from GitHub API with skeleton states.
- **Theming**: Dark mode with system preference; easily swappable color palette.
- **SEO**: Next SEO/Metadata, OpenGraph images, sitemap.xml, robots.txt, RSS, JSON‑LD schemas.
- **DX**: Type‑safe, strict ESLint + Prettier, Playwright smoke tests, GitHub Actions CI, Vercel/Netlify deploys.

---

## Technology stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **UI**: Tailwind CSS + shadcn/ui + `lucide-react` icons
- **Animations**: Framer Motion
- **Content**: MDX for longform
- **Images**: `next/image` with responsive, lazy‑loaded assets
- **Analytics**: Plausible or Vercel Analytics
- **Quality**: ESLint, Prettier, strict TS, Playwright
- **CI/CD**: GitHub Actions, designed for Vercel or Netlify deploys

---

## Quick start

### Requirements

- Node.js ≥ 18.18 (LTS recommended)
- pnpm ≥ 9 (recommended) or npm/yarn
- GitHub account + token (optional, for Open Source page rate‑limit headroom)

### Setup

1) Clone and install

```bash
# clone your repo
git clone <your-repo-url> devops-portfolio && cd devops-portfolio

# install dependencies (pnpm recommended)
pnpm install
# or: npm install / yarn install
```

2) Configure environment

Create `.env.local` (or `.env`) at the project root:

```bash
# Public site URL (used for SEO, OG images, RSS)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# GitHub (optional but recommended for higher rate limits)
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=ghp_xxx   # classic or fine-grained token with public_repo scope

# Analytics (choose one)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
# or enable Vercel Analytics in your deployment settings

# Email (choose one provider)
# Resend
RESEND_API_KEY=re_xxx
EMAIL_FROM=Portfolio <hello@your-domain.com>
EMAIL_TO=you@your-domain.com

# or SMTP
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=apikey_or_username
SMTP_PASS=super-secret
EMAIL_FROM=Portfolio <hello@your-domain.com>
EMAIL_TO=you@your-domain.com

# Contact form safeguards
RATE_LIMIT_WINDOW=10   # seconds
RATE_LIMIT_MAX=3       # requests allowed per window
HONEYPOT_FIELD=company # name of a hidden honeypot field

# Misc
RESUME_URL=/resume/Your_Name_Resume.pdf  # place the PDF in public/resume/
```

3) Start development

```bash
pnpm dev
# open http://localhost:3000
```

4) Type‑check, lint, build

```bash
pnpm typecheck
pnpm lint
pnpm build && pnpm start
```

---

## Project structure (recommended)

```text
app/
  (routes)
    about/
    skills/
    portfolio/
    case-studies/[slug]/
    experience/
    testimonials/
    open-source/
    talks-writing/
    services/            # optional
    contact/
    resume/
    sitemap.ts
    robots.ts
components/
  ui/                    # shadcn/ui components
  common/                # Header, Footer, Section, Stat, Timeline, Tag, CodeBlock
content/
  case-studies/          # *.mdx
  projects/              # projects.json or *.ts
  talks/                 # *.mdx
  testimonials/          # testimonials.json or *.ts
  images/
lib/
  github.ts              # GitHub API helpers
  seo.ts                 # SEO + JSON‑LD helpers
  theme.ts               # brand colors, tokens
  utils.ts
public/
  resume/Your_Name_Resume.pdf
  og/                    # OG templates/assets (optional)
scripts/
  generate-og.ts         # dynamic OG images (optional)
styles/
  globals.css
  mdx.css
```

> Note: Exact paths may differ slightly; the codebase wires these up for you. Content lives in `content/` and can be edited without touching code.

---

## Content authoring

### Case studies (MDX)

Place files in `content/case-studies/your-slug.mdx` with frontmatter:

````mdx
---
title: "EKS migration with ALB/Ingress + Helm"
date: "2024-01-12"
summary: "Reduced deploy time 10× and improved SLO to 99.95%."
tags: ["AWS", "EKS", "Helm", "CI/CD"]
metrics:
  - "99.95% SLO"
  - "40% cost reduction"
  - "10× deploy speed"
---

## Problem
...

## Constraints
...

## Architecture
<ArchitectureDiagram />

## IaC / CI
```hcl
# Terraform snippet here
```

## Results
- ...

## Lessons learned
- ...
````

### Portfolio projects

Add entries to `content/projects/projects.json` (or `.ts`):

```json
[
  {
    "title": "EKS Platform (ALB + Ingress + Helm)",
    "tags": ["AWS", "EKS", "Helm", "CI/CD"],
    "summary": "Production EKS with GitOps deploys and policy guardrails.",
    "metrics": ["99.95% SLO", "10× deploy speed"],
    "stack": ["AWS", "Kubernetes", "Helm", "GitHub Actions"],
    "links": { "github": "https://github.com/your/repo", "caseStudy": "/case-studies/eks-migration" }
  }
]
```

### Testimonials and talks

- `content/testimonials/*.json` – quote, name, title, avatar (optional)
- `content/talks/*.mdx` – title, event, link/video embed

---

## Theming & branding

- Update colors and tokens in `tailwind.config.ts` and `lib/theme.ts`.
- Accent suggestions: blue or emerald; base: neutral/stone.
- Uses system fonts or Inter via `next/font`. Headings slightly condensed.

---

## SEO, OpenGraph, RSS, Schema.org

- **Metadata**: Configure in `app/layout.tsx` via Next.js Metadata API or in `lib/seo.ts` if using next‑seo.
- **OpenGraph**: Per‑page OG with dynamic images; route or script provided.
- **Sitemap/Robots**: `app/sitemap.ts` and `app/robots.ts` emit correct URLs.
- **RSS**: Blog/case‑study feed is generated (if content exists) and linked in the footer.
- **JSON‑LD**: Person, Article, Project schemas emitted in relevant routes.

---

## Accessibility & performance

- Keyboard navigation, visible focus, color contrast checks.
- Motion kept within 200–400ms, `easeInOut`, and disabled for users opting out.
- Aim for Lighthouse 95+ across Performance, Accessibility, Best Practices, SEO.

---

## Scripts

```jsonc
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit",
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui",
  "format": "prettier --write ."
}
```

---

## Testing (Playwright)

```bash
# first time
pnpm exec playwright install --with-deps

# run tests
pnpm test:e2e
# or headful
pnpm test:e2e:ui
```

A basic smoke test verifies navigation and dark mode.

---

## CI (GitHub Actions)

A minimal CI workflow builds, lints, and runs tests.

```yaml
name: ci
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm typecheck
      - run: pnpm lint
      - run: pnpm build
      - run: pnpm exec playwright install --with-deps
      - run: pnpm test:e2e
```

---

## Deployment

### Vercel (recommended)

- Import the repo in Vercel, set Environment Variables from `.env`.
- Enable Analytics (optional). Preview URLs work automatically on PRs.

### Netlify

- Build command: `pnpm build`
- Publish directory: `.next`
- Add env variables in Site settings → Environment.

> Tip: For OpenGraph images or contact form emails, ensure the corresponding environment variables are set in Production and Preview scopes.

---

## How to customize

- Swap accent colors and radii in `tailwind.config.ts` and `lib/theme.ts`.
- Edit copy in `content/` and per‑route files under `app/`.
- Update logos strip and stats on the Home page.
- Add/remove sections by editing `app/(routes)` segments.

---

## Troubleshooting

- **GitHub API rate limits**: Add `GITHUB_TOKEN` to increase limits. Skeletons will render while fetching.
- **Emails not sending**: Verify provider creds and that server actions are enabled. Check logs.
- **Build fails on MDX**: Ensure frontmatter and imports are valid; restart dev server after adding new MDX.

---

## Roadmap ideas (optional)

- Project search and tag pages
- Project OG image per tag
- Additional providers (Mailgun, Postmark) for contact
- Sitemap split by content type

---

## License

MIT © You. See `LICENSE` if included, otherwise feel free to add one.

---

## Credits

- Built with Next.js, Tailwind, shadcn/ui, Framer Motion, and MDX.
- Iconography by `lucide-react`.

---

## Editing this project in Cursor

- This repo is designed to work seamlessly in Cursor. You can ask the assistant to add pages, components, or content and it will update the codebase accordingly. Prefer in‑repo content (MDX/JSON) for easy edits without code changes.
