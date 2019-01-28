import React, { Component } from "react";
import "../css/imagehover.min.css";

class Contact extends Component {
  render() {
    return (
      <div id="contact-container">
        <h1>
          Drop me a line at{" "}
          <a href="#" rel="noopnener noreferrer" target="_blank">
            jaredrstorm@gmail.com
          </a>
        </h1>
        <div id="contact-flexbox">
          <a href="#" rel="noopnener noreferrer" target="_blank">
            <i className="icon ion-logo-github" />
          </a>
          <a href="#" rel="noopnener noreferrer" target="_blank">
            <i className="icon ion-logo-codepen" />
          </a>
          <a href="#" rel="noopnener noreferrer" target="_blank">
            <i className="icon ion-logo-instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
