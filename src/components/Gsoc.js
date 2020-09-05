import React, { Component } from 'react'
import Profile from './common/profile'
import { Link } from 'react-router-dom';

export default class Gsoc extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <div>
        <hr className="nwoc-aper-line" />
        <br /><br />

        <div className="row-fluid">
          <div className="col">
            <h1 className={darkMode ? "gsochead dark-text-heading" : "gsochead"}>Achievers@GSoC-2020</h1>
          </div>
        </div>

        {/* <!-- visible on mobile and sm only --> */}
        <div className="row d-md-none mobile-gsoc" >
          <div className="col d-flex justify-content-center mobile-gsoc">
            <img className="img-fluid" src={require('../assets/gsoc.png')} />
          </div>
          <div className="row-fluid gsoc-text">
            <p className={darkMode ? "gsoc-para dark-text-para" : "gsoc-para"}>
              Google Summer of Code is the most prestigious
              global program focused on bringing student developers into open source software development.<br /><br />
              Congrats to all the six students of our institute who have been selected in the year 2020!
           </p>
          </div>
        </div>

        {/* <!-- visible on md and above --> */}
        <div className="container-fluid d-none d-md-block">
          <div className="row gsoc justify-content-center">
            <Profile
              name="Anmol‌ Chaddha"
              org="Hazelcast"
              git="https://github.com/chanmol1999"
              fb="https://www.facebook.com/anmol.chaddha.125"
              lin="https://www.linkedin.com/in/anmol-chaddha/"
              imgLink='./profileImages/Ellipse_49_d.png'
            />
            <Profile
              name="Ashwani Yadav"
              org="Rocket.Chat"
              git="https://github.com/ashwaniYDV/"
              fb="https://www.facebook.com/ashwani.yadav9499"
              lin="https://www.linkedin.com/in/ashwaniydv/"
              imgLink='./profileImages/Ellipse_49_d.png'
            />
            <Profile
              name="Somenath Sarkar"
              org="Xwiki"
              git=""
              fb=""
              lin="https://www.linkedin.com/in/somenath1435"
              imgLink='./profileImages/Ellipse_49_d.png'
            />
          </div>
        </div>
        <div className="row justify-content-center" style={{ marginBottom: "50px" }}>
          <Link to="/gsoc" className="btn btn-primary btn-lg gsoc-results">View All</Link>
        </div>
      </div>
    )
  }
}
