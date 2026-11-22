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
