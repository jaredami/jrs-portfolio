import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about-container">
        <h1 id="about-header">A little about my journey...</h1>
        <div id="about-grid">
          <span className="ion-music-note about-icons" />
          <div className="ion-arrow-right-c about-arrows" />
          <span className="ion-university about-icons" />
          <div className="ion-arrow-right-c about-arrows" />
          <span className="ion-code about-icons" />

          <h1>Musician</h1>
          <div />
          <h1>Philosopher</h1>
          <div />
          <h1>Web Developer</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis
            neque sed dui tincidunt scelerisque eu et ante. Phasellus ac dui
            rutrum, faucibus purus at, iaculis dolor. Nam aliquet est eu felis
            vehicula, at suscipit purus porta. Aenean placerat luctus turpis,
            non faucibus risus. Maecenas erat ligula, dignissim eget neque at,
            facilisis feugiat dolor. Donec ac tempor mi. Morbi nec dapibus
            ligula, nec interdum felis.{" "}
          </p>
          <div />
          <p>
            Nulla feugiat elit ut libero fermentum, sed tristique metus feugiat.
            Nam imperdiet lectus orci, eget luctus nibh ullamcorper nec. Proin
            non orci blandit, dapibus libero ut, imperdiet est. Suspendisse et
            elit tempus, lacinia tellus a, condimentum diam. Fusce sed posuere
            dui. Nulla fringilla ex non ipsum malesuada bibendum. Sed eu tellus
            bibendum, sagittis orci non, rhoncus nulla.
          </p>
          <div />
          <p>
            Sed dignissim finibus vestibulum. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Duis ultrices felis nisl. Ut in mi
            ultricies, placerat ipsum ut, imperdiet ligula. Nullam bibendum et
            tellus ut sollicitudin. Morbi sit amet elit mollis, mollis leo
            ullamcorper, tempus magna. Curabitur at magna auctor, ultricies nisl
            in, suscipit ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
