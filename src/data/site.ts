// Centralized site config — edit this file to update brand/contact info site-wide.
// Anything marked PLACEHOLDER should be replaced before launch.

export const site = {
  brand: "Mia Snap Lounge",
  parentBrand: "The MIA Collective",
  tagline: "Modern Photo Booth Experiences",
  city: "Baltimore, Maryland",
  serviceArea: "Baltimore, DC, and the greater DMV",

  // PLACEHOLDER contact info — replace with real values
  contact: {
    email: "hello@miasnaplounge.com",
    phone: "(410) 555-0100",
    instagram: "miasnaplounge",
    facebook: "miasnaplounge",
    tiktok: "miasnaplounge",
  },

  founder: {
    name: "Tenille Johnson",
    title: "Founder & Creative Director",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book", href: "/booking" },
    { label: "Past Events", href: "/past-events" },
    { label: "Community", href: "/community" },
  ],
} as const;

export type SiteConfig = typeof site;
