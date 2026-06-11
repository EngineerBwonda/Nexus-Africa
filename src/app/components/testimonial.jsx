"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/testimonial.module.css";

const testimonials = [
  {
    id: "01",
    quote:
      "Nexus Africa transformed our legacy system into a high-performance platform. Their technical precision and industrial-grade reliability are unmatched in the industry.",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Manufacturing",
    avatar: "/avatars/avatar1.jpg", // Replace with actual image or use initials fallback
  },
  {
    id: "02",
    quote:
      "The team delivered a robust, scalable solution under a tight deadline. Their structured approach to development gave us complete confidence in the final product.",
    name: "Sarah Jenkins",
    role: "Director of Operations",
    company: "Ironclad Logistics",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    id: "03",
    quote:
      "Exceptional attention to detail. They didn't just build software; they engineered a solution that seamlessly integrated with our existing heavy machinery workflows.",
    name: "David Chen",
    role: "VP of Engineering",
    company: "Titan Infrastructure",
    avatar: "/avatars/avatar3.jpg",
  },
];

// --- FRAMER MOTION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
          <h2 className={styles.title}>Trusted by Industry Leaders</h2>
          <p className={styles.subtitle}>
            We engineer digital solutions that withstand the rigorous demands of
            modern enterprise operations.
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
                {/* Decorative Corner Brackets */}
                <div className={styles.cornerBracketTopLeft} />
                <div className={styles.cornerBracketBottomRight} />

                <div className={styles.cardHeader}>
                  <div className={styles.quoteIcon}>❝</div>
                </div>

                <blockquote className={styles.quote}>{item.quote}</blockquote>

                <div className={styles.cardFooter}>
                  <div className={styles.avatarPlaceholder}>
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className={styles.clientInfo}>
                    <h4 className={styles.clientName}>{item.name}</h4>
                    <p className={styles.clientRole}>
                      {item.role} <span className={styles.divider}>|</span>{" "}
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
