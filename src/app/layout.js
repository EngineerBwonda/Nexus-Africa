import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/navbar";
import NavbarB from "./components/navbarB";
import Footer from "./components/footer";
import { siteConfig } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nexus Africa | Web, Software & Digital Marketing Solutions",
    template: "%s | Nexus Africa",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Nexus Africa",
    "web development Kenya",
    "mobile app development Nairobi",
    "custom software development",
    "digital marketing agency Kenya",
    "software solutions Africa",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexus Africa | Web, Software & Digital Marketing Solutions",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Nexus Africa digital solutions",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Africa | Web, Software & Digital Marketing Solutions",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NavbarB />
        {children}
        <Footer />
      </body>
    </html>
  );
}
