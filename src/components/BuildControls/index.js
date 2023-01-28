import React from "react";
import styles from "./_.module.css";
import BuildControl from "../BuildControl";
const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Бургерийн үнэ: <strong>{props.price}</strong>
      </p>
      {Object.keys(props.ingreientnames).map((el) => (
        <BuildControl
          key={el}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
          disabled={props.disabledIngredients}
          type={el}
          orts={props.ingreientnames[el]}
        />
      ))}

      <button
        onClick={props.show}
        disabled={props.disabledButton}
        className={styles.Orderbutton}
      >
        Захиалга хийх
      </button>
    </div>
  );
};
export default BuildControls;
