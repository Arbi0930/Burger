import React from "react";
import styles from "./logo.module.css";
import logoimage from "../../assets/images/burger-logo.png";
const Logo = () => (
  <div className={styles.Logo}>
    <img src={logoimage} />
  </div>
);

export default Logo;
