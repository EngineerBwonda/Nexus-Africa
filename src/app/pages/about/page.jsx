"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import Hero from "@/app/components/hero";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const highlights = [
  {
    title: "Innovation-Driven",
    desc: "We don't just follow trends; we set them. Our team leverages cutting-edge technology to build future-proof solutions.",
    image: "/about-innovation.jpg", // Replace with your image
  },
  {
    title: "Client-Centric Approach",
    desc: "Your goals are our blueprint. We maintain transparent communication and tailor every strategy to your unique business needs.",
    image: "/about-client.jpg", // Replace with your image
  },
];

const values = [
  {
    icon: "bi bi-lightning-charge-fill",
    title: "Agility",
    desc: "Adapting swiftly to market changes and technological advancements.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Integrity",
    desc: "Building trust through transparent processes and honest communication.",
  },
  {
    icon: "bi bi-gem",
    title: "Excellence",
    desc: "Refusing to compromise on quality, from the first line of code to final deployment.",
  },
  {
    icon: "bi bi-people-fill",
    title: "Collaboration",
    desc: "Fostering a unified environment where diverse ideas create superior outcomes.",
  },
  {
    icon: "bi bi-graph-up-arrow",
    title: "Growth",
    desc: "Designing scalable systems that grow seamlessly alongside your business.",
  },
  {
    icon: "bi bi-globe",
    title: "Global Vision",
    desc: "Delivering world-class solutions with a deep understanding of local markets.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero />
      <main className={styles.aboutPage}>
        {/* SECTION 1: Hero / Intro (2 Columns, Equal Height) */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className="row align-items-stretch g-5">
              {/* Left Column: Text & Button (Bottom Left) */}
              <motion.div
                className="col-lg-6 d-flex flex-column justify-content-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className={styles.overline}>WHO WE ARE</span>
                <h1 className={styles.heroTitle}>
                  Architecting the{" "}
                  <span className={styles.textAccent}>Future</span> of Digital
                  Business.
                </h1>
                <p className={styles.heroDesc}>
                  At Nexus Africa, we are a collective of engineers, designers,
                  and strategists dedicated to transforming complex challenges
                  into elegant, high-performance digital solutions. We bridge
                  the gap between visionary ideas and tangible results.
                </p>

                {/* Button pushed to the bottom left */}
                <div className="mt-auto pt-4">
                  <Link href="/contact" className={styles.btnPrimary}>
                    Partner With Us <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div
                className="col-lg-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.heroImageWrap}>
                  <Image
                    src="/about-hero.jpg" // Replace with actual image path
                    alt="Nexus Africa Team"
                    width={800}
                    height={600}
                    className={styles.heroImage}
                    style={{ objectFit: "cover" }}
                  />
                  {/* Decorative accent box */}
                  <div className={styles.imageAccent}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Highlights (2 Columns, Horizontal Cards) */}
        <section className={styles.highlightsSection}>
          <div className="container">
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {highlights.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <motion.article
                    className={styles.horizontalCard}
                    variants={cardVariant}
                  >
                    <div className={styles.cardImageWrap}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className={styles.cardImage}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: Why Choose Us / Our Values (3 Columns x 2 Rows) */}
        <section className={styles.valuesSection}>
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className={styles.overline}>WHY CHOOSE US</span>
              <h2 className={styles.sectionTitle}>Our Core Values</h2>
              <p className={styles.sectionSubtitle}>
                The principles that guide every decision, line of code, and
                client interaction.
              </p>
            </motion.div>

            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {values.map((value, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <motion.div
                    className={styles.valueCard}
                    variants={cardVariant}
                  >
                    <div className={styles.valueIcon}>
                      <i className={value.icon}></i>
                    </div>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueDesc}>{value.desc}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Call to Action */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.ctaTitle}>
                Ready to Transform Your Business?
              </h2>
              <p className={styles.ctaDesc}>
                Let's discuss how our industrial-grade digital solutions can
                drive your next phase of growth.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Start a Project
                </Link>
                <Link href="/services" className={styles.btnSecondary}>
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
