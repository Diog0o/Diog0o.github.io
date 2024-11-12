import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { logo } from "../../assets";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} className={styles.image} />
      </div>
      <div className={styles.links}>
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
        <Link to="/skills">SKILLS</Link>
      </div>
      <button className={styles.button}>Let’s Talk.</button>
    </nav>
  );
};

export default Navbar;

