"use client";

import { motion } from "framer-motion";
import styles from "../styles/process.module.css";

const steps = [
  {
    number: "01",
    title: "Requirements Gathering",
    desc: "We gather client needs, goals, and specifications to define project scope and objectives accurately for development clarity.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Planning",
    desc: "Create comprehensive architecture and UI/UX designs, ensuring functionality aligns with client expectations and project goals.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development & Testing",
    desc: "Code implementation with rigorous testing to identify and rectify bugs, ensuring software functionality and reliability.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deployment & Maintenance",
    desc: "Rollout software into production, followed by ongoing support, updates, and enhancements to maintain peak performance.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OurProcess() {
  return (
    <section className={styles.processSection}>
      {/* Decorative background blobs */}
      <div className={styles.blobTopRight} aria-hidden="true" />
      <div className={styles.blobBottomLeft} aria-hidden="true" />

      <div className="container position-relative">
        {/* HEADER — split layout */}
        <motion.div
          className={`row align-items-end ${styles.headerRow}`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="col-lg-6">
            <span className={styles.overline}>Our Process</span>
            <h2 className={styles.title}>How We Deliver Excellence</h2>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className={styles.subtitle}>
              A proven four-step methodology that combines innovation,
              expertise, and precision to transform your ideas into world-class
              digital products.
            </p>
          </div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* STEPS */}
        <motion.div
          className="row g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map((step, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <motion.article
                className={styles.stepCard}
                variants={cardVariant}
              >
                {/* Top Row: number + connector dot */}
                <div className={styles.stepMeta}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  {index < steps.length - 1 && (
                    <span className={styles.connector} aria-hidden="true" />
                  )}
                </div>

                {/* Icon */}
                <div className={styles.iconWrap} aria-hidden="true">
                  {step.icon}
                </div>

                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>

                {/* Bottom accent bar */}
                <div className={styles.cardAccent} />
              </motion.article>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
