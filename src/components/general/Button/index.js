import React from "react";
import styles from "./button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={`${styles.Button} ${styles[props.btnType]}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
