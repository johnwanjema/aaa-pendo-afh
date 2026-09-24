import { siteConfig } from "./lib/config";

export default function sitemap() {
  const routes = [
    { path: "", priority: 1 },
    { path: "/homes", priority: 0.9 },
    { path: "/homes/home-1", priority: 0.8 },
    { path: "/homes/home-2", priority: 0.8 },
    { path: "/homes/gallery?home=1", priority: 0.6 },
    { path: "/homes/gallery?home=2", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
