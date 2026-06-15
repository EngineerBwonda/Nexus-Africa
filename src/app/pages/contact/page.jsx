"use client";

import { motion } from "framer-motion";
import styles from "./contact.module.css";

// --- FRAMER MOTION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const contactInfo = [
  {
    icon: "bi bi-geo-alt-fill",
    title: "Headquarters",
    details: ["123 Innovation Drive, Tech District", "Nairobi, Kenya 00100"],
  },
  {
    icon: "bi bi-envelope-fill",
    title: "Email Us",
    details: ["hello@nexusafrica.com", "support@nexusafrica.com"],
  },
  {
    icon: "bi bi-telephone-fill",
    title: "Call Us",
    details: ["+254 (0) 123 456 789", "Mon - Fri, 8am - 6pm EAT"],
  },
];

const departments = [
  {
    title: "Sales & Partnerships",
    email: "sales@nexusafrica.com",
    icon: "bi bi-briefcase-fill",
  },
  {
    title: "Technical Support",
    email: "support@nexusafrica.com",
    icon: "bi bi-headset",
  },
  {
    title: "Careers",
    email: "careers@nexusafrica.com",
    icon: "bi bi-people-fill",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      {/* SECTION 1: Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <motion.div
            className={styles.headerContent}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className={styles.overline}>CONTACT US</span>
            <h1 className={styles.pageTitle}>
              Let's Build Something{" "}
              <span className={styles.textAccent}>Extraordinary</span>.
            </h1>
            <p className={styles.pageSubtitle}>
              Have a project in mind? Reach out to our team of experts and let's
              discuss how we can engineer a solution tailored to your business
              needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Main Contact Grid (Info + Form) */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className="row g-5">
            {/* Left Column: Contact Information */}
            <motion.div
              className="col-lg-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.infoColumn}>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className={styles.infoCard}
                    variants={fadeInUp}
                  >
                    <div className={styles.infoIcon}>
                      <i className={item.icon}></i>
                    </div>
                    <div className={styles.infoContent}>
                      <h3 className={styles.infoTitle}>{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className={styles.infoText}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className={styles.socialSection}>
                  <h4 className={styles.socialTitle}>Connect With Us</h4>
                  <div className={styles.socialLinks}>
                    <a href="#" aria-label="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" aria-label="GitHub">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              className="col-lg-7"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSubtitle}>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form
                  className={styles.contactForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={styles.formControl}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={styles.formControl}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 mt-1">
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.formLabel}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={styles.formControl}
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label htmlFor="service" className={styles.formLabel}>
                          Service Interested In
                        </label>
                        <select id="service" className={styles.formControl}>
                          <option value="">Select a service...</option>
                          <option value="web">Web Design & Development</option>
                          <option value="mobile">Mobile App Development</option>
                          <option value="software">Custom Software</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      className={styles.formControl}
                      rows="5"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Message <i className="bi bi-send-fill ms-2"></i>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Direct Departments */}
      <section className={styles.departmentsSection}>
        <div className="container">
          <motion.div
            className={styles.deptHeader}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className={styles.deptTitle}>Direct Department Lines</h2>
            <p className={styles.deptSubtitle}>
              Reach out directly to the team that can best assist you.
            </p>
          </motion.div>

          <motion.div
            className="row g-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {departments.map((dept, index) => (
              <div className="col-md-4" key={index}>
                <motion.a
                  href={`mailto:${dept.email}`}
                  className={styles.deptCard}
                  variants={fadeInUp}
                >
                  <div className={styles.deptIcon}>
                    <i className={dept.icon}></i>
                  </div>
                  <h4 className={styles.deptName}>{dept.title}</h4>
                  <p className={styles.deptEmail}>{dept.email}</p>
                  <span className={styles.deptLink}>
                    Email Team <i className="bi bi-arrow-right-short"></i>
                  </span>
                </motion.a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
