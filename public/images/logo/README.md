# Logo

Currently using a generated SVG placeholder (`logo.svg`). Replace with the
real Mia Snap Lounge logo.

## Swap in the real logo

1. **Save the logo** in this folder as either:
   - `logo.png` (transparent background, 400×400 or larger)
   - `logo.svg` (vector — preferred if available)

2. **Update references** if you change the file extension:
   - `src/components/Header.astro` — header logo
   - `src/layouts/Layout.astro` — favicon
   - `public/images/README.md` — table reference

## Favicon (browser tab icon)

The current setup uses the same logo file as the favicon. If you want a
purpose-built favicon (the logo can look muddy at 16×16), generate one at
[realfavicongenerator.net](https://realfavicongenerator.net/) and drop a
`favicon.ico` plus `apple-touch-icon.png` in this folder, then update
`src/layouts/Layout.astro` to reference them.

## Open Graph image (social link previews)

For pretty link previews when the site is shared on Slack, iMessage,
Facebook, etc., add an `og-image.png` here at **1200×630** — a stylized
image of the booth or a designed splash with the brand mark. Then update
`src/layouts/Layout.astro` if the filename differs.
