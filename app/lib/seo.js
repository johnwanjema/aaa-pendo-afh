import { siteConfig } from "./config";

// Builds a page's full metadata. Next.js replaces (not merges) openGraph and
// twitter from the layout when a page sets them, so each page gets the full set.
export function pageMetadata({ title, description, path, image = siteConfig.seo.image }) {
  const fullTitle = title ? `${title} | ${siteConfig.afh.name}` : `${siteConfig.afh.name} | ${siteConfig.seo.title}`;
  const desc = description || siteConfig.seo.description;

  return {
    title: title || { absolute: fullTitle },
    description: desc,
    // No path = no canonical, e.g. the gallery, where ?home=1 and ?home=2 differ
    ...(path && { alternates: { canonical: path } }),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.afh.name,
      ...(path && { url: path }),
      title: fullTitle,
      description: desc,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.afh.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}

// schema.org data describing the business and both home locations
export function localBusinessJsonLd() {
  const { url, afh, provider, homes, seo } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@graph": homes.map((home) => ({
      "@type": "LocalBusiness",
      "@id": `${url}/homes/${home.slug}#business`,
      name: home.name,
      description: seo.description,
      url: `${url}/homes/${home.slug}`,
      image: `${url}${home.image}`,
      telephone: provider.phone.replace(/\s/g, ""),
      email: provider.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: home.street,
        addressLocality: home.city,
        addressRegion: home.region,
        postalCode: home.postalCode,
        addressCountry: "US",
      },
      areaServed: { "@type": "City", name: "Federal Way, WA" },
      parentOrganization: { "@type": "Organization", name: afh.name, url },
    })),
  };
}
