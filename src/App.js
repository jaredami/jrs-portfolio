import React, { Component } from "react";
import "./App.css";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="jumbotron">
          <div className="nav-wrapper">
            <ul id="nav-list">
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <h1 id="greeting">Hi, I'm Jared.</h1>
          <div className="dark-wrapper">
            <h1 id="info">Web Developer - Indianpolis, IN</h1>
          </div>
          <img
            id="down-arrow"
            src={require(`./images/down-arrow.png`)}
            alt="down arrow"
          />
        </div>
        <About />
      </div>
    );
  }
}

export default App;
