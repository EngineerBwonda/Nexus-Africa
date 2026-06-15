"use client";

import { motion } from "framer-motion";
import styles from "../styles/contactMap.module.css";

// --- FRAMER MOTION VARIANTS ---
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactMap() {
  return (
    <section className={styles.contactMapSection}>
      <div className="container">
        <div className="row g-0 align-items-stretch">
          {/* LEFT COLUMN: Contact Form */}
          <motion.div
            className="col-lg-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSubtitle}>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

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
                        Email Address *
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

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={styles.formControl}
                    placeholder="How can we help you?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    className={styles.formControl}
                    rows="5"
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message <i className="bi bi-send-fill ms-2"></i>
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Google Map */}
          <motion.div
            className="col-lg-6"
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.mapWrapper}>
              <iframe
                title="Nexus Africa Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.1989188887!2d36.70730744863281!3d-1.3028618000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              ></iframe>

              {/* Overlay Card for Address (Optional but adds premium feel) */}
              <div className={styles.mapOverlayCard}>
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h4>Headquarters</h4>
                  <p>
                    123 Innovation Drive, Tech District
                    <br />
                    Nairobi, Kenya 00100
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
