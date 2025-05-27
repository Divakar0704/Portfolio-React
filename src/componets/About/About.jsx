import React from 'react';
import styles from "./About.module.css"
import aboutImage from "/assets/about/boy sitting.svg";
import cursorIcon from "/assets/about/cursorIcon.png";
import serverIcon from "/assets/about/serverIcon.png"
import uiIcon from "/assets/about/uiIcon.png"



export const About = () => {
 return (
    <section id='about' className={styles.container} >
        <h2 className={styles.title}>About</h2>
         <div className={styles.content}>

            <img src={aboutImage} alt="about Image" 
            className={styles.aboutImage}
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}> 
                    <img src={cursorIcon} alt="cursor Icon" />

                    <div className={styles.aboutItemText}>
                    <h3>
                        Frontend developer
                    </h3>
                    <p>
                        I'm Frontend developer ,familiar with react and other js frameworks.
                    </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={serverIcon} alt="server Icon" />

                    <div className={styles.aboutItemText}>
                    <h3>
                        Backend Developer
                    </h3>
                    <p>
                        I have experience in developing the application's Backend system and API's using  node js and other tools.
                    </p>
                    </div>
                </li >

                <li className={styles.aboutItem}>
                    <img src={uiIcon} alt="ui Icon" />

                    <div className={styles.aboutItemText}>
                    <h3>
                        UI designer
                    </h3>
                    <p>
                        I have designed multiple landing pages and created design systems too.
                    </p>
                    </div>
                </li>
            </ul>
         </div>
    </section>
   
  );
}