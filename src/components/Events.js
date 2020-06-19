import React, { Component } from 'react'

export default class Events extends Component {
    render() {
        return (
            <div className="container-fluid">

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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veni.tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                            <div className="row justify-content-center">
                                <button className="btn btn-primary btn-lg">Open NWOC</button>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veni.tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                            <div className="row justify-content-center">
                                <button className="btn btn-primary btn-lg">See More</button>
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
