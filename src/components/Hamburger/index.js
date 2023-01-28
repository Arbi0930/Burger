import React from "react";
import styles from "./hamburger.module.css";
const HamburgerMenu = (props) => (
  <div onClick={props.toggleSideBar} className={styles.hamburger}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default HamburgerMenu;
