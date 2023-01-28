import React from "react";
import styles from "./Menuitem.module.css";
const Menuitem = (props) => (
  <li className={styles.MenuItem}>
    <a href={props.link} className={props.active ? styles.active : null}>
      {props.children}
    </a>
  </li>
);

export default Menuitem;
