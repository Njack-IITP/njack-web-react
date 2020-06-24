import React, { Component } from 'react'

export default class Topnav extends Component {

    state={
        isVisible: false
    };
    
    handleClick = ()=>{
        this.setState( prevState => ({
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
                    <h4>NJACK</h4>
                </div>
                <ul className={ `nav-links ${isVisible ? "nav-active" : "" }` }>
                    <li className={isVisible ? "nav-links-animation" : ""}><a href="#">Home</a></li>
                    <li className={isVisible ? "nav-links-animation" : ""}><a href="#">About</a></li>
                    <li className={isVisible ? "nav-links-animation" : ""}><a href="#">Events</a></li>
                    <li className={isVisible ? "nav-links-animation" : ""}><a href="#">Projects</a></li>
                </ul>

                <div className={ `burger ${isVisible ? "toggle" : "" }` } onClick={this.handleClick}>    
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        )
    }
}
