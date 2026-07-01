import { siteConfig } from "./seo";

const routes = [
  "/",
  "/pages/about",
  "/pages/contact",
  "/pages/web-dev",
  "/pages/mobile-app",
  "/pages/marketing",
  "/privacy",
  "/terms",
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
