// data/config.js

// Production URL for canonical links, sitemap and social previews.
// Set NEXT_PUBLIC_SITE_URL (e.g. https://www.example.com) in your hosting env.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  url: siteUrl.replace(/\/$/, ""),
  seo: {
    title: "Adult Family Home in Federal Way, WA",
    description:
      "Compassionate, personalized adult family home care in Federal Way, WA. Two warm, safe homes offering 24/7 support, medication management, memory care, and home-cooked meals.",
    keywords: [
      "adult family home",
      "adult family home Federal Way",
      "AFH Federal Way WA",
      "senior care Federal Way",
      "assisted living alternative",
      "memory care Federal Way",
      "respite care",
      "elder care King County",
    ],
    image: "/og-image.jpg",
  },
  // Structured address data for search engines (JSON-LD)
  homes: [
    {
      slug: "home-1",
      name: "AAAPendo AFH - Home One",
      street: "32335 29th Avenue SW",
      city: "Federal Way",
      region: "WA",
      postalCode: "98023",
      image: "/home1.jpeg",
    },
    {
      slug: "home-2",
      name: "AAAPendo AFH - Home Two",
      street: "3232 SW 326th St",
      city: "Federal Way",
      region: "WA",
      postalCode: "98023",
      image: "/overview2.1.jpeg",
    },
  ],
  afh: {
    name: "AAAPendo AFH",
    tagline: "Providing compassionate, personalized care...",
    // logo: "/victory_afh.avif",
    address1: "32335 29th Avenue Sw, Federal Way, WA 98023, USA",
    address2: "3232 Sw 326th St Federal Way, WA 98023, USA",
  },
  provider: {
    owner: "Lucy Ngare",
    role: "Provider / Home Owner",
    phone: "+1 206 653 4698",
    email: "pendoadultfamilyhome@gmail.com",
  },
  theme: {
    primary: "#4F6F52",
    secondary: "#C89B3C",
    accent: "#166534",
  },
};
