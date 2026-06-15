"use client";

import { motion } from "framer-motion";
import styles from "../styles/testimonialB.module.css";

// --- FRAMER MOTION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const testimonials = [
  {
    id: 1,
    quote:
      "The ERP system they built transformed our supply chain operations. The attention to detail and industrial-grade reliability exceeded all our expectations.",
    name: "Marcus Vance",
    role: "Chief Operations Officer",
    company: "Apex Logistics",
    initials: "MV",
  },
  {
    id: 2,
    quote:
      "Our new mobile app has seen a 40% increase in user engagement since launch. The team's expertise in UI/UX and cross-platform development is truly world-class.",
    name: "Sarah Jenkins",
    role: "Product Director",
    company: "Nova Retail Group",
    initials: "SJ",
  },
  {
    id: 3,
    quote:
      "Implementing their custom CRM streamlined our entire sales pipeline. The integration was seamless, and their ongoing support has been absolutely phenomenal.",
    name: "David Chen",
    role: "VP of Sales",
    company: "Titan Enterprises",
    initials: "DC",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        {/* Header Section */}
        <motion.div
          className={styles.header}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className={styles.overline}>CLIENT FEEDBACK</span>
          <h2 className={styles.sectionTitle}>Trusted by Industry Leaders</h2>
          <p className={styles.sectionDescription}>
            We engineer digital solutions that withstand the rigorous demands of
            modern enterprise operations. Dont just take our word for it.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((item) => (
            <div className="col" key={item.id}>
              <motion.article
                className={styles.testimonialCard}
                variants={cardVariant}
              >
                {/* Decorative Top Accent Line */}
                <div className={styles.cardAccent} />

                {/* Quote Icon */}
                <div className={styles.quoteIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <blockquote className={styles.quoteText}>
                  "{item.quote}"
                </blockquote>

                {/* Author Info */}
                <div className={styles.authorSection}>
                  <div className={styles.avatar}>{item.initials}</div>
                  <div className={styles.authorDetails}>
                    <h4 className={styles.authorName}>{item.name}</h4>
                    <p className={styles.authorRole}>
                      {item.role} <span className={styles.divider}>•</span>{" "}
                      {item.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
