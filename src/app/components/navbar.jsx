"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbarB.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "../pages/about" },
  { label: "Sevices", href: "/programme" },
  { label: "Software Solutions", href: "/gallery" },
  { label: "News", href: "/join" },
  { label: "Contact", href: "../pages/contact" },
];

const PHONE_NUMBER = "+254 700 000 000";
const PHONE_HREF = "tel:+254700000000";

export default function Navbar() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("/");

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

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`navbar navbar-expand-lg ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className="container-fluid">
          <div className={styles.desktopLayout}>
            {/* ── LEFT: Brand ── */}
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

            {/* ── Hamburger (mobile only) ── */}
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

            {/* ── CENTER: Desktop links ── */}
            <div
              className={`collapse navbar-collapse d-none d-lg-flex ${styles.navCenter}`}
            >
              <ul className={`navbar-nav align-items-center ${styles.navList}`}>
                {navLinks.map(({ label, href }) => (
                  <li className="nav-item" key={label}>
                    <Link
                      href={href}
                      className={`nav-link ${styles.navLink} ${activeHref === href ? styles.active : ""}`}
                      onClick={() => setActiveHref(href)}
                    >
                      {label}
                      <span className={styles.underline} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── RIGHT: CTA buttons (desktop) ── */}
            <div className={`d-none d-lg-flex ${styles.navRight}`}>
              {/* Phone button */}
              <a href={PHONE_HREF} className={styles.phoneBtn}>
                <span className={styles.phoneIcon}>📞</span>
                {PHONE_NUMBER}
              </a>

              {/* Primary CTA */}
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

      {/* ── Backdrop ── */}
      <div
        className={styles.backdrop}
        style={{
          opacity: offcanvasOpen ? 1 : 0,
          pointerEvents: offcanvasOpen ? "all" : "none",
        }}
        onClick={() => setOffcanvasOpen(false)}
      />

      {/* ── Offcanvas Drawer ── */}
      <div
        className={`${styles.offcanvas} ${offcanvasOpen ? styles.offcanvasOpen : ""}`}
      >
        {/* Close */}
        <div className="d-flex justify-content-end w-100">
          <button
            className={styles.closeBtn}
            onClick={() => setOffcanvasOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Top third – logo + texts */}
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

        {/* Divider */}
        <hr className={styles.offcanvasDivider} />

        {/* Centered links */}
        <ul className={`navbar-nav w-100 ${styles.offcanvasNavList}`}>
          {navLinks.map(({ label, href }) => (
            <li className="nav-item text-center" key={label}>
              <Link
                href={href}
                className={`nav-link ${styles.offcanvasLink} ${activeHref === href ? styles.offcanvasActive : ""}`}
                onClick={() => {
                  setActiveHref(href);
                  setOffcanvasOpen(false);
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA buttons in offcanvas */}
        <div className={styles.offcanvasCta}>
          <a href={PHONE_HREF} className={styles.offcanvasPhoneBtn}>
            <span>📞</span>
            {PHONE_NUMBER}
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

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import styles from "../styles/navbar.module.css";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Programme", href: "/programme" },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Join Us", href: "/join" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [offcanvasOpen, setOffcanvasOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeHref, setActiveHref] = useState("/");

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = offcanvasOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [offcanvasOpen]);

//   return (
//     <>
//       {/* ── Main Navbar ── */}
//       <nav
//         className={`navbar navbar-expand-lg   ${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
//       >
//         <div className="container-xxl ">
//           {/* Brand */}
//           <Link
//             href="/"
//             className={`navbar-brand d-flex align-items-center gap-2 ${styles.brand}`}
//           >
//             <Image
//               src="/logoB.png"
//               alt="Pathfinder Club Logo"
//               width={90}
//               height={90}
//               className={styles.logoImg}
//               priority
//             />
//             <div className={`d-flex flex-column ${styles.brandText}`}>
//               <span className={styles.brandName}>NEXUS AFRICA</span>
//               <em className={styles.brandTagline}>
//                 Transforming through technology
//               </em>
//             </div>
//           </Link>

//           {/* Hamburger toggler */}
//           <button
//             className={`navbar-toggler border-0 shadow-none ${styles.toggler}`}
//             type="button"
//             onClick={() => setOffcanvasOpen(true)}
//             aria-label="Open navigation"
//           >
//             <span className={styles.togglerBar} />
//             <span className={styles.togglerBar} />
//             <span className={styles.togglerBar} />
//           </button>

//           {/* Desktop Links */}
//           <div className="collapse navbar-collapse justify-content-end">
//             <ul className={`navbar-nav align-items-center ${styles.navList}`}>
//               {navLinks.map(({ label, href }) => (
//                 <li className="nav-item" key={label}>
//                   <Link
//                     href={href}
//                     className={`nav-link ${styles.navLink} ${activeHref === href ? styles.active : ""}`}
//                     onClick={() => setActiveHref(href)}
//                   >
//                     {label}
//                     <span className={styles.underline} />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* ── Backdrop ── */}
//       <div
//         className={styles.backdrop}
//         style={{
//           opacity: offcanvasOpen ? 1 : 0,
//           pointerEvents: offcanvasOpen ? "all" : "none",
//         }}
//         onClick={() => setOffcanvasOpen(false)}
//       />

//       {/* ── Offcanvas Drawer ── */}
//       <div
//         className={`${styles.offcanvas} ${offcanvasOpen ? styles.offcanvasOpen : ""}`}
//       >
//         {/* Close */}
//         <div className="d-flex justify-content-end w-100">
//           <button
//             className={styles.closeBtn}
//             onClick={() => setOffcanvasOpen(false)}
//             aria-label="Close menu"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Top third – logo + texts */}
//         <div
//           className={`d-flex flex-column align-items-center justify-content-center w-100 ${styles.offcanvasTop}`}
//         >
//           <Image
//             src="/logoB.png"
//             alt="Pathfinder Club Logo"
//             width={80}
//             height={80}
//             className={styles.offcanvasLogoImg}
//           />
//           <span className={`mt-3 text-center ${styles.offcanvasBrandName}`}>
//             NEXUS AFRICA
//           </span>
//           <em className={styles.offcanvasTagline}>
//             Transforming through technology
//           </em>
//         </div>

//         {/* Divider */}
//         <hr className={styles.offcanvasDivider} />

//         {/* Centered links */}
//         <ul className={`navbar-nav w-100 ${styles.offcanvasNavList}`}>
//           {navLinks.map(({ label, href }) => (
//             <li className="nav-item text-center" key={label}>
//               <Link
//                 href={href}
//                 className={`nav-link ${styles.offcanvasLink} ${activeHref === href ? styles.offcanvasActive : ""}`}
//                 onClick={() => {
//                   setActiveHref(href);
//                   setOffcanvasOpen(false);
//                 }}
//               >
//                 {label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
