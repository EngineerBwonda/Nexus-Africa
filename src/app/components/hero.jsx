"use client";

import Link from "next/link";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background Patterns */}
      <div className={styles.heroPattern}></div>
      <div className={styles.heroGrid}></div>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Copy & Stats */}
          <div className="col-lg-6">
            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>
                <i className="bi bi-cpu-fill"></i>
                Engineering Excellence Since 2015
              </div>

              <h1 className={styles.heroTitle}>
                Industrial-Grade
                <span className={styles.heroTitleAccent}>
                  Digital Solutions
                </span>
                for Modern Business.
              </h1>

              <p className={styles.heroDesc}>
                We architect scalable, high-performance web and software
                solutions. From robust backend systems to intuitive user
                experiences, we build technology that drives measurable growth.
              </p>

              <div className={styles.heroCta}>
                <Link href="/pages/contact" className={styles.btnPrimary}>
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Start Your Project
                </Link>
                <Link href="#process" className={styles.btnSecondary}>
                  <i className="bi bi-play-circle me-2"></i>
                  Our Process
                </Link>
              </div>

              <div className={styles.heroStats}>
                {[
                  { number: "150+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Retention" },
                  { number: "24/7", label: "Enterprise Support" },
                  { number: "50+", label: "Global Partners" },
                ].map((stat) => (
                  <div key={stat.label} className={styles.statItem}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Consultation Form */}
          <div className="col-lg-6">
            <div className={styles.heroRight}>
              {/* Floating Badges */}
              <div
                className={`${styles.floatingBadge} ${styles.floatingBadge1}`}
              >
                <div className={`${styles.badgeIcon} ${styles.badgeIconGold}`}>
                  <i className="bi bi-shield-check-fill"></i>
                </div>
                <div>
                  <div className={styles.badgeSubtext}>Security First</div>
                  <div className={styles.badgeMainText}>ISO 27001 Ready</div>
                </div>
              </div>

              <div
                className={`${styles.floatingBadge} ${styles.floatingBadge2}`}
              >
                <div className={`${styles.badgeIcon} ${styles.badgeIconBlue}`}>
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div>
                  <div className={styles.badgeSubtext}>Performance</div>
                  <div className={styles.badgeMainText}>99.9% Uptime</div>
                </div>
              </div>

              {/* Glassmorphism Form Card */}
              <div className={styles.heroCard}>
                <div className={styles.cardTitle}>
                  <i className="bi bi-envelope-paper me-2"></i>
                  Request a Consultation
                </div>

                <form
                  className={styles.consultationForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Full Name</label>
                    <input
                      type="text"
                      className={styles.formControl}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>

                  <div className="row g-2">
                    <div className="col-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Work Email</label>
                        <input
                          type="email"
                          className={styles.formControl}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Service</label>
                        <select className={styles.formControl} required>
                          <option value="">Select...</option>
                          <option>Web Development</option>
                          <option>Mobile Applications</option>
                          <option>Custom Software</option>
                          <option>Digital Marketing</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Project Details</label>
                    <textarea
                      className={styles.formControl}
                      rows="3"
                      placeholder="Briefly describe your project goals..."
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Submit Inquiry <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
