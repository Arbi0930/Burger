import React from "react";
import styles from './_.module.css'
import BuildControl from "../BuildControl";
const BuildControls = (props) => {
return(
    <div className={styles.BuildControls}>
       <BuildControl ortsNemeh={props.ortsNemeh} type = "salad" orts="Салад" />
       <BuildControl ortsNemeh={props.ortsNemeh} type="bacon" orts = "Гахайн мах" />
       <BuildControl ortsNemeh={props.ortsNemeh} type = "cheese" orts = "Бяслаг" />
       <BuildControl ortsNemeh={props.ortsNemeh} type = "meat" orts = "Үхрийн мах" />
    </div>
);
}
export default BuildControls;