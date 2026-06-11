// "use client";

// import { useEffect } from "react";
// import styles from "./gridpage.module.css";
// import Image from "next/image";

// export default function NexusAfrica() {
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   const services = [
//     {
//       title: "Web Design & Development",
//       desc: "We build modern, responsive websites that prioritize usability, speed, and brand clarity for growth-minded businesses.",
//       image: "/webpic.png",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "Our team delivers polished cross-platform mobile apps with intuitive UX, strong performance, and seamless integration.",
//       image: "/webpic.png",
//     },
//     {
//       title: "Website Maintenance",
//       desc: "We keep your digital presence secure and up to date with monitoring, backups, performance tuning, and content updates.",
//       image: "/webpic.png",
//     },
//     {
//       title: "Software Development",
//       desc: "Custom software solutions built to solve real business challenges with scalable architecture and thoughtful design.",
//       image: "/webpic.png",
//     },
//     {
//       title: "Digital Marketing",
//       desc: "From SEO to social campaigns, we create measurable marketing strategies that grow visibility and convert leads.",
//       image: "/webpic.png",
//     },
//     {
//       title: "eCommerce Web Design",
//       desc: "Tailored online storefronts that deliver beautiful product experiences and higher conversion rates.",
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
//             <div className="col-lg-4 col-md-6" key={service.title}>
//               <article className={`card h-100 ${styles.card}`}>
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
//               </article>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";
import styles from "./gridpage.module.css";

export default function NexusAfrica() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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

  return (
    <section id="services" className={styles.section}>
      <div className="container py-5">
        <div className={styles.header}>
          <span className={styles.overline}>OUR SERVICES</span>
          <h2 className={styles.title}>
            Digital solutions for modern businesses
          </h2>
          <p className={styles.subtitle}>
            Nexus Africa delivers premium web, software, and marketing services
            with a polished blue theme and elegant user experience.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <article className={`card h-100 ${styles.card}`}>
                <div className={`card-body ${styles.cardBody}`}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                  <a href="#" className={styles.cardLink}>
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
