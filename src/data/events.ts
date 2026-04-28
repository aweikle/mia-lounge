// PLACEHOLDER events — replace with real past events as photos are provided.
// Each event renders as a section on /past-events with a photo grid.
//
// HOW TO ADD A REAL EVENT (once Tenille sends photos):
//   1) Drop photos into /public/images/events/<slug>/
//      Recommended sizes:
//        - cover.jpg → 1600×1200 (4:3) or larger
//        - 01.jpg…04.jpg → 800×800 (square thumbnails)
//   2) Update the matching entry below — change paths from
//      "/images/placeholder.svg" to the real per-event paths, e.g.:
//        cover: "/images/events/harbor-gala/cover.jpg",
//        photos: ["/images/events/harbor-gala/01.jpg", ...]

export interface Event {
  slug: string;
  title: string;
  date: string;
  venue: string;
  blurb: string;
  cover: string;
  photos: string[];
}

const placeholder = "/images/placeholder.svg";

export const events: Event[] = [
  {
    slug: "harbor-gala",
    title: "The Harbor Gala",
    date: "March 2026",
    venue: "American Visionary Art Museum",
    blurb:
      "A black-tie evening celebrating Baltimore artists, with rose gold accents and a custom monogram backdrop.",
    cover: placeholder,
    photos: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "johnson-wedding",
    title: "The Johnson Wedding",
    date: "October 2025",
    venue: "The Belvedere",
    blurb:
      "Romance, florals, and a 200-guest dance floor that never quit. Our florals backdrop made every photo a portrait.",
    cover: placeholder,
    photos: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "sweet-sixteen-amelia",
    title: "Amelia's Sweet 16",
    date: "August 2025",
    venue: "Private residence, Towson",
    blurb:
      "A neon-meets-pink celebration with custom photo strips and enough boomerangs to fill her entire feed.",
    cover: placeholder,
    photos: [placeholder, placeholder, placeholder, placeholder],
  },
  {
    slug: "corporate-launch-loft",
    title: "Loft & Bough Launch Party",
    date: "June 2025",
    venue: "Sagamore Pendry, Fells Point",
    blurb:
      "Brand activation for a Baltimore lifestyle company — branded photo template, sequin backdrop, and a packed event.",
    cover: placeholder,
    photos: [placeholder, placeholder, placeholder, placeholder],
  },
];
