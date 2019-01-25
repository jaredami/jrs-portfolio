import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about-container">
        <img
          id="branch"
          src={require(`../images/leaves-2-bw.png`)}
          alt="branch"
        />
        <h1 id="about-header">A little about my journey...</h1>
        <div id="about-grid">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="leaf"
                  src={require(`../images/leaves-bw.png`)}
                  alt="leaves"
                />
                {/* <span className="ion-music-note about-icon" name="musician" /> */}
                <i class="icon ion-md-musical-notes about-icon" />
              </div>
              <div className="flip-card-back">
                <img
                  className="leaf"
                  src={require(`../images/leaf-bw.jpg`)}
                  alt="leaf"
                />
                <div className="about-text">
                  <h1>
                    {/* <span className="ion-music-note about-icon-sm" /> */}
                    <i class="icon ion-md-musical-notes about-icon-sm" />
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

          <div className="ion-arrow-right-a about-arrow" />

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="leaf"
                  src={require(`../images/leaves-bw.png`)}
                  alt="leaves"
                />
                {/* <span className="ion-university about-icon" /> */}
                <i class="icon ion-md-school about-icon" />
              </div>
              <div className="flip-card-back">
                <img
                  className="leaf"
                  src={require(`../images/leaf-bw.jpg`)}
                  alt="leaf"
                />
                <div className="about-text">
                  <h1>
                    {/* <span className="ion-university about-icon-sm" /> */}
                    <i class="icon ion-md-school about-icon-sm" />
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

          <div className="ion-arrow-right-a about-arrow" />

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="leaf"
                  src={require(`../images/leaves-bw.png`)}
                  alt="leaves"
                />
                {/* <span className="ion-code about-icon" /> */}
                <i class="icon ion-md-code about-icon" />
              </div>
              <div className="flip-card-back">
                <img
                  className="leaf"
                  src={require(`../images/leaf-bw.jpg`)}
                  alt="leaf"
                />
                <div className="about-text">
                  <h1>
                    {/* <span className="ion-code about-icon-sm" /> */}
                    <i class="icon ion-md-code about-icon-sm" />
                    Web Developer
                  </h1>
                  <p>
                    I picked up programming in 2017 and quickly fell in love
                    with making things with code. I have found that web
                    development allows me to continue to be both creative
                    (music) and analytic (philosphy).
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
