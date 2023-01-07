import React from "react";
import  BurgerIngredient  from "../Burgeringredient";
import styles from "../Burger/style.module.css"
const Burger = () => {
    return (
        <div className={styles.Burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type = "salad"/>
        <BurgerIngredient type = "bacon"/>
        <BurgerIngredient type = "cheese"/>
        <BurgerIngredient type = "meat"/>
        <BurgerIngredient type = "meat"/>
        <BurgerIngredient type = "bread-bottom" />
        </div>
    );
}

export default Burger;
