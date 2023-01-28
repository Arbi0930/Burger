import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HamburgerMenu from "../Hamburger";
const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <HamburgerMenu toggleSideBar={props.toggleSideBar} />
      <Logo />
      <nav className={styles.Hideonmobile}>
        <Menu />
      </nav>
    </header>
  );
};

export default Toolbar;
