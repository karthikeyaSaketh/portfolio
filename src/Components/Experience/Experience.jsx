import React from "react";
import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.internships}>
          <div className={styles.internship}>
            <h3 className={styles.internshipTitle}>Web Developer Intern @ TeckyBot</h3>
            <p className={styles.internshipDescription}>
              Worked on developing and maintaining web applications using modern frameworks and technologies.
              Collaborated with a team of developers to deliver high-quality software solutions.
            </p>
          </div>
          <div className={styles.internship}>
            <h3 className={styles.internshipTitle}>AWS Cloud Computing</h3>
            <p className={styles.internshipDescription}>
              Gained hands-on experience in cloud infrastructure management, deployment, and scaling of applications
              on the AWS platform. Implemented solutions to enhance system performance and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
