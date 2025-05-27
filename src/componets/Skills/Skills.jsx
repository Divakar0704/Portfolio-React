import React from 'react';
import styles from "./Skills.module.css";
import Skills from "../../data/skills.json"

export const Experience = () => {
 return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skills}>
        {Skills.map((skill, id) => (
          <div key={id}className={styles.skill}>
            <div className={styles.skillImageContainer}>
            <img src={skill.imageSrc} alt={`${skill.title} icon`} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}