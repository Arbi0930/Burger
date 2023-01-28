import React from "react";
import Menuitem from "../Menuitem";
import styles from "./Menu.module.css";
const Menu = () => (
  <div>
    <ul className={styles.Menu}>
      <Menuitem active link="/">
        Шинэ захиалга
      </Menuitem>
      <Menuitem link="/login">Нэвтрэх</Menuitem>
    </ul>
  </div>
);

export default Menu;
