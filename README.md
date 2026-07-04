# Syed Mubeen Ali — Portfolio (React + Vite + Tailwind)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploying to GitHub Pages (syedmubeenali.dev)

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
automatically on every push to `main`.

One-time setup:
1. Push this project to the `Mubeenali53/Portfolio` repo (replacing its
   current contents — back up the old vanilla HTML version first if you
   want it, e.g. tag it `v1-static`).
2. In the repo: **Settings -> Pages -> Source -> GitHub Actions**.
3. In the repo: **Settings -> Pages -> Custom domain** -> confirm
   `syedmubeenali.dev` (the `CNAME` file in `public/` handles this
   automatically once deployed — GitHub Pages reads it from the build
   output).
4. Push to `main`. The Action builds and deploys; check the **Actions** tab
   for progress, then verify at `https://syedmubeenali.dev`.

## What changed vs. the old vanilla version

- Migrated to React + Vite + Tailwind CSS v4 + Framer Motion.
- Content is now data-driven (`src/data/`) — adding a project or publication
  means adding one object, not copy-pasting HTML.
- Fixed dead links: resume link now points to `/Resume.pdf` (the file
  existed in the old repo but was never linked).
- Removed GitHub/Visit buttons for the 5 projects that don't have public
  links yet (Face Recognition, Air Canvas, Crop Prediction, Food Serving
  Bot had empty `href=""`; Gesture to Speech's GitHub link was restored
  since the repo exists). Add them back in `src/data/projects.js` once
  those repos/demos are public.
- Added proper SEO meta tags (description, OG, Twitter card, canonical)
  — the old site had none.
- New circuit-board/signal visual identity (see design notes below),
  replacing the previous generic dark portfolio template look.

## Design notes

Palette: near-black PCB green background (`#0A1512`), copper accent
(`#E8974E`), signal-cyan accent (`#5FD9C5`). Type: IBM Plex Mono for
headings (schematic/datasheet feel), IBM Plex Sans for body — both
designed for technical documentation. Signature element: an animated
oscilloscope-style waveform trace in the hero. Project cards carry
corner "pin" marks like a component footprint; section headers use
oscilloscope-channel labels (`CH.01`, `CH.02`...) instead of generic
numbering.
