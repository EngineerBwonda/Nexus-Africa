// "use client";

// import React from "react";
// import styles from "./about.module.css";

// export default function MobileApp(){

// }

import React from "react";
import InfoGrid from "../../components/info-grid";
import Process from "../../components/process";
import Testimonials from "../../components/testimonialB";
import ContactMap from "../../components/contactMap";
import Carousel from "../../components/carousel";

export default function SomePage() {
  // Data for the first section
  const featuresData = [
    {
      icon: "bi bi-shield-check",
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and rigorous security protocols to keep your data safe.",
    },
    {
      icon: "bi bi-speedometer2",
      title: "High Performance",
      description:
        "Optimized architectures ensuring lightning-fast load times and seamless scalability.",
    },
    {
      icon: "bi bi-headset",
      title: "24/7 Support",
      description:
        "Dedicated technical teams ready to assist you whenever you need it, anywhere in the world.",
    },
  ];

  const appDevelopmentFeatures = [
    {
      icon: "bi bi-palette",
      title: "UI/UX Design",
      description:
        "Create intuitive and visually appealing user interfaces that enhance user experience (UX) and usability.",
    },
    {
      icon: "bi bi-phone-flip",
      title: "Cross-Platform Compatibility",
      description:
        "Develop apps that work seamlessly across iOS, Android, and other major platforms for wider audience reach.",
    },
    {
      icon: "bi bi-apple", // You can also use bi-android2 for variety
      title: "Native App Development",
      description:
        "Build native apps tailored specifically for iOS or Android platforms to leverage platform-specific features and performance.",
    },
    {
      icon: "bi bi-server",
      title: "Backend Development",
      description:
        "Develop robust backend systems, APIs, and databases that support app functionality and ensure smooth data handling.",
    },
    {
      icon: "bi bi-shield-lock",
      title: "Security Features",
      description:
        "Implement strong encryption, secure authentication, and data protection measures to safeguard user information and transactions.",
    },
    {
      icon: "bi bi-bell-fill",
      title: "Push Notifications",
      description:
        "Integrate push notification services to engage users with timely updates, alerts, and personalized messages.",
    },
    {
      icon: "bi bi-puzzle",
      title: "Integration Capabilities",
      description:
        "Enable seamless integration with third-party services, APIs, and enterprise systems to extend app functionality and enhance user experience.",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "Scalability & Performance",
      description:
        "Build scalable architectures and optimize app performance to handle a growing user base and ensure fast response times.",
    },
    {
      icon: "bi bi-check2-all",
      title: "Testing & Quality Assurance",
      description:
        "Conduct rigorous testing across devices, platforms, and use cases to identify and fix bugs, ensuring app reliability and user satisfaction.",
    },
  ];

  //===============================================================================================================================

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

  // Data for a completely different section on the same page
  const benefitsData = [
    {
      title: "Cost Efficiency",
      description:
        "Reduce operational overhead with our streamlined, automated digital workflows.",
    },
    {
      title: "Future-Proof Tech",
      description:
        "Built on modern, maintainable stacks that adapt to tomorrow's technological shifts.",
    },
    {
      title: "Proven ROI",
      description:
        "Strategies designed not just to look good, but to drive measurable business growth.",
    },
  ];

  const carouselSlides = [
    {
      id: 1,
      image: "/nexus-mobile.jpeg",
      alt: "Cultural event in Africa",
      title: "",
      description: "",
    },
  ];

  return (
    <main>
      <Carousel slides={carouselSlides} autoPlay={true} interval={5000} />
      {/* Usage 1: With Icons */}
      {/* <InfoGrid
        title="Features of our mobile apps?"
        description="We combine deep industry expertise with cutting-edge technology to deliver solutions that give you a competitive edge."
        items={featuresData}
      /> */}

      {/* Usage 2: Without Icons (The component handles it gracefully) */}
      <InfoGrid
        title="App Development Features"
        description="Our comprehensive approach to mobile app development ensures your product stands out in the market."
        items={appDevelopmentFeatures}
      />

      <Process />

      <InfoGrid
        title="Tailored Software Solutions"
        description="We build powerful, scalable, and intuitive software systems designed to streamline your operations and drive measurable business growth."
        items={softwareSolutions}
      />

      <Testimonials />
      <ContactMap />
    </main>
  );
}
