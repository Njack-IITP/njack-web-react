import React, { Component } from 'react'

export default class Events extends Component {
  render() {
    return (
      <div className="container-fluid" id="events-page">

        <br /><br /><br />
        <hr className="nwoc-aper-line" />

        <div className="row-fluid nwocAper">
          <div className="row nwocrow">
            <div className="col"></div>
            <div className="col-sm-5 d-flex align-items-center">
              <img className="img-fluid nwoc-img" src={require('../assets/nwoc.png')} />
            </div>
            <div className="col-sm-5">
              <h1 className="nwochead">NWOC</h1>
              <p>NWoC (NJACK Winter of Code) is a program by NJACK that helps students
              understand the paradigm of Open Source contribution and gives them real world software development experience.
              </p>
              <div className="row justify-content-center">
                <button className="btn btn-primary btn-lg">
                  <a className="normal-link" href="https://njackwinterofcode.github.io/">See More</a>
                </button>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <br /><br /><br />
          <hr className="nwoc-aper-line" />
          <br /><br />

          <div className="row nwocrow  flex-column-reverse flex-sm-row">
            <div className="col"></div>
            <div className="col-sm-5 apeireon">
              <h1 className="nwochead">APEIREON</h1>
              <p> Apeireon is the annual Coding fest of the Department of Computer Science and Engineering, IIT Patna
              packed with a multitude of fun events and workshops.
              </p>
              <div className="row justify-content-center">
                <button className="btn btn-primary btn-lg">
                  <a className="normal-link" href="https://apeireon.iitp.ac.in/">See More</a>
                </button>
              </div>
            </div>
            <div className="col-sm-5 d-flex align-items-center">
              <img className="img-fluid apeireon-img" src={require('../assets/apeireon.svg')} />

            </div>
            <div className="col"></div>
          </div>
        </div>

      </div>
    )
  }
}
