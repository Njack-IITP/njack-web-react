import React, { Component } from 'react'
import About from './About'
import Events from './Events'
export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid main-container">
                <About />
                <Events />

            </div>
        )
    }
}
