import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="jumbotron">
          <div className="wrapper">
            <ul id="nav-list">
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="dark-wrapper">
            <h1 id="intro">Hi, I'm Jared</h1>
            <h1 id="info">Web Developer - Indianpolis, IN</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
