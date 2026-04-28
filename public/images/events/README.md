# Past Events Photos

Each event lives in its own subfolder here. Currently every event in
`src/data/events.ts` points at the shared `/images/placeholder.svg`.

## Swap in a real event's photos

1. **Drop the photos** into the matching event subfolder, e.g.
   `public/images/events/harbor-gala/`. Recommended files:
   - `cover.jpg` — 1600×1200 (4:3), the big section image
   - `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg` — 800×800 squares for the thumbnail grid

2. **Update `src/data/events.ts`** for that event — change `cover` and the
   `photos` array from the `placeholder` reference to the real paths:

   ```ts
   {
     slug: "harbor-gala",
     // …
     cover: "/images/events/harbor-gala/cover.jpg",
     photos: [
       "/images/events/harbor-gala/01.jpg",
       "/images/events/harbor-gala/02.jpg",
       "/images/events/harbor-gala/03.jpg",
       "/images/events/harbor-gala/04.jpg",
     ],
   },
   ```

## Adding a brand new event

1. Add a new subfolder: `public/images/events/<your-slug>/`
2. Drop in a `cover.jpg` plus `01.jpg`–`04.jpg`
3. Add a new entry at the top of the `events` array in `src/data/events.ts`
   (newest events go first)

## Removing an event

Just delete its entry from `src/data/events.ts`. You can leave the photos
in place or remove the subfolder.
