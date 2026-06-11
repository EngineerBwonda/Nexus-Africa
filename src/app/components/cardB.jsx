"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/cardB.module.css";

// --- FRAMER MOTION ANIMATION VARIANTS ---

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delays each child animation slightly
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function NexusAfricaServices() {
  const services = [
    {
      title: "Web Design & Development",
      desc: "We build modern, responsive websites that prioritize usability, speed, and brand clarity for growth-minded businesses.",
    },
    {
      title: "Mobile App Development",
      desc: "Our team delivers polished cross-platform mobile apps with intuitive UX, strong performance, and seamless integration.",
    },
    {
      title: "Website Maintenance",
      desc: "We keep your digital presence secure and up to date with monitoring, backups, performance tuning, and content updates.",
    },
    {
      title: "Software Development",
      desc: "Custom software solutions built to solve real business challenges with scalable architecture and thoughtful design.",
    },
    {
      title: "Digital Marketing",
      desc: "From SEO to social campaigns, we create measurable marketing strategies that grow visibility and convert leads.",
    },
    {
      title: "eCommerce Web Design",
      desc: "Tailored online storefronts that deliver beautiful product experiences and higher conversion rates.",
    },
  ];

  const leftServices = services.slice(0, 3);
  const rightServices = services.slice(3, 6);

  return (
    <section id="services" className={styles.section}>
      <div className="container py-5">
        {/* 1. HEADER: Fades in and slides up */}
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the header is visible
        >
          <span className={styles.overline}>OUR SERVICES</span>
          <h2 className={styles.title}>
            Digital solutions for modern businesses
          </h2>
          <p className={styles.subtitle}>
            Nexus Africa delivers premium web, software, and marketing services
            with a polished blue theme and elegant user experience.
          </p>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className="row align-items-stretch g-4">
          {/* 2. LEFT COLUMN: Staggered slide-in from the left */}
          <motion.div
            className={`col-md-4 ${styles.sideColumn}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {leftServices.map((service, index) => (
              <motion.article
                key={index}
                className={`card ${styles.serviceCard}`}
                variants={slideInLeft}
              >
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <a href="#" className={styles.cardLink}>
                    Learn More →
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* 3. MIDDLE COLUMN: Scales in, then continuously floats */}
          <motion.div
            className="col-md-4 d-flex align-items-center justify-content-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Wrapper for the continuous floating animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/phonephoto.png"
                alt="Nexus Africa Digital Solutions"
                width={400}
                height={900}
                // Changed "fill" to "contain" so the phone image doesn't stretch/distort
                style={{
                  objectFit: "contain",
                  maxWidth: "100%",
                  height: "100%",
                }}
                priority
              />
            </motion.div>
          </motion.div>

          {/* 4. RIGHT COLUMN: Staggered slide-in from the right */}
          <motion.div
            className={`col-md-4 ${styles.sideColumn}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {rightServices.map((service, index) => (
              <motion.article
                key={index + 3}
                className={`card ${styles.serviceCard}`}
                variants={slideInRight}
              >
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <a href="#" className={styles.cardLink}>
                    Learn More →
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

//======================================================================================== "use client";

// import Image from "next/image";
// import styles from "../styles/cardB.module.css"; // Make sure this file exists with the CSS below

// export default function NexusAfricaServices() {
//   const services = [
//     {
//       title: "Web Design & Development",
//       desc: "We build modern, responsive websites that prioritize usability, speed, and brand clarity for growth-minded businesses.",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "Our team delivers polished cross-platform mobile apps with intuitive UX, strong performance, and seamless integration.",
//     },
//     {
//       title: "Website Maintenance",
//       desc: "We keep your digital presence secure and up to date with monitoring, backups, performance tuning, and content updates.",
//     },
//     {
//       title: "Software Development",
//       desc: "Custom software solutions built to solve real business challenges with scalable architecture and thoughtful design.",
//     },
//     {
//       title: "Digital Marketing",
//       desc: "From SEO to social campaigns, we create measurable marketing strategies that grow visibility and convert leads.",
//     },
//     {
//       title: "eCommerce Web Design",
//       desc: "Tailored online storefronts that deliver beautiful product experiences and higher conversion rates.",
//     },
//   ];

//   const leftServices = services.slice(0, 3);
//   const rightServices = services.slice(3, 6);

//   return (
//     <section id="services" className={styles.section}>
//       <div className="container py-5">
//         {/* Header Section */}
//         <div className={styles.header}>
//           <span className={styles.overline}>OUR SERVICES</span>
//           <h2 className={styles.title}>
//             Digital solutions for modern businesses
//           </h2>
//           <p className={styles.subtitle}>
//             Nexus Africa delivers premium web, software, and marketing services
//             with a polished blue theme and elegant user experience.
//           </p>
//         </div>

//         {/*
//           MAIN LAYOUT
//           align-items-stretch forces all 3 columns to be the exact same height
//         */}
//         <div className="row align-items-stretch g-4">
//           {/* Left Column */}
//           <div className={`col-md-4 ${styles.sideColumn}`}>
//             {leftServices.map((service, index) => (
//               <article key={index} className={`card ${styles.serviceCard}`}>
//                 <div className={`card-body ${styles.cardBody}`}>
//                   <h3 className={styles.cardTitle}>{service.title}</h3>
//                   <p className={styles.cardDesc}>{service.desc}</p>
//                   <a href="#" className={styles.cardLink}>
//                     Learn More →
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* //increase height of the image to match the height of the tallest column (the left or right cards) by setting height to 100% and objectFit to contain

//            */}

//           {/* Middle Column (Image dictates the height) */}
//           <div className="col-md-4 d-flex align-items-center justify-content-center">
//             <Image
//               src="/phonephoto.png"
//               alt="Nexus Africa Digital Solutions"
//               width={400}
//               height={900}
//               style={{ objectFit: "fill", maxWidth: "100%", height: "100%" }}
//               priority
//             />
//           </div>

//           {/* Right Column */}
//           <div className={`col-md-4 ${styles.sideColumn}`}>
//             {rightServices.map((service, index) => (
//               <article key={index + 3} className={`card ${styles.serviceCard}`}>
//                 <div className={`card-body ${styles.cardBody}`}>
//                   <h3 className={styles.cardTitle}>{service.title}</h3>
//                   <p className={styles.cardDesc}>{service.desc}</p>
//                   <a href="#" className={styles.cardLink}>
//                     Learn More →
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//======================================================================================================================================================= "use client";

// import Image from "next/image";
// import styles from "../styles/cardB.module.css"; // Make sure this file exists with the CSS below

// export default function NexusAfricaServices() {
//   const services = [
//     {
//       title: "Web Design & Development",
//       desc: "We build modern, responsive websites that prioritize usability, speed, and brand clarity for growth-minded businesses.",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "Our team delivers polished cross-platform mobile apps with intuitive UX, strong performance, and seamless integration.",
//     },
//     {
//       title: "Website Maintenance",
//       desc: "We keep your digital presence secure and up to date with monitoring, backups, performance tuning, and content updates.",
//     },
//     {
//       title: "Software Development",
//       desc: "Custom software solutions built to solve real business challenges with scalable architecture and thoughtful design.",
//     },
//     {
//       title: "Digital Marketing",
//       desc: "From SEO to social campaigns, we create measurable marketing strategies that grow visibility and convert leads.",
//     },
//     {
//       title: "eCommerce Web Design",
//       desc: "Tailored online storefronts that deliver beautiful product experiences and higher conversion rates.",
//     },
//   ];

//   // Split services: 3 for the left column, 3 for the right column
//   const leftServices = services.slice(0, 3);
//   const rightServices = services.slice(3, 6);

//   return (
//     <section id="services" className={styles.section}>
//       <div className="container py-5">
//         {/* Header Section */}
//         <div className={styles.header}>
//           <span className={styles.overline}>OUR SERVICES</span>
//           <h2 className={styles.title}>
//             Digital solutions for modern businesses
//           </h2>
//           <p className={styles.subtitle}>
//             Nexus Africa delivers premium web, software, and marketing services
//             with a polished blue theme and elegant user experience.
//           </p>
//         </div>

//         {/* Main Layout: Left Cards | Middle Image | Right Cards */}
//         <div className="row align-items-stretch g-4">
//           {/* Left Column: 3 Cards */}
//           <div className="col-md-4 d-flex flex-column gap-4">
//             {leftServices.map((service, index) => (
//               <article
//                 key={index}
//                 className={`card h-100 ${styles.serviceCard}`}
//               >
//                 <div className={`card-body ${styles.cardBody}`}>
//                   {/* <div className={styles.badge}>{index + 1}</div> */}
//                   <h3 className={styles.cardTitle}>{service.title}</h3>
//                   <p className={styles.cardDesc}>{service.desc}</p>
//                   <a href="#" className={styles.cardLink}>
//                     Learn More →
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Middle Column: Image */}
//           <div className="col-md-4 d-flex align-items-center justify-content-center">
//             <Image
//               src="/phonephoto.png"
//               alt="Nexus Africa Digital Solutions"
//               width={300}
//               height={500}
//               style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
//               priority
//             />
//           </div>

//           {/* Right Column: 3 Cards */}
//           <div className="col-md-4 d-flex flex-column gap-4">
//             {rightServices.map((service, index) => (
//               <article
//                 key={index + 3}
//                 className={`card h-100 ${styles.serviceCard}`}
//               >
//                 <div className={`card-body ${styles.cardBody}`}>
//                   {/* <div className={styles.badge}>{index + 4}</div> */}
//                   <h3 className={styles.cardTitle}>{service.title}</h3>
//                   <p className={styles.cardDesc}>{service.desc}</p>
//                   {/* <a href="#" className={styles.cardLink}>
//                     Learn More →
//                   </a> */}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// export default function ThreeColumnLayout() {
//   return (
//     <div className="container py-5">
//       {/* align-items-stretch ensures all columns match the height of the tallest column (the middle image) */}
//       <div className="row align-items-stretch g-4">
//         {/* Left Column: 3 Cards */}
//         <div className="col-md-4 d-flex flex-column gap-4">
//           <div className="card shadow-sm flex-grow-1 border-0">
//             <div className="card-body d-flex flex-column justify-content-center text-center h-100">
//               <h5 className="card-title fw-bold">Header A1</h5>
//               <p className="card-text text-muted mb-0">
//                 Descriptive text for the first card on the left side.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm flex-grow-1 border-0">
//             <div className="card-body d-flex flex-column justify-content-center text-center h-100">
//               <h5 className="card-title fw-bold">Header A2</h5>
//               <p className="card-text text-muted mb-0">
//                 Descriptive text for the second card on the left side.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm flex-grow-1 border-0">
//             <div className="card-body d-flex flex-column justify-content-center text-center h-100">
//               <h5 className="card-title fw-bold">Header A3</h5>
//               <p className="card-text text-muted mb-0">
//                 Descriptive text for the third card on the left side.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Middle Column: Image */}
//         <div className="col-md-4 d-flex align-items-center justify-content-center">
//           <Image
//             src="/phonephoto.png"
//             alt="Phone photo"
//             width={300}
//             height={500}
//             style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
//             priority
//           />
//         </div>

//         {/* Right Column: 3 Cards */}
//         <div className="col-md-4 d-flex flex-column gap-4">
//           <div className="card shadow-sm flex-grow-1 border-0">
//             <div className="card-body d-flex flex-column justify-content-center text-center h-100">
//               <h5 className="card-title fw-bold">Header B1</h5>
//               <p className="card-text text-muted mb-0">
//                 Descriptive text for the first card on the right side.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm flex-grow-1 border-0">
//             <div className="card-body d-flex flex-column justify-content-center text-center h-100">
//               <h5 className="card-title fw-bold">Header B2</h5>
//               <p className="card-text text-muted mb-0">
//                 Descriptive text for the second card on the right side.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm flex-grow-1 border-0">
//             <div className="card-body d-flex flex-column justify-content-center text-center h-100">
//               <h5 className="card-title fw-bold">Header B3</h5>
//               <p className="card-text text-muted mb-0">
//                 Descriptive text for the third card on the right side.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";

// export default function ThreeColumnLayout() {
//   return (
//     <div className="container py-5">
//       {/* Main Row: 3 Columns (Left Cards, Middle Image, Right Cards) */}
//       <div className="row align-items-center g-4">
//         {/* Left Column: 2 Cards */}
//         <div className="col-md-4 d-flex flex-column gap-4">
//           <div className="card shadow-sm h-180 border-0">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">Header A1</h5>
//               <p className="card-text text-muted">
//                 Descriptive text for the first card on the left side. Replace
//                 with your features.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm h-100 border-0">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">Header A2</h5>
//               <p className="card-text text-muted">
//                 Descriptive text for the second card on the left side. Replace
//                 with your features.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm h-100 border-0">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">Header B1</h5>
//               <p className="card-text text-muted">
//                 Descriptive text for the first card on the right side. Replace
//                 with your features.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Middle Column: Image */}
//         <div className="col-md-4 text-center">
//           <Image
//             src="/phonephoto.png"
//             alt="Phone photo"
//             width={300}
//             height={500}
//             style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
//             priority
//           />
//         </div>

//         {/* Right Column: 2 Cards */}
//         <div className="col-md-4 d-flex flex-column gap-4">
//           <div className="card shadow-sm h-100 border-0">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">Header B1</h5>
//               <p className="card-text text-muted">
//                 Descriptive text for the first card on the right side. Replace
//                 with your features.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm h-100 border-0">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">Header B1</h5>
//               <p className="card-text text-muted">
//                 Descriptive text for the first card on the right side. Replace
//                 with your features.
//               </p>
//             </div>
//           </div>

//           <div className="card shadow-sm h-100 border-0">
//             <div className="card-body text-center">
//               <h5 className="card-title fw-bold">Header B2</h5>
//               <p className="card-text text-muted">
//                 Descriptive text for the second card on the right side. Replace
//                 with your features.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";

// export default function ThreeColumnLayout() {
//   return (
//     <div className="container text-center">
//       {/* First Row: 3 Columns */}
//       <div className="row align-items-center mb-5 g-4">
//         {/* Column A */}
//         <div className="col-md-4">
//           <h2>Header A</h2>
//           <p>
//             This is descriptive text for Column A. You can replace this with
//             your actual content, features, or descriptions.
//           </p>
//         </div>

//         {/* Middle Column (Image) */}
//         <div className="col-md-4">
//           <Image
//             src="/phonephoto.png"
//             alt="Phone photo"
//             width={300}
//             height={500}
//             style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
//             priority
//           />
//         </div>

//         {/* Column B */}
//         <div className="col-md-4">
//           <h2>Header B</h2>
//           <p>
//             This is descriptive text for Column B. You can replace this with
//             your actual content, features, or descriptions.
//           </p>
//         </div>

//         {/* Column B */}
//         <div className="col-md-4">
//           <h2>Header B</h2>
//           <p>
//             This is descriptive text for Column B. You can replace this with
//             your actual content, features, or descriptions.
//           </p>
//         </div>

//         {/* Column B */}
//         <div className="col-md-4">
//           <h2>Header B</h2>
//           <p>
//             This is descriptive text for Column B. You can replace this with
//             your actual content, features, or descriptions.
//           </p>
//         </div>
//       </div>

{
  /* Second Row: 2 Columns (Under the first row) */
}
{
  /* <div className="row g-4">
        <div className="col-md-6">
          <h3>Sub-Column 1</h3>
          <p>
            This is the first column under the main section. It takes up half
            the width on medium screens and larger.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Sub-Column 2</h3>
          <p>
            This is the second column under the main section. It also takes up
            half the width, sitting right next to Sub-Column 1.
          </p>
        </div>
      </div> */
}
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";

// export default function ThreeColumnLayout() {
//   return (
//     <div className="container text-center">
//       {/* Added align-items-center to vertically center the text with the image */}
//       <div className="row align-items-center">
//         {/* Column A */}
//         <div className="col">
//           <h2>Header A</h2>
//           <p>
//             This is some descriptive text for Column A. You can replace this
//             with your actual content, features, or descriptions.
//           </p>
//         </div>

//         {/* Middle Column (Image) */}
//         <div className="col">
//           <Image
//             src="/phonephoto.png"
//             alt="Card image"
//             width={300}
//             height={500}
//             style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
//             priority
//           />
//         </div>

//         {/* Column B */}
//         <div className="col">
//           <h2>Header B</h2>
//           <p>
//             This is some descriptive text for Column B. You can replace this
//             with your actual content, features, or descriptions.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// export default function ThreeColumnLayout() {
//   return (
//     <div className="container text-center">
//       <div className="row">
//         <div className="col">ColumnA</div>
//         <div className="col">
//           <Image
//             src="/phonephoto.png"
//             alt="Card image"
//             width={300}
//             height={500}
//             style={{ objectFit: "fill" }}
//           />
//         </div>
//         <div className="col">ColumnB</div>
//       </div>
//     </div>
//   );
// }

// import styles from "../styles/cardB.module.css";

// export default function GridPage() {
//   const services = [
//     {
//       title: "Web Design & Development",
//       desc: "Crafting stunning websites with seamless user experiences.",
//       image: "/webpic.png",
//     },
//     {
//       title: "Software Solutions",
//       desc: "Custom software tailored to your business needs.",
//       image: "/webpic.png",
//     },
//     {
//       title: "Digital Marketing",
//       desc: "Boost your online presence with our expert marketing strategies.",
//       image: "/webpic.png",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "Creating intuitive mobile apps for iOS and Android.",
//       image: "/webpic.png",
//     },
//     {
//       title: "E-commerce Solutions",
//       desc: "Building powerful online stores that convert visitors into customers.",
//       image: "/webpic.png",
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Improving your search engine rankings to drive organic traffic.",
//       image: "/webpic.png",
//     },
//   ];

//   return (
//     <section id="services" className={styles.section}>
//       <div className="container py-5">
//         <div className={styles.header}>
//           <span className={styles.overline}>OUR SERVICES</span>
//           <h2 className={styles.title}>
//             Digital solutions for modern businesses
//           </h2>
//           <p className={styles.subtitle}>
//             Nexus Africa delivers premium web, software, and marketing services
//             with a polished blue theme and elegant user experience.
//           </p>
//         </div>

//         <div className="row g-4">
//           {services.map((service, index) => (
//             <div key={index} className="col-md-6 col-lg-4">
//               <div className={`card ${styles.card}`}>
//                 <Image
//                   src={service.image}
//                   className={styles.cardImage}
//                   alt={service.title}
//                   width={500}
//                   height={300}
//                   style={{ objectFit: "cover" }}
//                 />
//                 <div className={`card-body ${styles.cardBody}`}>
//                   {/* <span className={styles.badge}>{index + 1}</span> */}
//                   <h3 className={styles.cardTitle}>{service.title}</h3>
//                   <p className={styles.cardDesc}>{service.desc}</p>
//                   <a href="#" className={styles.cardLink}>
//                     Learn More →
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
