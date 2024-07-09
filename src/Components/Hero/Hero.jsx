import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent} ref={contentRef}>
          <h1 className={`${styles.title} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            Hi, I'm Karthikeya Saketh
          </h1>
          <p className={`${styles.description} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            I'm a full-stack developer with 2 years of experience using React and NodeJS. Reach out if you'd like to learn more!
          </p>
          <a href="mailto:sakethvadali28@gmail.com" className={`${styles.contactBtn} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            Contact Me
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/3.png")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
        ref={imageRef}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
