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
                  className="ion-music-note about-icons"
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
                  <h1>Musician</h1>
                  <p>
                    I played lead guitar for Forevermore. We signed a record
                    deal with Solid State Records, released four full length
                    albums, and toured across the country numerous times between
                    2011 and 2016.
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
                  className="ion-university about-icons"
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
                  <h1>Philosopher</h1>
                  <p>
                    After calling it quits with the band, I returned to school
                    to study philosophy, having developing a deep fascination in
                    questions about the nature of consciousness and sense
                    perception. I will complete my M.A. in May of 2019.
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
                  className="ion-code about-icons"
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
                  <h1>Web Developer</h1>
                  <p>
                    I picked up programming during the final semester of my B.A.
                    and quickly fell in love with creating things with code. I
                    have found that web development offers much of what I love
                    about both music and philosophy as it enables me to express
                    both my creative and analytic capacities.
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
