import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default class Topnav extends Component {

    state = {
        isVisible: false
    };

    handleClick = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
        console.log(this.state);
    };
    
    render() {
        const isVisible = this.state.isVisible;
        return (
            // <!-- navbar -->
            <nav>
                <div className="logo">
                    <Link style={{ textDecoration: "none", color: "white" }} smooth to="/#home" ><h4>NJACK</h4></Link>
                </div>
                <ul className={`nav-links ${isVisible ? "nav-active" : ""}`}>
                    <li className={isVisible ? "nav-links-animation" : ""}><Link smooth to="/#home">Home</Link></li>
                    <li className={isVisible ? "nav-links-animation" : ""} ><Link smooth to="/#events">Events</Link></li>
                    <li className={isVisible ? "nav-links-animation" : ""}><Link to="/team">Team</Link></li>
                    <li className={isVisible ? "nav-links-animation" : ""}><a href="https://www.iitp.ac.in/">IIT Patna</a></li>
                </ul>

                <div className={`burger ${isVisible ? "toggle" : ""}`} onClick={this.handleClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        )
    }
}
