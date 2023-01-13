import React from "react";
import styles from './_.module.css'
const BuildControl = (props) =>{
return(
    <div className= {styles.BuildControl}>
        <div className={styles.Label}>{props.orts}</div>
        <button onClick={() => {
            props.ortsNemeh(props.type)
         }} 
         className={styles.More}>Нэмэх</button>
         <button  className={styles.Less}>Хасах</button>
    </div>
);
}
export default BuildControl;