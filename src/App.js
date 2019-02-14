import React, { Component } from "react";
import "./App.css";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // state for fade-on-scroll effects
      scrollAmount: 0,
      scrollToTopButtonOpacity: 0,
      aboutOpacity: 0,
      workOpacity: 0
    };
  }
  componentDidMount() {
    // for use in fade-in-on scroll effects: listen for scrolling, call function to update state accordingly
    window.addEventListener("scroll", this.updateScrollAmount);
    this.updateScrollAmount();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateScrollAmount);
  }

  // update state of scollAmount, call function to handle changes
  updateScrollAmount = () => {
    this.setState({ scrollAmount: window.scrollY });
    this.handleUpdatedScrollAmount();
  };

  // depending on the amount scrolled, changed the value of opacity states to be passed as props to the relevent components
  handleUpdatedScrollAmount = () => {
    // the scroll amount at which various elements should fade in depends on the window-height (since the window partially determines the how far down those elements are located), so we store it for use in calculations below
    let windowHeight = window.innerHeight;

    if (this.state.scrollAmount > 100) {
      this.setState({
        scrollToTopButtonOpacity: 1
      });
    } else {
      this.setState({
        scrollToTopButtonOpacity: 0
      });
    }
    if (this.state.scrollAmount > windowHeight / 2) {
      this.setState({
        aboutOpacity: 1
      });
    } else {
      this.setState({
        aboutOpacity: 0
      });
    }
    if (this.state.scrollAmount > windowHeight * 1.5) {
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
                <a href="#contact-container">Contact</a>
              </li>
            </ul>
          </div>
          <h1 id="greeting">Hi, I'm Jared.</h1>
          <div className="dark-wrapper">
            <h1 id="info">Web Developer - Indianapolis, IN</h1>
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
