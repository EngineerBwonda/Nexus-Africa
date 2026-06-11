"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/techstack.module.css";

// Array of technologies - Replace src with your actual logo paths
const technologies = [
  { name: "React", src: "/reactjs.png", alt: "React" },
  { name: "Next.js", src: "/nextjs logo.png", alt: "Next.js" },
  { name: "TypeScript", src: "/typescript.png", alt: "TypeScript" },
  { name: "Node.js", src: "/niode.png", alt: "Node.js" },
  { name: "Python", src: "/python.png", alt: "Python" },

  { name: "Springboot", src: "/springboot.png", alt: "PostgreSQL" },
  { name: "javascript", src: "/javascript.png", alt: "javascript" },
  { name: "supabase", src: "/supabase.png", alt: "Supabase" },
  { name: "Django", src: "/django.png", alt: "Django" },
  { name: "MongoDB", src: "/mongodb.png", alt: "MongoDB" },
  { name: "AWS", src: "/aws.png", alt: "Amazon Web Services" },

  { name: "Docker", src: "/docker.jpeg", alt: "Docker" },
  { name: "Mpesa", src: "/mpesa.png", alt: "Mpesa" },
];

// Duplicate the array to create seamless infinite scroll
const duplicatedTechs = [...technologies, ...technologies, ...technologies];

export default function TechStack() {
  return (
    <section className={styles.techSection}>
      <div className="container">
        {/* Header Section */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.overline}>TECHNOLOGIES</span>
          <h2 className={styles.title}>Technologies We Use</h2>
          <p className={styles.subtitle}>
            We leverage cutting-edge tools and frameworks to build scalable,
            high-performance solutions that drive results.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className={styles.marqueeWrapper}>
          {/* Top Row - Moving Left */}
          <div className={styles.marqueeRow}>
            <motion.div
              className={styles.marqueeTrack}
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {duplicatedTechs.map((tech, index) => (
                <div key={`top-${index}`} className={styles.techItem}>
                  <div className={styles.techLogo}>
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={80}
                      height={80}
                      className={styles.logoImage}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Moving Right (Reverse Direction) */}
          <div className={styles.marqueeRow}>
            <motion.div
              className={`${styles.marqueeTrack} ${styles.reverse}`}
              animate={{ x: ["-33.333%", "0%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {duplicatedTechs.map((tech, index) => (
                <div key={`bottom-${index}`} className={styles.techItem}>
                  <div className={styles.techLogo}>
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={80}
                      height={80}
                      className={styles.logoImage}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Optional: Static Grid for Mobile (Better UX on small screens) */}
        <div className={styles.mobileGrid}>
          {technologies.map((tech, index) => (
            <motion.div
              key={`mobile-${index}`}
              className={styles.mobileTechItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <div className={styles.techLogo}>
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={60}
                  height={60}
                  className={styles.logoImage}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className={styles.techName}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
