import React, { Component } from "react";
import "../css/imagehover.min.css";

class Contact extends Component {
  render() {
    return (
      <div id="contact-container">
        {/* <img
          id="contact-bckgrnd"
          src={require(`../images/leaves-2-bw.png`)}
          alt="branch"
        /> */}
        <h1>
          Drop me a line at{" "}
          <a href="jaredrstorm@gmail.com">jaredrstorm@gmail.com</a>
        </h1>
        <div id="contact-flexbox">
          <a
            href="https://github.com/jaredami"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="icon ion-logo-github" />
          </a>
          <a
            href="https://codepen.io/yaredami/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="icon ion-logo-codepen" />
          </a>
          <a
            href="https://www.instagram.com/jared_storm/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="icon ion-logo-instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
