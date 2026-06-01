// The MIA Collective / Mia Snap Lounge pricing.
// All prices include setup + breakdown within the listed duration.

export interface Package {
  name: string;
  tagline: string;
  price: number;
  /** When true, prices are shown as "Starting at $X". */
  startingAt?: boolean;
  duration: string;
  guests?: string;
  popular?: boolean;
  features: string[];
}

export const packages: Package[] = [
  {
    name: "The Soirée",
    tagline: "Signature Experience — perfect for intimate celebrations",
    price: 275,
    duration: "2 hours · setup & breakdown included",
    guests: "Up to ~60 guests",
    features: [
      "Unlimited digital photos",
      "Up to 100 printed photos",
      "Custom themed photo frame design",
      "Choice of black or white MIA Collective signature backdrop",
      "Dedicated photo booth attendant",
    ],
  },
  {
    name: "The Marquee",
    tagline: "Luxe Experience — our most-loved package",
    price: 350,
    duration: "3 hours · setup & breakdown included",
    guests: "Up to ~100 guests",
    popular: true,
    features: [
      "Everything in The Soirée",
      "Up to 150 printed photos",
      "One 5-foot balloon or floral tower in your event colors",
      "Enhanced event styling and presentation",
    ],
  },
  {
    name: "The Signature",
    tagline: "An elevated celebration experience",
    price: 475,
    startingAt: true,
    duration: "4 hours · setup & breakdown included",
    guests: "100+ guests",
    features: [
      "Everything in The Marquee",
      "Custom backdrop of your choice",
      "Floral or balloon installation up to 6′ tall, or up to 8′ swag",
      "Circle arch — starts at 4-foot coverage, full arch coverage available",
      "Choice of up to two arch rentals (three sizes available, or one custom 7.5′ circle arch)",
      "Personalized event styling matched to your theme",
      "Signature MIA Collective thank-you gift",
    ],
  },
];

// Booth-only add-ons — quick line items.
export interface AddOn {
  name: string;
  price: number | string;
}

export const addOns: AddOn[] = [
  { name: "Event Branding", price: "$200+" },
  { name: "Additional Hour", price: 75 },
  { name: "Custom Photo Backdrop", price: 175 },
  { name: "Portable Power", price: 20 },
  { name: "Travel Beyond 50 Miles", price: "Quoted" },
  { name: "Digital-Only Access", price: "Available" },
];

// Custom services beyond the photo booth — full-event design offerings.
export interface CustomService {
  name: string;
  description: string;
}

export const customServices: CustomService[] = [
  {
    name: "Luxury Tablescapes",
    description:
      "Curated table settings with linens, florals, and statement centerpieces.",
  },
  {
    name: "Custom Backdrops",
    description:
      "Original backdrop designs built to your event vision and color story.",
  },
  {
    name: "Red Carpet Service",
    description:
      "Roll out the moment your guests arrive — full red carpet experience.",
  },
  {
    name: "Themed Props",
    description:
      "Curated prop styling matched to your theme — never tacky, always polished.",
  },
  {
    name: "Hotel Room Décor",
    description:
      "Bridal suite, birthday surprise, or anniversary stay — beautifully styled.",
  },
  {
    name: "Micro Party Styling",
    description:
      "Decor and table settings for intimate gatherings under 100 guests — beautifully curated, without the stress.",
  },
  {
    name: "Dessert Vendor",
    description:
      "Add a curated dessert table from one of our trusted partner vendors.",
  },
];

export const logistics = {
  minimumBooking: "2 hours",
  travelIncluded: "Up to 50 miles",
  setupSpace: "8′ × 8′ minimum + standard outlet",
  deposit: "$100 minimum to secure your date",
  paymentMethods: [
    "Credit Card",
    "Zelle",
    "Cash App",
    "Venmo",
    "Affirm",
    "Klarna / Afterpay",
  ],
};
