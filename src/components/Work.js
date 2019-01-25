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
          </div>

          <div className="project">
            <figure
              className="imghvr-zoom-out-flip-vert"
              style={{ backgroundColor: "#232323" }}
            >
              <img
                className="project-screenshot"
                src={require(`../images/f3.jpg`)}
                alt="famil fun and fitness"
              />
              <figcaption style={{ backgroundColor: "#f5f5f5" }}>
                Hover Content
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
