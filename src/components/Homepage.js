import React, { Component } from 'react'

export default class Homepage extends Component {
  render() {
    const {darkMode} = this.props;
    return (
      // <!-- Home -->
      <div className="container-fluid main-homepage-container" >
        <div className="bg container-fluid" ></div>
        <div className="row" >
          <div className="col"></div>
          <div className="col-md-5 njack-block">
            <img className="njack-logo" src={require('../assets/njack-logo.svg')} alt="njack-logo" />
            <br /><br />
            <h2 className={darkMode?"not-just-text dark-text-heading":"not-just-text"}>Not Just Another <br />ComputerScience Klub</h2>
            <br />
            <p className={darkMode?"home-para dark-text-para":"home-para"}>
              The Computer Science Club of IIT Patna!
            </p>
            <button className="btn home-but">
              <a href="#about-page" className="normal-link">
                <i class="fa fa-chevron-circle-down m-2" aria-hidden="true"></i>
                Learn More
              </a>
            </button>
          </div>

          <div className="col-md-5 m-auto">
            <img className="img-fluid" src={require('../assets/Main photo.png')} />
          </div>
          <div className="col"></div>
        </div>

        <div className="row angbrack-row">
          <div className="col home-clip">
            <img className="home-clip-img" src={require('../assets/angbrack.svg')} />
            <p className="angbrack-para">We develop amazing web and mobile apps!</p>
          </div>
          <div className="col home-clip">
            <img src={require('../assets/angbrack.svg')} />
            <p className="angbrack-para">We innovate in the fields of AI & Machine Learning!</p>
          </div>
          <div className="col home-clip">
            <img src={require('../assets/angbrack.svg')} />
            <p className="angbrack-para">We compete zealously in Programming Contests and Hackathons!</p>
          </div>

        </div>
        <br />
        <hr className="nwoc-aper-line" />
        <br /><br />
      </div>
    )
  }
}
