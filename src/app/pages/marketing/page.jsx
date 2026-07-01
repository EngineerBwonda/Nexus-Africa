import InfoGrid from "../../components/info-grid";
import CardC from "../../components/cardB";
import ContactMap from "../../components/contactMap";
import Carousel from "../../components/carousel";

export default function DigitalMarketingPage() {
  const digitalMarketingServices = [
    {
      icon: "bi bi-search",
      title: "Search Engine Optimization (SEO)",
      description:
        "Enhance your website's visibility on search engines with tailored SEO strategies, keyword optimization, and on-page/off-page SEO techniques.",
      href: "/services/seo",
    },
    {
      icon: "bi bi-megaphone",
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Drive targeted traffic to your website through strategic PPC campaigns on platforms like Google Ads and social media channels, optimizing ad spend for maximum ROI.",
      href: "/services/ppc",
    },
    {
      icon: "bi bi-share",
      title: "Social Media Marketing (SMM)",
      description:
        "Engage and grow your audience on social media platforms such as Facebook, Instagram, Twitter, and LinkedIn with creative content, community management, and advertising campaigns.",
      href: "/services/smm",
    },
    {
      icon: "bi bi-file-earmark-text",
      title: "Content Marketing",
      description:
        "Create compelling and relevant content, including blog posts, articles, infographics, and videos, to attract, inform, and engage your target audience, boosting brand authority and organic traffic.",
      href: "/services/content-marketing",
    },
    {
      icon: "bi bi-envelope-paper",
      title: "Email Marketing",
      description:
        "Nurture leads and maintain customer relationships with personalized email campaigns, newsletters, and automated workflows that drive conversions and repeat business.",
      href: "/services/email-marketing",
    },
    {
      icon: "bi bi-bullseye",
      title: "Digital Advertising Campaigns",
      description:
        "Design and execute targeted digital advertising campaigns across various channels, including display ads, native advertising, and remarketing, to reach specific audience segments and achieve campaign objectives.",
      href: "/services/digital-advertising",
    },
    {
      icon: "bi bi-laptop",
      title: "Website Design and Development",
      description:
        "Develop responsive and user-friendly websites optimized for SEO and conversions, incorporating UX/UI design principles to enhance user experience and drive engagement.",
      href: "/services/web-design",
    },
    {
      icon: "bi bi-graph-up",
      title: "Analytics and Reporting",
      description:
        "Monitor campaign performance, track key metrics, and generate actionable insights with comprehensive analytics and reporting, enabling data-driven decision-making and continuous optimization.",
      href: "/services/analytics",
    },
    {
      icon: "bi bi-star",
      title: "Online Reputation Management (ORM)",
      description:
        "Manage and improve your brand's online reputation through proactive strategies, review management, crisis communication, and building positive brand sentiment across digital platforms.",
      href: "/services/reputation-management",
    },
  ];

  const softwareSolutions = [
    {
      icon: "bi bi-building",
      title: "ERP Software",
      description:
        "Our ERP software integrates essential business functions such as finance, inventory management, supply chain operations, and customer relationship management into a unified platform.",
      href: "/services/erp",
    },
    {
      icon: "bi bi-people",
      title: "Business Sales CRM",
      description:
        "Our CRM allows you to seamlessly capture, categorize, and manage leads, enabling you to nurture potential clients and convert them into valuable customers with a clear understanding of your leads.",
      href: "/services/crm",
    },
    {
      icon: "bi bi-hospital",
      title: "Hospital Management System",
      description:
        "Our HMS allows healthcare facilities to maintain detailed patient records, including medical history, treatment plans, and demographics for patients.",
      href: "/services/hms",
    },
    {
      icon: "bi bi-person-badge",
      title: "HR Management System",
      description:
        "Our Employee and HR Manager Software simplifies the process of managing employee data, from personal information to job history and performance evaluations. Centralized records ensure easy access to critical details.",
      href: "/services/hr",
    },
    {
      icon: "bi bi-phone",
      title: "Mobile App Development",
      description:
        "At Isoftke, we specialize in crafting bespoke mobile solutions tailored to elevate your business in today's digital landscape. With a focus on innovation, creativity, and technical expertise, we're here to turn your ideas into exceptional mobile experiences.",
      href: "/services/mobile",
    },
    {
      icon: "bi bi-cart3",
      title: "eCommerce Website",
      description:
        "In the dynamic world of online retail, a compelling and user-friendly ecommerce website is essential. Our team at Isoftke is dedicated to crafting websites that not only showcase products with flair but also streamline the shopping journey.",
      href: "/services/ecommerce",
    },
  ];

  const carouselSlides = [
    {
      id: 1,
      image: "/nexus-marketing-a.jpeg",
      alt: "Cultural event in Africa",
      title: "Empowering Communities",
      description: "Transforming lives through culture and innovation.",
    },
  ];

  return (
    <main>
      <Carousel slides={carouselSlides} autoPlay={true} interval={5000} />
      <InfoGrid
        title="Strategic Digital Marketing Services"
        description="From search engine optimization to reputation management, we deliver data-driven marketing strategies that amplify your brand, engage your audience, and drive measurable business growth."
        items={digitalMarketingServices}
      />
      <InfoGrid
        title="Software Solutions"
        description="Explore our range of software solutions designed to streamline your business operations and enhance efficiency."
        items={softwareSolutions}
      />

      <ContactMap />
    </main>
  );
}
