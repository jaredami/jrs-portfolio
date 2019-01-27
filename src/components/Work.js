import React, { Component } from "react";
import "../css/imagehover.min.css";

class Work extends Component {
  render() {
    return (
      <div id="work-container">
        <h1 id="work-header">My Work</h1>
        <div id="work-grid">
          <div className="project">
            <figure
              className="imghvr-shutter-out-diag-1"
              style={{ backgroundColor: "#232323" }}
            >
              <img
                className="project-screenshot"
                src={require(`../images/integral.jpg`)}
                alt="integral"
              />
              <figcaption style={{ backgroundColor: "#f5f5f5" }}>
                Hover Content
              </figcaption>
            </figure>
            <div className="project-info">
              <h1 className="project-name">Integral</h1>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="project-tools-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>ES6</li>
                <li>React</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="code-link hvr-bounce-to-top"
                  href="https://integral.netlify.com/"
                >
                  Code
                </a>
                <a
                  className="external-link hvr-bounce-to-top"
                  href="https://integral.netlify.com/"
                >
                  External
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <figure
              className="imghvr-shutter-out-diag-1"
              style={{ backgroundColor: "#232323" }}
            >
              <img
                className="project-screenshot"
                src={require(`../images/f3.jpg`)}
                alt="family fun and fitness"
              />
              <figcaption style={{ backgroundColor: "#f5f5f5" }}>
                Hover Content
              </figcaption>
            </figure>
            <div className="project-info">
              <h1 className="project-name">Family Fun &amp; Fitness</h1>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="project-tools-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>ES6</li>
                <li>React</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="code-link hvr-bounce-to-top"
                  href="https://integral.netlify.com/"
                >
                  Code
                </a>
                <a
                  className="external-link hvr-bounce-to-top"
                  href="https://integral.netlify.com/"
                >
                  External
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <figure
              className="imghvr-shutter-out-diag-1"
              style={{ backgroundColor: "#232323" }}
            >
              <img
                className="project-screenshot"
                src={require(`../images/drum-machine.jpg`)}
                alt="drum-machine"
              />
              <figcaption style={{ backgroundColor: "#f5f5f5" }}>
                Hover Content
              </figcaption>
            </figure>
            <div className="project-info">
              <h1 className="project-name">Drum Machine</h1>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="project-tools-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>ES6</li>
                <li>React</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="code-link hvr-bounce-to-top"
                  href="https://integral.netlify.com/"
                >
                  Code
                </a>
                <a
                  className="external-link hvr-bounce-to-top"
                  href="https://integral.netlify.com/"
                >
                  External
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
