import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";
import menuIcon from "/assets/nav/menuIcon.png";
import closeIcon from "/assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu icon"
        />

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>{setMenuOpen(false)}}
        >
          <li className={styles.menuItem}>
            <a href="#about">About</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#skills">Skills</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
