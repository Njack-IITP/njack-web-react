import React, { Component } from 'react'

export default class Topnav extends Component {
    render() {
        return (
            // <!-- navbar -->
            <nav>
                <div class="logo">
                    <h4>NJACK</h4>
                </div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>

                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        )
    }
}
