import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata({
  title: "Digital Marketing Services in Kenya",
  description:
    "Grow your brand with Nexus Africa digital marketing services, including SEO, PPC, social media marketing, content marketing, email campaigns, and analytics.",
  path: "/pages/marketing",
  image: "/nexus-marketing-a.jpeg",
});

export default function MarketingLayout({ children }) {
  return children;
}
