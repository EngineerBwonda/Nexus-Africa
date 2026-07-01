"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/carousel.module.css";

export default function HeroCarousel({
  title = "",
  description = "",
  slides = [],
  autoPlay = true,
  interval = 5000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, autoPlay, interval, slides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (slides.length === 0) {
    return <p>No slides provided.</p>;
  }

  return (
    <div className={styles.heroSection}>
      {/* Title and Description */}
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.mainDescription}>{description}</p>
      </div>

      {/* Carousel */}
      <div className={styles.carousel}>
        {/* Slides */}
        <div className={styles.inner}>
          {slides.map((slide, index) => (
            <div
              key={slide.id || index}
              className={`${styles.slide} ${activeIndex === index ? styles.active : ""}`}
            >
              <Image
                src={slide.image}
                alt={slide.alt || `Slide ${index + 1}`}
                fill
                className={styles.image}
                priority={index === 0}
              />

              {/* Optional per-slide caption */}
              {slide.title || slide.description ? (
                <div className={styles.caption}>
                  {slide.title && <h5>{slide.title}</h5>}
                  {slide.description && <p>{slide.description}</p>}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {/* <button
          className={styles.controlPrev}
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          ‹
        </button> */}

        {/* <button
          className={styles.controlNext}
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button> */}
      </div>
    </div>
  );
}
