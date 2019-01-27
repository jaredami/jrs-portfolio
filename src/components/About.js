import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about-container">
        {/* <img
          id="branch"
          src={require(`../images/leaves-2-bw.png`)}
          alt="branch"
        /> */}
        <img
          id="about-bckgrnd"
          src={require(`../images/tampa-wide.png`)}
          alt="jared playing guitar"
        />
        <h1 id="about-header" style={{ opacity: this.props.opacity }}>
          A little about my journey...
        </h1>
        <div id="about-grid" style={{ opacity: this.props.opacity }}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="flip-card-bckgrnd"
                  src={require(`../images/leaves-bw.png`)}
                  alt="leaves"
                />
                {/* <span className="ion-music-note about-icon" name="musician" /> */}
                <i className="icon ion-md-musical-notes about-icon" />
              </div>
              <div className="flip-card-back">
                <img
                  className="flip-card-bckgrnd flip-card-back-bckgrnd"
                  src={require(`../images/integral-background.jpg`)}
                  alt="flip-card-bckgrnd"
                />
                <div className="about-text">
                  <h1>
                    {/* <span className="ion-music-note about-icon-sm" /> */}
                    <i className="icon ion-md-musical-notes about-icon-sm" />
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

          {/* <div className="ion-arrow-right-a about-arrow" /> */}
          <i className="icon ion-md-arrow-dropright about-arrow" />

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="flip-card-bckgrnd"
                  src={require(`../images/leaves-bw.png`)}
                  alt="leaves"
                />
                {/* <span className="ion-university about-icon" /> */}
                <i className="icon ion-md-school about-icon" />
              </div>
              <div className="flip-card-back">
                <img
                  className="flip-card-bckgrnd flip-card-back-bckgrnd"
                  src={require(`../images/integral-background.jpg`)}
                  alt="flip-card-bckgrnd"
                />
                <div className="about-text">
                  <h1>
                    {/* <span className="ion-university about-icon-sm" /> */}
                    <i className="icon ion-md-school about-icon-sm" />
                    Philosopher
                  </h1>
                  <p>
                    After calling it quits with the band, I returned to school
                    to pursue a Master's degree in Philosophy, having developed
                    a deep fascination in questions regarding the nature of
                    consciousness and perception.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <i className="icon ion-md-arrow-dropright about-arrow" />

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="flip-card-bckgrnd"
                  src={require(`../images/leaves-bw.png`)}
                  alt="leaves"
                />
                {/* <span className="ion-code about-icon" /> */}
                <i className="icon ion-md-code about-icon" />
              </div>
              <div className="flip-card-back">
                <img
                  className="flip-card-bckgrnd flip-card-back-bckgrnd"
                  src={require(`../images/integral-background.jpg`)}
                  alt="flip-card-bckgrnd"
                />
                <div className="about-text">
                  <h1>
                    {/* <span className="ion-code about-icon-sm" /> */}
                    <i className="icon ion-md-code about-icon-sm" />
                    Web Developer
                  </h1>
                  <p>
                    I picked up programming in 2017 and quickly fell in love
                    with making things with code. I have found that web
                    development allows me to continue to be both creative
                    (music) and analytic (philosophy).
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
