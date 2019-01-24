import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicianOpacity: 1,
      philosopherOpacity: 1,
      webdevOpacity: 1
    };
  }

  handleMusicianMouseEnter = () => {
    this.setState({
      musicianOpacity: 1
    });
  };
  handlePhilosopherMouseEnter = () => {
    this.setState({
      philosopherOpacity: 1
    });
  };
  handleWebdevMouseEnter = () => {
    this.setState({
      webdevOpacity: 1
    });
  };
  handleMusicianMouseLeave = () => {
    this.setState({
      musicianOpacity: 1
    });
  };
  handlePhilosopherMouseLeave = () => {
    this.setState({
      philosopherOpacity: 1
    });
  };
  handleWebdevMouseLeave = () => {
    this.setState({
      webdevOpacity: 1
    });
  };

  render() {
    return (
      <div id="about-container">
        <h1 id="about-header">A little about my journey...</h1>
        <div id="about-grid">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <button
                  className="ion-music-note about-icon"
                  name="musician"
                  onMouseEnter={this.handleMusicianMouseEnter}
                  onMouseLeave={this.handleMusicianMouseLeave}
                />
              </div>
              <div className="flip-card-back">
                <div
                  className="about-text"
                  style={{ opacity: `${this.state.musicianOpacity}` }}
                >
                  <h1>
                    <span className="ion-music-note about-icon-sm" />
                    Musician
                  </h1>
                  <p>
                    I played lead guitar for Forevermore from 2009 to 2016. We
                    signed a record deal with Solid State Records, released four
                    full length albums, and toured across the country numerous
                    times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ion-arrow-right-c about-arrows" />

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <button
                  className="ion-university about-icon"
                  name="philosopher"
                  onMouseEnter={this.handlePhilosopherMouseEnter}
                  onMouseLeave={this.handlePhilosopherMouseLeave}
                />
              </div>
              <div className="flip-card-back">
                <div
                  className="about-text"
                  style={{ opacity: `${this.state.philosopherOpacity}` }}
                >
                  <h1>
                    <span className="ion-university about-icon-sm" />
                    Philosopher
                  </h1>
                  <p>
                    After calling it quits with the band, I returned to school
                    to pursue a Master's degree in Philosophy, having developing
                    a deep fascination in questions regarding the nature of
                    consciousness and perception.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ion-arrow-right-c about-arrows" />

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <button
                  className="ion-code about-icon"
                  name="web-dev"
                  onMouseEnter={this.handleWebdevMouseEnter}
                  onMouseLeave={this.handleWebdevMouseLeave}
                />
              </div>
              <div className="flip-card-back">
                <div
                  className="about-text"
                  style={{ opacity: `${this.state.webdevOpacity}` }}
                >
                  <h1>
                    <span className="ion-code about-icon-sm" />
                    Web Developer
                  </h1>
                  <p>
                    I picked up programming in 2017 and quickly fell in love
                    with making things with code. I have found that web
                    development allows me to continue to be both creative and
                    analytic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
