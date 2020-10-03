import React, { Component } from 'react'

export default class Homepage extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      // <!-- Home -->
      <div className="container-fluid main-homepage-container" >
        <div className="bg container-fluid" ></div>
        <div className="row" >
          <div className="col"></div>
          <div className="col-md-5 njack-block">
            <img className="njack-logo" src={require('../assets/njack-logo.svg')} alt="njack-logo" />
            <br /><br />
            <h2 className={darkMode ? "not-just-text dark-text-heading" : "not-just-text"}>Not Just Another <br />ComputerScience Klub</h2>
            <br />
            <p className={darkMode ? "home-para dark-text-para" : "home-para"}>
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
            <img className="img-fluid" alt="main pic" src={require('../assets/Main photo.png')} />
          </div>
          <div className="col"></div>
        </div>

        <div className="row justify-content-center angbrack-row">
          {/* <div className="col" style={{padding:"0"}}>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnjack.iitp%2F&tabs=timeline&width=340&height=540&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="540" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          </div> */}
          {/* <div className="col-md-5">
            <div className="row">
              <div className="col home-clip">
                <img className="home-clip-img" src={require('../assets/angbrack.svg')} />
                <p className="angbrack-para">We develop amazing web and mobile apps!</p>
              </div>
            </div>
            <div className="row">
              <div className="col home-clip">
                <img src={require('../assets/angbrack.svg')} />
                <p className="angbrack-para">We innovate in the fields of AI & Machine Learning!</p>
              </div>
            </div>
            <div className="row">
              <div className="col home-clip">
                <img src={require('../assets/angbrack.svg')} />
                <p className="angbrack-para">We compete zealously in Programming Contests and Hackathons!</p>
              </div>
            </div>
          </div> */}

        </div>



        <br />
        <hr className="nwoc-aper-line" />
        <br /><br />
      </div >
    )
  }
}
