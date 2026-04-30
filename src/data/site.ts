// Centralized site config — edit this file to update brand/contact info site-wide.

export const site = {
  brand: "Mia Snap Lounge",
  parentBrand: "The MIA Collective",
  tagline: "Modern Photo Booth Experiences",
  motto: "Every Story Matters",
  city: "Baltimore, Maryland",
  serviceArea: "Baltimore and within 50 miles",
  inceptionDate: "March 12, 2026",

  contact: {
    email: "themiacollectivellc@gmail.com",
    phone: "(443) 806-9947",
    instagram: "themiacollective",
    facebookPage: "The MIA Collective LLC",
    facebookUrl:
      "https://www.facebook.com/profile.php?q=The+MIA+Collective+LLC",
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
