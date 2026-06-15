"use client";

import { motion } from "framer-motion";
import styles from "../styles/infoGrid.module.css";

// Default animation variants
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

/**
 * Reusable Info Grid Component
 * @param {string} title - The main header (left side)
 * @param {string} description - The explanation text (right side)
 * @param {Array} items - Array of objects { title, description, icon? }
 */
export default function InfoGrid({ title, description, items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.infoSection}>
      <div className="container">
        {/* Top Row: Header (Left) & Explanation (Right) */}
        <motion.div
          className="row align-items-center g-4 mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="col-lg-5">
            <h2 className={styles.sectionTitle}>{title}</h2>
          </div>
          <div className="col-lg-7">
            <p className={styles.sectionDescription}>{description}</p>
          </div>
        </motion.div>

        {/* Bottom Row: 3-Column Card Grid */}
        <motion.div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item, index) => (
            <div className="col" key={index}>
              <motion.article
                className={styles.infoCard}
                variants={cardVariant}
              >
                {/* Optional Icon */}
                {item.icon && (
                  <div className={styles.cardIcon}>
                    <i className={item.icon}></i>
                  </div>
                )}

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </motion.article>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
