# Images

This folder holds every photo and graphic the site uses. Real photos go here
to replace the placeholder SVGs.

## Folder layout

```
public/images/
├── logo/         → brand logo + favicon
├── slideshow/    → home page hero rotating slideshow
├── events/       → past events gallery photos
├── hero/         → reserved for any per-page hero photos (optional)
└── placeholder.svg  → rose-gold placeholder used everywhere until real photos arrive
```

## How images are wired up

Image paths live in two TypeScript data files — edit them, the pages update:

- `src/data/site.ts` — brand info (no images directly)
- `src/data/events.ts` — past events (cover + thumbnails)
- `src/pages/index.astro` — `heroSlides` array (the home slideshow)

When you drop in real photos, update those data files to point at the new
filenames. Each subfolder has its own `README.md` with the exact instructions.

## Recommended sizes & formats

| Spot             | Size      | Format      | Notes                    |
| ---------------- | --------- | ----------- | ------------------------ |
| Logo (header)    | 200×200   | PNG/SVG     | Square, transparent bg   |
| Slideshow slides | 1920×1080 | JPG or WEBP | 16:9, ~250-500KB each    |
| Event covers     | 1600×1200 | JPG or WEBP | 4:3, ~400KB              |
| Event thumbnails | 800×800   | JPG or WEBP | Square, ~150KB each      |
| OG share image   | 1200×630  | PNG/JPG     | For social-link previews |

## Optimization tip

Run a quick optimization pass with `cwebp` or [Squoosh](https://squoosh.app/)
before committing — keeps the deploy fast on Netlify.
