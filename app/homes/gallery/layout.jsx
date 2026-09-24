import { pageMetadata } from "../../lib/seo";

// The gallery page is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "Photo Gallery",
  description:
    "Photos of AAAPendo AFH's adult family homes in Federal Way, WA: bedrooms, accessible bathrooms, living and dining areas, and outdoor spaces.",
});

export default function GalleryLayout({ children }) {
  return children;
}
