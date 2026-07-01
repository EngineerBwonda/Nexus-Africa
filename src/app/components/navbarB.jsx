"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbarBB.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "../pages/about" },
  {
    label: "Our Services",
    href: "/programme",
    dropdown: [
      { label: "Web Development", href: "../pages/web-dev" },
      { label: "Mobile Development", href: "../pages/mobile-app" },

      { label: "Digital Marketing", href: "../pages/marketing" },
    ],
  },
  //   {
  //     label: "Software Solutions",
  //     href: "/gallery",
  //     dropdown: [
  //       { label: "Custom Development", href: "/software/custom" },
  //       { label: "Digital Platforms", href: "/software/platforms" },
  //       { label: "Tech Consulting", href: "/software/consulting" },
  //       { label: "Portfolio", href: "/gallery" },
  //     ],
  //   },
  { label: "Contact", href: "../pages/contact" },
];

const PHONE_NUMBER = "+254 700 000 000";
const PHONE_HREF = "tel:+254700000000";

export default function Navbar() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const [openDropdown, setOpenDropdown] = useState(null); // Mobile accordion

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = offcanvasOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [offcanvasOpen]);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className="container-fluid">
          <div className={styles.desktopLayout}>
            {/* Brand */}
            <Link
              href="/"
              className={`navbar-brand d-flex align-items-center gap-2 ${styles.brand}`}
            >
              <Image
                src="/logoB.png"
                alt="Nexus Africa Logo"
                width={58}
                height={58}
                className={styles.logoImg}
                priority
              />
              <div className={`d-flex flex-column ${styles.brandText}`}>
                <span className={styles.brandName}>NEXUS AFRICA</span>
                <em className={styles.brandTagline}>
                  Moving culture, Building influence
                </em>
              </div>
            </Link>

            {/* Hamburger */}
            <button
              className={`navbar-toggler border-0 shadow-none ms-auto d-lg-none ${styles.toggler}`}
              type="button"
              onClick={() => setOffcanvasOpen(true)}
              aria-label="Open navigation"
            >
              <span className={styles.togglerBar} />
              <span className={styles.togglerBar} />
              <span className={styles.togglerBar} />
            </button>

            {/* Desktop Navigation */}
            <div
              className={`collapse navbar-collapse d-none d-lg-flex ${styles.navCenter}`}
            >
              <ul className={`navbar-nav align-items-center ${styles.navList}`}>
                {navLinks.map((link) => (
                  <li className={`nav-item ${styles.navItem}`} key={link.label}>
                    {link.dropdown ? (
                      <div className={styles.dropdownWrapper}>
                        <Link
                          href={link.href}
                          className={`nav-link ${styles.navLink} ${activeHref === link.href ? styles.active : ""}`}
                          onClick={() => setActiveHref(link.href)}
                        >
                          {link.label}
                          <span className={styles.dropdownArrow}>▼</span>
                        </Link>

                        {/* Desktop Dropdown */}
                        <div className={styles.dropdownMenu}>
                          <div className={styles.dropdownContent}>
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={styles.dropdownItem}
                                onClick={() => setActiveHref(item.href)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`nav-link ${styles.navLink} ${activeHref === link.href ? styles.active : ""}`}
                        onClick={() => setActiveHref(link.href)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right CTAs - Desktop */}
            <div className={`d-none d-lg-flex ${styles.navRight}`}>
              <a href={PHONE_HREF} className={styles.phoneBtn}>
                <span className={styles.phoneIcon}>📞</span>
                {PHONE_NUMBER}
              </a>

              <Link
                href="/join"
                className={styles.ctaBtn}
                onClick={() => setActiveHref("/join")}
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={styles.backdrop}
        style={{
          opacity: offcanvasOpen ? 1 : 0,
          pointerEvents: offcanvasOpen ? "all" : "none",
        }}
        onClick={() => setOffcanvasOpen(false)}
      />

      {/* Offcanvas - Mobile */}
      <div
        className={`${styles.offcanvas} ${offcanvasOpen ? styles.offcanvasOpen : ""}`}
      >
        <div className="d-flex justify-content-end w-100">
          <button
            className={styles.closeBtn}
            onClick={() => setOffcanvasOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Offcanvas Top */}
        <div
          className={`d-flex flex-column align-items-center justify-content-center w-100 ${styles.offcanvasTop}`}
        >
          <Image
            src="/logoB.png"
            alt="Nexus Africa Logo"
            width={80}
            height={80}
            className={styles.offcanvasLogoImg}
          />
          <span className={`mt-3 text-center ${styles.offcanvasBrandName}`}>
            NEXUS AFRICA
          </span>
          <em className={styles.offcanvasTagline}>
            Moving culture, Building influence
          </em>
        </div>

        <hr className={styles.offcanvasDivider} />

        {/* Mobile Links */}
        <ul className={`navbar-nav w-100 ${styles.offcanvasNavList}`}>
          {navLinks.map((link) => (
            <li className="nav-item" key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    className={`${styles.offcanvasLink} ${styles.accordionHeader}`}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <span
                      className={`${styles.chevron} ${openDropdown === link.label ? styles.chevronOpen : ""}`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`${styles.accordionContent} ${openDropdown === link.label ? styles.accordionOpen : ""}`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.accordionItem}
                        onClick={() => {
                          setActiveHref(item.href);
                          setOffcanvasOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`nav-link ${styles.offcanvasLink} ${activeHref === link.href ? styles.offcanvasActive : ""}`}
                  onClick={() => {
                    setActiveHref(link.href);
                    setOffcanvasOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Offcanvas CTAs */}
        <div className={styles.offcanvasCta}>
          <a href={PHONE_HREF} className={styles.offcanvasPhoneBtn}>
            <span>📞</span> {PHONE_NUMBER}
          </a>
          <Link
            href="/join"
            className={styles.offcanvasCtaBtn}
            onClick={() => {
              setActiveHref("/join");
              setOffcanvasOpen(false);
            }}
          >
            Get Started →
          </Link>
        </div>
      </div>
    </>
  );
}
