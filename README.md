# Shalom Calvin – Personal Portfolio

A modern, responsive personal portfolio website for **Shalom Calvin**, a Software Engineer focused on backend development, full stack web applications and Microsoft Power Platform solutions.

> This repository contains the website source code only. It is not yet deployed, and no live URL is published.

## Overview

The site is a single-page portfolio presenting professional background, skills, project work and credentials. It uses a premium dark-navy design with blue and purple accents, and includes a matching light theme.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/) for scroll and entrance animations
- [Lucide React](https://lucide.dev/) icons
- ESLint

## Features

- **Hero** with introduction, technology tags and portrait
- **About**, **Experience** timeline, **Technical Skills**, **Projects**, **Certifications & Education** and **Contact** sections
- **Projects section** with featured project cards and a grid of additional professional projects
- **Light and Dark Mode**
  - Follows the visitor's system preference on first visit
  - Manual toggle, saved in `localStorage` and restored on return visits
  - No flash of the wrong theme on load
- **Responsive navigation**
  - Desktop navigation bar
  - Hamburger menu on smaller screens that closes on selection, outside click or `Escape`
- **Accessibility**: semantic HTML, keyboard support, skip link, accessible labels and `prefers-reduced-motion` support
- **SEO basics**: page metadata, Open Graph and Twitter card tags, `robots.txt` and `sitemap.xml`

## Project structure

```
src/
  app/          # Routes, layout, global styles, icons, robots and sitemap
  components/   # UI components (sections, cards, navigation, theme toggle)
  lib/          # Site content and configuration (typed data files)
public/         # Static assets
```

Site content lives in typed data files under `src/lib/` (for example `experience.ts`, `projects.ts`, `skills.ts` and `credentials.ts`), so content can be updated without touching components.

## Getting started

### Prerequisites

- Node.js 20.9 or later
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npx next typegen   # generate Next.js route types
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript check
```

### Production build

```bash
npm run build
npm start
```

## Technology logos

The site shows 35 transparent PNG icons from `public/brand-icons/`. No SVG file is stored in `public/`, so none is served by the website. Each PNG was rendered, without edits, from an SVG source (a Devicon, Lucide or supplied Microsoft SVG kept in a local git-ignored archive, or one of the original illustrations in `design/brand-icons/original/`). Converting an SVG to PNG does not change its licence or trademark status. Full per-file source, checksum and licence status is in [`ICON-ASSETS-NOTICE.txt`](ICON-ASSETS-NOTICE.txt).

**Active icons**

- **Open-source logos** come from the [Devicon](https://devicon.dev/) project (MIT licence, see `public/brand-icons/LICENSE-devicon.txt`). The C#, .NET and Azure marks are Microsoft brand marks that Devicon redistributes; the MIT licence is not a Microsoft permission for them.
- **Microsoft product icons** (Power Apps, Power Automate, Power BI, Power Platform, Dataverse, Power Fx, Azure Functions, Azure Logic Apps, Custom Connectors, SQL and SharePoint). Most are byte-identical to files in Microsoft's official Power Platform and Azure icon downloads. Microsoft permits those icons in architectural diagrams, training materials or documentation and reserves all other rights. The site owner states they hold permission to use them on this site; that statement is recorded but not independently verified, and no endorsement by Microsoft is implied. SharePoint and Power BI match only a community mirror (MS Icons), and Power Fx comes from Simple Icons, which cites Microsoft's icon guidance.
- **Original artwork** (`design/brand-icons/original/`): the RTMP, Authentication & Authorization, Third-party API, Excel, Microsoft Graph API, Office 365 Connectors, Azure Identity and Azure Storage icons are simple generic illustrations drawn for this portfolio. They are not copies of any company's logo. Their licence has not been formally determined.
- **REST APIs** uses the [Lucide](https://lucide.dev/) `arrow-left-right` icon (ISC licence, see `public/brand-icons/LICENSE-lucide.txt`).

**Archived originals (not published)**

Eight earlier supplied SVG files were replaced because their origin or licence could not be verified, or because the artwork did not match the technology: RTMP, Authentication & Authorization, Third Party API, Excel, Microsoft Graph API, Office 365 Connectors, Azure Identity and Azure Blob Storage. They are kept unmodified, together with a PNG conversion of each, in a local git-ignored folder. They are not part of the repository or the deployed site, and their licensing remains unverified.

**Reproducibility**

The PNG files are committed, so the site builds without any extra step. The SVG sources of most icons and the helper script that renders the PNGs are kept only in a local git-ignored folder, so the PNGs cannot be regenerated from this repository alone. The eight original illustrations can be re-rendered from the SVG files in `design/brand-icons/original/`.

Logos and trademarks belong to their respective owners. Technologies without a suitable icon are shown as plain text labels.

## Configuration

The site URL is intentionally not hardcoded. Canonical links, Open Graph URLs, `robots.txt` and `sitemap.xml` use it only when it is available.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Final public URL, e.g. `https://your-domain.example`. Optional. |

If `NEXT_PUBLIC_SITE_URL` is not set, Vercel's automatically provided `VERCEL_PROJECT_PRODUCTION_URL` is used. With neither set (such as local development), URL-dependent metadata is simply omitted.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/), choose **Add New → Project** and import the repository.
3. Keep the detected **Next.js** framework preset. The default build command (`npm run build`) and install command (`npm install`) work as-is.
4. Click **Deploy**.
5. Once the final URL is known (the Vercel URL or a custom domain), set `NEXT_PUBLIC_SITE_URL` under **Project Settings → Environment Variables** and redeploy so canonical and social-sharing URLs are generated.
6. Optionally add a custom domain under **Project Settings → Domains**, and configure any security headers in `vercel.json` or `next.config.ts`.
