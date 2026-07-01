export const siteConfig = {
  name: "Nexus Africa",
  url: "https://nexusafrica.com",
  description:
    "Nexus Africa builds modern websites, mobile apps, custom software, and digital marketing solutions for growth-focused businesses in Kenya and across Africa.",
  ogImage: "/nexus-web-design.jpeg",
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
}) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} digital solutions`,
        },
      ],
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
