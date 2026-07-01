import InfoGrid from "../../components/info-grid";
import CardC from "../../components/cardB";
import ContactMap from "../../components/contactMap";
import Carousel from "../../components/carousel";
export default function WebDevelopmentPage() {
  const webDevelopmentServices = [
    {
      icon: "bi bi-display",
      title: "Responsive Web Design",
      description:
        "Our web design experts ensure that your website looks and functions perfectly on all devices – from smartphones to desktops. We create responsive designs that adapt to different screen sizes, delivering an optimal user experience.",
      href: "/services/responsive-design",
    },
    {
      icon: "bi bi-code-slash",
      title: "Custom Web Development",
      description:
        "We build websites from the ground up, tailored to your specific requirements. Our custom web development solutions are designed to enhance your brand, functionality, and user engagement.",
      href: "/services/custom-development",
    },
    {
      icon: "bi bi-journal-text",
      title: "CMS Integration",
      description:
        "We integrate Content Management Systems (CMS) like WordPress, Joomla, and Drupal to empower you to update your website's content effortlessly. Take control of your site's updates with user-friendly CMS.",
      href: "/services/cms-integration",
    },
    {
      icon: "bi bi-brush",
      title: "Website Redesign",
      description:
        "If you have an existing website that needs a makeover, we can revamp and modernize it, improving both its aesthetics and functionality.",
      href: "/services/website-redesign",
    },
    {
      icon: "bi bi-pencil-square",
      title: "Blog Development",
      description:
        "Enhance your content marketing strategy with a blog section on your website. We can set up and optimize a blog for regular posts and improved SEO.",
      href: "/services/blog-development",
    },
    {
      icon: "bi bi-envelope-at",
      title: "E-mail Marketing Integration",
      description:
        "We can integrate e-mail marketing platforms, such as Mailchimp or SendinBlue, to help you build and maintain your email subscriber list.",
      href: "/services/email-marketing",
    },
    {
      icon: "bi bi-credit-card",
      title: "E-commerce Payment Solutions",
      description:
        "We offer integration with various payment gateways to facilitate secure online transactions for your e-commerce business.",
      href: "/services/ecommerce-payments",
    },
    {
      icon: "bi bi-calendar-check",
      title: "Online Booking and Appointment Systems",
      description:
        "If you run a service-based business, we can set up online booking and appointment scheduling systems to streamline your customer interactions.",
      href: "/services/booking-systems",
    },
    {
      icon: "bi bi-bar-chart",
      title: "Analytics and Reporting",
      description:
        "Implement advanced analytics tools to track website performance and provide you with detailed reports on visitor behavior and conversion rates.",
      href: "/services/analytics",
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

  const slides = [
    {
      id: "one",
      image: "/nexus-webdev-a.jpeg",
      alt: "Slide one",
      label: "Featured",
      title: "",
      description: "",
      ctaText: "Learn more",
      ctaHref: "/services",
    },

    // ...
  ];

  return (
    <main>
      <Carousel slides={slides} autoPlay showControls showIndicators />;
      <InfoGrid
        title="Comprehensive Web Development Services"
        description="From responsive design to advanced integrations, we provide end-to-end web development solutions that elevate your online presence and drive business growth."
        items={webDevelopmentServices}
      />
      {/* <CardC /> */}
      <InfoGrid
        title="Software Solutions"
        description="Explore our range of software solutions designed to streamline your business operations and enhance efficiency."
        items={softwareSolutions}
      />
      <ContactMap />
    </main>
  );
}
