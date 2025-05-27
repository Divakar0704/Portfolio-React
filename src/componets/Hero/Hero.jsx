import React from 'react';
import styles from "./Hero.module.css"
import heroImage from "/assets/hero/mee.jpg"
export const Hero = () => {
 return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Divakar Reddy!</h1>
        <p className={styles.description}>
           I’m a full-stack developer crafting scalable web apps using MERN stack. Let’s build something impactful !
        </p>
        <a className={styles.contactBtn} href="mailto:dreddy5@gitam.in">Contact me</a>

        </div>
        <div className={styles.imageHolder}>

        <img className={styles.heroImg} src={heroImage} alt="ProfilePic" />
        </div>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    
  );
}