import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata({
  title: "About Nexus Africa",
  description:
    "Learn about Nexus Africa, a Kenya-based digital solutions company building websites, mobile apps, custom software, and marketing systems for modern businesses.",
  path: "/pages/about",
  image: "/nexus-about.jpeg",
});

export default function AboutLayout({ children }) {
  return children;
}
