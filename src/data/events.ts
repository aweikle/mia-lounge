// Real past events for Mia Snap Lounge.
//
// Photos live in `src/images/<folder>/` and are processed by Astro at build
// time (optimized, responsive variants generated automatically). To add a
// new event:
//   1) Create a folder at `src/images/<your-slug>/` with the event photos
//      (.jpg / .jpeg / .png supported)
//   2) Add an entry to the `events` array below with a matching `folder`
//
// The /past-events index uses the FIRST photo (alphabetically) from each
// folder as the cover thumbnail. The full gallery lives at /events/<slug>.

export interface Event {
  slug: string;
  title: string;
  date: string;
  venue?: string;
  blurb: string;
  /** Folder name under src/images/ — must match the directory exactly. */
  folder: string;
}

export const events: Event[] = [
  {
    slug: "emani-wedding-2026",
    title: "Emani Wedding",
    date: "May 2026",
    blurb:
      "A celebration of love, family, and the start of a beautiful new chapter — captured one frame at a time.",
    folder: "emani-wedding-2026",
  },
  {
    slug: "hadassah-wedding-2026",
    title: "Hadassah Wedding Reception",
    date: "2026",
    blurb:
      "An evening of joy, dancing, and unforgettable moments shared between the newlyweds and their loved ones.",
    folder: "hadassah-wedding-2026",
  },
  {
    slug: "nurse-week-2026",
    title: "Nurse Week 2026",
    date: "May 2026",
    blurb:
      "Celebrating the nurses who carry our community every day — a special booth event honoring National Nurses Week.",
    folder: "nurse-week-2026",
  },
];
