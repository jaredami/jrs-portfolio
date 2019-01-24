import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Work from "./components/Work";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img
          id="jumbo-img"
          src={require(`./images/jrsrichmond.jpg`)}
          alt="jared storm"
        /> */}
        <div id="jumbo-img" />
        <div id="jumbotron">
          <div className="nav-wrapper">
            <ul id="nav-list">
              <li>
                <a href="#about-container">About</a>
              </li>
              <li>
                <a href="#work-container">Work</a>
              </li>
              <li>
                <a href="#about-container">Contact</a>
              </li>
            </ul>
          </div>
          <h1 id="greeting">Hi, I'm Jared.</h1>
          <div className="dark-wrapper">
            <h1 id="info">Web Developer - Indianpolis, IN</h1>
          </div>
          <a href="#about-container">
            <img
              id="down-arrow"
              src={require(`./images/down-arrow.png`)}
              alt="down arrow"
            />
          </a>
        </div>
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
