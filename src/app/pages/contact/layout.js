import { createPageMetadata } from "@/app/seo";

export const metadata = createPageMetadata({
  title: "Contact Nexus Africa",
  description:
    "Contact Nexus Africa in Nairobi, Kenya to discuss web development, mobile app development, custom software, and digital marketing projects.",
  path: "/pages/contact",
  image: "/nexus-about-A.jpeg",
});

export default function ContactLayout({ children }) {
  return children;
}
