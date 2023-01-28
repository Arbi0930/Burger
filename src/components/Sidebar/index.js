import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../general/shadow";
const Sidebar = (props) => {
  let classes = [styles.sidebar, styles.Close];
  if (props.showSidebar) {
    classes = [styles.sidebar, styles.Open];
  }
  return (
    <div>
      <Shadow show={props.showSidebar} close={props.toggleSideBar} />
      <div className={classes.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default Sidebar;
