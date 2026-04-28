// PLACEHOLDER pricing — Tenille should review and replace with real packages.
// All numbers are typical photo-booth-industry mid-market rates for Baltimore
// and are intended only as a starting point.

export interface Package {
  name: string;
  tagline: string;
  price: number;
  duration: string;
  popular?: boolean;
  features: string[];
}

export const packages: Package[] = [
  {
    name: "The Soirée",
    tagline: "Perfect for intimate celebrations",
    price: 695,
    duration: "2-hour experience",
    features: [
      "Professional booth & on-site attendant",
      "Curated prop selection",
      "Choice of one signature backdrop",
      "Unlimited photos & instant digital sharing",
      "Custom photo template",
      "Online gallery for all guests",
    ],
  },
  {
    name: "The Marquee",
    tagline: "Our most-loved package",
    price: 995,
    duration: "3-hour experience",
    popular: true,
    features: [
      "Everything in The Soirée",
      "Premium backdrop options (florals, sequins, black-tie)",
      "GIFs & boomerangs included",
      "On-site printed photo strips for every guest",
      "Custom event branding on prints",
      "Dedicated booking concierge",
    ],
  },
  {
    name: "The Couture",
    tagline: "Full-service luxury experience",
    price: 1495,
    duration: "4-hour experience",
    features: [
      "Everything in The Marquee",
      "Choice of two backdrops with mid-event swap",
      "Premium custom prop styling for your theme",
      "Branded scrapbook of guest prints",
      "Slow-motion video booth add-on",
      "Priority weekend scheduling",
    ],
  },
];

export const addOns = [
  { name: "Additional Hour", price: 175 },
  { name: "Custom Backdrop Design", price: 250 },
  { name: "Branded Photo Template", price: 75 },
  { name: "Travel Beyond 30mi", price: "Quoted" },
  { name: "Idle Time (paused booth)", price: 95 },
  { name: "USB of All Photos", price: 50 },
];
