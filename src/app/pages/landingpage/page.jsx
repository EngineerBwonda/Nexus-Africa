"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NexusAfrica() {
  const [isOpen, setIsOpen] = useState(false);

  // Bootstrap JS for Navbar & Interactive Components
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link
            className="navbar-brand fw-bold fs-3 d-flex align-items-center"
            href="/"
          >
            <span className="bg-success text-dark px-3 py-1 rounded me-2">
              N
            </span>
            Nexus Africa
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <button className="btn btn-success ms-lg-3">Get Quote</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="vh-100 d-flex align-items-center bg-dark text-white position-relative overflow-hidden">
        <div className="container position-relative z-3">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h1 className="display-3 fw-bold mb-4">
                Building Digital{" "}
                <span className="text-success">Excellence</span> Across Africa
              </h1>
              <p className="lead mb-5 fs-4 text-light">
                Premium software development company based in Nairobi, Kenya. We
                turn ideas into powerful digital solutions.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#contact" className="btn btn-success btn-lg px-5">
                  Start a Project
                </a>
                <a
                  href="#portfolio"
                  className="btn btn-outline-light btn-lg px-5"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,255,100,0.1) 0%, transparent 70%)",
          }}
        ></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Services</h2>
            <p className="lead text-muted">End-to-end software solutions</p>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Custom Software Development",
                desc: "Tailored enterprise solutions for your business needs.",
              },
              {
                title: "Mobile App Development",
                desc: "High-performance iOS & Android applications.",
              },
              {
                title: "Web Development",
                desc: "Modern, responsive, and scalable web platforms.",
              },
              {
                title: "Digital Transformation",
                desc: "AI, Cloud & Automation solutions.",
              },
            ].map((service, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 shadow-sm border-0 hover-card">
                  <div className="card-body p-4">
                    <div
                      className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                      style={{ width: "60px", height: "60px" }}
                    >
                      ★
                    </div>
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="lead mb-4">Lets build something amazing together.</p>
          <a href="#contact" className="btn btn-dark btn-lg px-5">
            Get In Touch Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Nexus Africa</h4>
              <p className="text-muted">
                Premium Software Development Company in Nairobi, Kenya.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p>© 2026 Nexus Africa. All Rights Reserved.</p>
              <p className="text-muted">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
