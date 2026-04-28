# Home Page Slideshow

The home page hero rotates through these images. Currently filled with
five placeholder SVGs (slide-01.svg … slide-05.svg).

## Swap in real photos

1. **Pick 5 great photos** that capture the full Mia Snap Lounge vibe — a
   mix of close-up candids, full-booth shots, and wide event scenes works
   best. Recommended size: **1920×1080** (16:9), **JPG** or **WEBP**, under
   ~500KB each.

2. **Save them** in this folder as:
   - `slide-01.jpg`
   - `slide-02.jpg`
   - `slide-03.jpg`
   - `slide-04.jpg`
   - `slide-05.jpg`

   (Or any names you prefer — just make sure step 3 matches.)

3. **Update `src/pages/index.astro`** and change the `heroSlides` array's
   file extensions from `.svg` to `.jpg` (or `.webp`). Update the `alt`
   text to describe each photo accurately for screen readers.

4. **Delete the .svg placeholders** in this folder once the real photos
   are in.

## Adding more slides

Add more entries to the `heroSlides` array in `src/pages/index.astro`. The
slideshow auto-advances every 5.5s and the dot navigation grows automatically.
