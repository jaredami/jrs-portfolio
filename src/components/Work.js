import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div id="work-container">
        <h1 id="work-header">My Work</h1>
        <div id="work-grid">
          <div className="project">
            <img
              className="project-screenshot"
              src={require(`../images/integral.jpg`)}
              alt="integral"
            />
            <img
              className="project-screenshot"
              src={require(`../images/f3.jpg`)}
              alt="famil fun and fitness"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
