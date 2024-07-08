import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.description}>
          <h3 className={styles.subTitle}>Description</h3>
          <p className={styles.text}>
            I am a dedicated and passionate developer with expertise in both
            frontend and backend technologies. I strive to create optimized and
            user-friendly applications that deliver seamless user experiences.
          </p>
          <h3 className={styles.subTitle}>Education</h3>
          <ul className={styles.educationList}>
            <li className={styles.educationItem}>
              <h4 className={styles.degree}>Bachelor of Science in Electronics and Communications</h4>
              <p className={styles.institution}>Gayatri Vidya Parishad, 2025</p>
              <p className={styles.institution}>CGPA - 9.01</p>
            </li>
            <li className={styles.educationItem}>
              <h4 className={styles.degree}>Intermediate</h4>
              <p className={styles.institution}>Aditya Educational Institutions</p>
              <p className={styles.institution}>Aggregate - 98.3%</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
