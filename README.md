# Mia Snap Lounge

Modern photo booth experiences for Baltimore and the DMV. A boutique
photo booth website built with Astro and Tailwind CSS, deployed to Netlify.

## Tech stack

- **[Astro 5](https://astro.build)** — static site framework
- **[Tailwind CSS 4](https://tailwindcss.com)** — styling (via `@tailwindcss/vite`)
- **[Netlify](https://netlify.com)** — hosting + form submissions

## Local development

```bash
npm install
npm run dev          # local dev server at http://localhost:4321
npm run build        # static build to ./dist
npm run preview      # preview the production build locally
```

## Project structure

```
src/
├── components/    Header, Footer, Slideshow
├── data/          site.ts, pricing.ts, events.ts  ← edit these to update content
├── layouts/       Layout.astro (shared shell)
├── pages/         index, pricing, booking, past-events, community, booking-thanks
└── styles/        global.css (Tailwind theme + design tokens)

public/
├── images/        photos & graphics (see public/images/README.md)
└── ...
```

## Editing site content

Most copy lives directly in the `.astro` files in `src/pages/`. For things
that show up in multiple places, edit the data files:

- **`src/data/site.ts`** — brand name, contact info, social handles, nav
- **`src/data/pricing.ts`** — packages, add-ons
- **`src/data/events.ts`** — past events shown on the gallery page

## Adding photos

See `public/images/README.md` for the full guide. Quick version:

1. Drop photos in the matching subfolder (`slideshow/`, `events/<slug>/`, etc.)
2. Update the matching data file or `src/pages/index.astro` to point at the new filenames

## Deploy to Netlify

The repo is preconfigured (`netlify.toml`) — Netlify will:

- Run `npm run build`
- Publish from `./dist`
- Auto-detect the booking form on first deploy

### First deploy

1. Push this repo to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Select the repo — settings are auto-detected
4. (Optional) Add a custom domain in **Site settings → Domain management**

### Booking form notifications

After the first deploy with a real form submission:

1. Netlify dashboard → **Forms** → `booking`
2. **Settings → Form notifications → Add notification**
3. Email notifications (free) — point at Tenille's inbox

## Design language

- **Palette**: pure black backgrounds, rose-gold gradients, cream text
- **Typography**:
  - `Allura` — script display (matches the logo wordmark)
  - `Cinzel` — uppercase serif for eyebrows and buttons
  - `Inter` — body text
- **Components** in `src/styles/global.css`: `.btn-primary`, `.btn-ghost`, `.card`, `.rose-gradient-text`, `.glow-divider`, `.sparkle-bg`

## Things still on the placeholder list

Search the codebase for `PLACEHOLDER` to find every spot that still needs
real content:

- Contact info (email, phone, social handles) in `src/data/site.ts`
- Pricing packages in `src/data/pricing.ts` (review numbers with Tenille)
- Past event details in `src/data/events.ts` (replace with real events)
- Community stats on `src/pages/community.astro` (`$X,XXX raised`, etc.)
- All photos in `public/images/` (currently SVG placeholders)
