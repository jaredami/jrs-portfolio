import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div id="work-container">
        <h1 id="work-header" style={{ opacity: this.props.opacity }}>
          My Work
        </h1>
        <div id="work-grid" style={{ opacity: this.props.opacity }}>
          <div className="project">
            <img
              className="project-screenshot"
              src={require(`../images/integral.jpg`)}
              alt="integral"
            />
            <div className="project-info">
              <h1 className="project-name">Integral</h1>
              <p className="project-description">
                A site that explains the concept behind my band’s last
                full-length album, "Integral". The concept is based on{" "}
                <a
                  href="https://www.researchgate.net/profile/Petra_Carman/publication/283009284/figure/fig4/AS:654044787904524@1532947837494/Spiral-Dynamics-model-duplication-from-Roemischer-2002.png"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Spiral Dynamics
                </a>
                , which is a model for understanding the evolution of human
                consciousness. I authored the textual content on this site as a
                means of explaining the basics of Spiral Dynamics and how it
                relates to the record.
              </p>
              <ul className="project-tools-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="hvr-bounce-to-top"
                  href="https://github.com/jaredami/integral-site"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  className="hvr-bounce-to-top"
                  href="https://integral.netlify.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  External
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img
              className="project-screenshot"
              src={require(`../images/f3.jpg`)}
              alt="family fun and fitness"
            />
            <div className="project-info">
              <h1 className="project-name">Family Fun &amp; Fitness</h1>
              <p className="project-description">
                A complete redesign of the{" "}
                <a
                  href="http://familyfunfit.com/newsite/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  website
                </a>{" "}
                of a local fitness center. This was my first foray into
                WordPress and my first fully responsive website. I developed my
                own theme from scratch and used plugins to re-create the
                original site’s announcements and calendar features. The design
                was approved by the owner, but unfortunately was not used due to
                the club’s being sold shortly before I completed the project.
              </p>
              <ul className="project-tools-list">
                <li>WordPress</li>
                <li>JavaScript</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>HTML5</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="hvr-bounce-to-top"
                  href="https://github.com/jaredami/Family-Fun-and-Fitness"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  className="hvr-bounce-to-top"
                  href="https://jareds.sgedu.site/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  External
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img
              className="project-screenshot"
              src={require(`../images/drum-machine.jpg`)}
              alt="drum-machine"
            />
            <div className="project-info">
              <h1 className="project-name">Drum Machine</h1>
              <p className="project-description">
                An app that allows the user to create a drum beat by selecting
                nodes on a grid. This was my first major project completed using
                React and required me to refine my understanding of using
                JavaScript to interact with the HTML DOM Audio Object.
              </p>
              <ul className="project-tools-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>HTML5</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="hvr-bounce-to-top"
                  href="https://github.com/jaredami/drum-machine"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  className="hvr-bounce-to-top"
                  href="https://jrs-drum-machine.netlify.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  External
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img
              className="project-screenshot"
              src={require(`../images/meditation-timer-2.jpg`)}
              alt="meditation timer"
            />
            <div className="project-info">
              <h1 className="project-name">Meditation Timer</h1>
              <p className="project-description">
                An app that enables the user to train in the Vipassana style of
                meditation, the goal of which is to maintain clear and
                undistracted attention on one’s breath. The point of the app is
                to assist the meditator in honing their skills of attention by
                providing a challenge that is continuously responsive to their
                current level of ability.
              </p>
              <ul className="project-tools-list">
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>HTML5</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="hvr-bounce-to-top"
                  href="https://codepen.io/yaredami/pen/NzeoYe?editors=0010"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  className="hvr-bounce-to-top"
                  href="https://codepen.io/yaredami/full/NzeoYe"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  External
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img
              className="project-screenshot"
              src={require(`../images/simon.jpg`)}
              alt="simon game"
            />
            <div className="project-info">
              <h1 className="project-name">Simon Game</h1>
              <p className="project-description">
                A virtual version of the classic electronic memory game.
              </p>
              <ul className="project-tools-list">
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="hvr-bounce-to-top"
                  href="https://codepen.io/yaredami/pen/MOvmrO?editors=0010"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  className="hvr-bounce-to-top"
                  href="https://codepen.io/yaredami/full/MOvmrO"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  External
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img
              className="project-screenshot"
              src={require(`../images/calculator.jpg`)}
              alt="calculator"
            />
            <div className="project-info">
              <h1 className="project-name">Calculator</h1>
              <p className="project-description">A virtual calculator.</p>
              <ul className="project-tools-list">
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>CSS3</li>
                <li>HTML5</li>
              </ul>
              <div className="project-links-container">
                <a
                  className="hvr-bounce-to-top"
                  href="https://codepen.io/yaredami/pen/pWdzrY?editors=0010/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Code
                </a>
                <a
                  className="hvr-bounce-to-top"
                  href="https://codepen.io/yaredami/full/pWdzrY"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  External
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
