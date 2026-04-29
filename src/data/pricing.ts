// The MIA Collective / Mia Snap Lounge pricing.
// All prices include setup + breakdown within the listed duration.

export interface Package {
  name: string;
  tagline: string;
  price: number;
  duration: string;
  guests: string;
  popular?: boolean;
  features: string[];
}

export const packages: Package[] = [
  {
    name: "The Soirée",
    tagline: "Perfect for intimate celebrations",
    price: 325,
    duration: "3 hours · setup & breakdown included",
    guests: "50–60 guests",
    features: [
      "Choice of basic colored backdrop",
      "Up to 100 prints",
      "Unlimited digital gallery",
      "On-site attendant included",
      "Custom photo overlay",
    ],
  },
  {
    name: "The Marquee",
    tagline: "Our most-loved package",
    price: 375,
    duration: "~3.5 hours · setup & breakdown included",
    guests: "60–100 guests",
    popular: true,
    features: [
      "Customized backdrop matched to your theme & colors",
      "Up to 120 prints",
      "Unlimited digital gallery",
      "On-site attendant included",
      "Branding & customization options",
    ],
  },
  {
    name: "The Signature",
    tagline: "Our luxury, fully-curated experience",
    price: 475,
    duration: "4 hours · setup & breakdown included",
    guests: "100+ guests",
    features: [
      "Fully customized premium backdrop",
      "Unlimited prints",
      "Unlimited digital gallery",
      "On-site attendant included",
      "Luxury branding & elevated design elements",
      "Floral accents woven into your backdrop",
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
      "Decor and table settings for intimate gatherings under 100 guests.",
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
