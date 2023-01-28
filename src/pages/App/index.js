import React, { Component } from "react";
import styles from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../Burgerbuilder";
import Sidebar from "../../components/Sidebar";

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return {
        showSidebar: !prevState.showSidebar,
      };
    });
  };
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={styles.Content}>
          <BurgerBuilder />
        </main>
      </div>
    );
  }
}

export default App;
