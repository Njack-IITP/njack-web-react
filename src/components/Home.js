import React, { Component } from 'react'
import About from './About'
import Events from './Events'
import Collab from './Collab'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid main-container">
                <About />
                <Events />
                <Collab />
            </div>
        )
    }
}
