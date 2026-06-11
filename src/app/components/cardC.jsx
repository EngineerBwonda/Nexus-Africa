"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/cardC.module.css";

// --- FRAMER MOTION ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }, // Cards animate in one by one
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const services = [
  {
    title: "Web Design & Development",
    description:
      "We build modern, responsive websites that prioritize usability, speed, and brand clarity for growth-minded businesses.",
    imageSrc: "/webpic.png",
    imageAlt: "Web design workspace",
    href: "/services/web-design",
  },
  {
    title: "Mobile App Development",
    description:
      "We deliver polished cross-platform mobile apps with intuitive UX, strong performance, and seamless integration.",
    imageSrc: "/webpic.png",
    imageAlt: "Mobile app on a phone",
    href: "/services/mobile-apps",
  },
  {
    title: "Website Maintenance",
    description:
      "We keep your digital presence secure and up to date with monitoring, backups, performance tuning, and content updates.",
    imageSrc: "/webpic.png",
    imageAlt: "Server room and data cables",
    href: "/services/maintenance",
  },
  {
    title: "Digital Marketing",
    description:
      "From SEO to social campaigns, we create measurable marketing strategies that grow visibility and convert leads.",
    imageSrc: "/webpic.png",
    imageAlt: "Marketing analytics on a laptop",
    href: "/services/marketing",
  },
];

export default function CardGrid() {
  return (
    <section className={styles.gridSection} aria-label="Services">
      <div className="container">
        {/* 1. HEADER: Fades in and slides up */}
        <motion.div
          className={styles.gridHeader}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className={styles.gridTitle}>Our Premium Services</h2>
          <p className={styles.gridSubtitle}>
            Nexus Africa delivers premium web, software, and marketing services
            with a polished blue theme and elegant user experience.
          </p>
        </motion.div>

        {/* 2. GRID: Staggered animation for the cards */}
        <motion.div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <div className="col" key={service.title}>
              <motion.article
                className={styles.card}
                aria-label={service.title}
                variants={cardVariant}
              >
                <div className={styles.cardMediaWrap}>
                  {/* Pulsing glowing badge */}
                  {/* <span className={styles.badgeGlow} aria-hidden="true" /> */}

                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={styles.cardImage}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{service.title}</h5>
                  <p className={styles.cardDesc}>{service.description}</p>

                  {/* Interactive "Learn More" link */}
                  {/* <Link href={service.href} className={styles.cardFooterLink}>
                    Learn more <span aria-hidden="true">→</span>
                  </Link> */}
                </div>
              </motion.article>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import styles from "../styles/cardC.module.css";

// const services = [
//   {
//     title: "Web Design & Development",
//     description:
//       "We build modern, responsive websites that prioritize usability, speed, and brand clarity.",
//     imageSrc: "/webpic.png",
//     imageAlt: "Web design workspace",
//     href: "/programme",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "We deliver polished cross-platform mobile apps with intuitive UX and strong performance.",
//     imageSrc: "/webpic.png",
//     imageAlt: "Mobile app on a phone",
//     href: "/programme",
//   },
//   {
//     title: "Website Maintenance",
//     description:
//       "We keep your digital presence secure and up to date with monitoring, backups, and improvements.",
//     imageSrc: "/webpic.png",
//     imageAlt: "Server room and data cables",
//     href: "/programme",
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "From SEO to social campaigns, we create measurable strategies that grow visibility and convert leads.",
//     imageSrc: "/webpic.png",
//     imageAlt: "Marketing analytics on a laptop",
//     href: "/programme",
//   },
// ];

// export default function CardGrid() {
//   return (
//     <section className={styles.gridSection} aria-label="Services">
//       <div className="container">
//         <h2 className={styles.gridTitle}>Our Services</h2>{" "}
//         <p className={styles.gridSubtitle}>
//           Nexus Africa delivers premium web, software, and marketing services
//           with a polished blue theme and elegant user experience.{" "}
//         </p>
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
//           {services.map((service) => (
//             <div className="col" key={service.title}>
//               <article className={styles.card} aria-label={service.title}>
//                 <div className={styles.cardMediaWrap}>
//                   <span className={styles.badgeGlow} aria-hidden="true" />

//                   <Image
//                     src={service.imageSrc}
//                     alt={service.imageAlt}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                     style={{ objectFit: "cover" }}
//                     priority={false}
//                   />
//                 </div>

//                 <div className={styles.cardBody}>
//                   <h5 className={styles.cardTitle}>{service.title}</h5>
//                   <p className={styles.cardDesc}>{service.description}</p>

//                   {/* <Link href={service.href} className={styles.cardFooterLink}>
//                     Learn more <span aria-hidden="true">→</span>
//                   </Link> */}
//                 </div>
//               </article>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
