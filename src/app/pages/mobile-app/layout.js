import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata({
  title: "Mobile App Development Services",
  description:
    "Build secure, scalable, cross-platform mobile apps with Nexus Africa, from UI/UX design and backend development to testing and launch support.",
  path: "/pages/mobile-app",
  image: "/nexus-mobile.jpeg",
});

export default function MobileAppLayout({ children }) {
  return children;
}
