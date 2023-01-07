import React from "react";

import styles from "../Burgeringredient/_.module.css"


 const BurgerIngredient = props =>  {
    if(props.type === 'bread-top') return <div className={styles.BreadTop}></div>
    if (props.type === 'salad') return  <div className={styles.Salad}></div>;
    if (props.type === 'meat') return  <div className={styles.Meat}></div>;
    if (props.type === 'cheese') return  <div className={styles.Cheese}></div>;
    if (props.type === 'bacon') return  <div className={styles.Bacon}></div>;
    if (props.type === 'meat') return  <div className={styles.Meat}></div>;
    if (props.type === 'meat') return  <div className={styles.Meat}></div>;
    if(props.type === 'bread-bottom') return <div className={styles.BreadBottom}></div>
}

export default BurgerIngredient;