import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollAmount: 0,
      scrollToTopButtonOpacity: 0,
      aboutOpacity: 0,
      workOpacity: 0
    };
  }
  componentDidMount() {
    // listen for window resize, call function to handle any changes
    window.addEventListener("scroll", this.updateScrollAmount);
    this.updateScrollAmount();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScrollAmount);
  }

  // sets the state of width and height to match window dimensions, then calls function which changes display accordingly
  updateScrollAmount = () => {
    this.setState({ scrollAmount: window.scrollY });
    this.handleUpdatedScrollAmount();
  };

  handleUpdatedScrollAmount = () => {
    if (this.state.scrollAmount > 100) {
      this.setState({
        scrollToTopButtonOpacity: 1
      });
    } else {
      this.setState({
        scrollToTopButtonOpacity: 0
      });
    }
    if (this.state.scrollAmount > 600) {
      this.setState({
        aboutOpacity: 1
      });
    } else {
      this.setState({
        aboutOpacity: 0
      });
    }
    if (this.state.scrollAmount > 1800) {
      this.setState({
        workOpacity: 1
      });
    } else {
      this.setState({
        worktOpacity: 0
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div id="jumbo-img" />
        <div id="jumbotron">
          <a href="#jumbotron">
            <button
              id="home-button"
              style={{ opacity: this.state.scrollToTopButtonOpacity }}
            >
              <i className="icon ion-md-home" id="home-icon" />
            </button>
          </a>
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
          <a id="down-arrow-link" href="#about-container">
            <p id="down-arrow" className="icon ion-md-arrow-dropdown" />
          </a>
        </div>
        <About opacity={this.state.aboutOpacity} />
        <Work opacity={this.state.workOpacity} />
        <Contact />
      </div>
    );
  }
}

export default App;
