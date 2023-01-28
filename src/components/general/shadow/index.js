import React from "react";
import styles from "./shadow.module.css";
const Shadow = (props) => {
  return props.show ? (
    <div onClick={props.close} className={styles.shadow}></div>
  ) : null;
};

export default Shadow;
