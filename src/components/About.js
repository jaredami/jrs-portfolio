import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicianOpacity: 0,
      philosopherOpacity: 0,
      webdevOpacity: 0
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
      musicianOpacity: 0
    });
  };
  handlePhilosopherMouseLeave = () => {
    this.setState({
      philosopherOpacity: 0
    });
  };
  handleWebdevMouseLeave = () => {
    this.setState({
      webdevOpacity: 0
    });
  };

  render() {
    return (
      <div id="about-container">
        <h1 id="about-header">A little about my journey...</h1>
        <div id="about-grid">
          <div>
            <button
              className="ion-music-note about-icons"
              name="musician"
              onMouseEnter={this.handleMusicianMouseEnter}
              onMouseLeave={this.handleMusicianMouseLeave}
            />
            <div
              className="about-text"
              style={{ opacity: `${this.state.musicianOpacity}` }}
            >
              <h1>Musician</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                quis neque sed dui tincidunt scelerisque eu et ante. Phasellus
                ac dui rutrum, faucibus purus at, iaculis dolor. Nam aliquet est
                eu felis vehicula, at suscipit purus porta. Aenean placerat
                luctus turpis, non faucibus risus. Maecenas erat ligula,
                dignissim eget neque at, facilisis feugiat dolor. Donec ac
                tempor mi. Morbi nec dapibus ligula, nec interdum felis.{" "}
              </p>
            </div>
          </div>
          <div className="ion-arrow-right-c about-arrows" />
          <div>
            <button
              className="ion-university about-icons"
              name="philosopher"
              onMouseEnter={this.handlePhilosopherMouseEnter}
              onMouseLeave={this.handlePhilosopherMouseLeave}
            />
            <div
              className="about-text"
              style={{ opacity: `${this.state.philosopherOpacity}` }}
            >
              <h1>Philosopher</h1>
              <p>
                Nulla feugiat elit ut libero fermentum, sed tristique metus
                feugiat. Nam imperdiet lectus orci, eget luctus nibh ullamcorper
                nec. Proin non orci blandit, dapibus libero ut, imperdiet est.
                Suspendisse et elit tempus, lacinia tellus a, condimentum diam.
                Fusce sed posuere dui. Nulla fringilla ex non ipsum malesuada
                bibendum. Sed eu tellus bibendum, sagittis orci non, rhoncus
                nulla.
              </p>
            </div>
          </div>
          <div className="ion-arrow-right-c about-arrows" />
          <div>
            <button
              className="ion-code about-icons"
              name="web-dev"
              onMouseEnter={this.handleWebdevMouseEnter}
              onMouseLeave={this.handleWebdevMouseLeave}
            />
            <div
              className="about-text"
              style={{ opacity: `${this.state.webdevOpacity}` }}
            >
              <h1>Web Developer</h1>
              <p>
                Sed dignissim finibus vestibulum. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Duis ultrices felis nisl. Ut in
                mi ultricies, placerat ipsum ut, imperdiet ligula. Nullam
                bibendum et tellus ut sollicitudin. Morbi sit amet elit mollis,
                mollis leo ullamcorper, tempus magna. Curabitur at magna auctor,
                ultricies nisl in, suscipit ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
