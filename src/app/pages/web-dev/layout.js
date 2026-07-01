import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata({
  title: "Web Development Services in Kenya",
  description:
    "Nexus Africa provides responsive web design, custom web development, CMS integration, ecommerce, analytics, and website redesign services for Kenyan businesses.",
  path: "/pages/web-dev",
  image: "/nexus-webdev-a.jpeg",
});

export default function WebDevelopmentLayout({ children }) {
  return children;
}
