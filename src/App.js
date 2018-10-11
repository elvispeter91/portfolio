import React, { Component } from "react";
import Stage from "./Container/Staging";
import styles from "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Stage />
      </React.Fragment>
    );
  }
}

export default App;
