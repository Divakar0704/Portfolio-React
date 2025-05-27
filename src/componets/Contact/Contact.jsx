import React from 'react';
import emailIcon from "/assets/contact/emailIcon.png";
import github from "/assets/contact/githubIcon.png";
import linkedin from "/assets/contact/linkedinIcon.png";
import styles  from "./Contact.module.css";

export const Contact = () => {
 return (
    <footer id='contact' className={styles.container}>

        <div className={styles.text}>
             <h2>Contact</h2>
             <p>Feel free to reach out..!!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link} >
                <img src={emailIcon} alt="email icon" />
                <a href="mailto:reddydivakar4832@gmail.com">reddydivakar4832@gmail.com</a>
            </li>
            <li className={styles.link} >
                <img src={github} alt="github icon" />
                <a href="https://github.com/Divakar0704">Divakar0704</a>
            </li>
            <li className={styles.link} >
                <img src={linkedin} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/reddy-divakar-56ba20259/">Reddy Divakar</a>
            </li>

        </ul>
    </footer>
  );
}