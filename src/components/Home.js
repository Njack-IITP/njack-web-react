import React, { Component } from 'react'
import About from './About'
import Events from './Events'
import Collab from './Collab'
import Footer from './Footer'
export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid main-container">
                <div className="sidebaricon d-none d-lg-block">
                    <img src={require('../assets/Instagram – 1.png')} /><br /><br />
                    <img src={require('../assets/Facebook – 1.png')} /><br /><br />
                    <img src={require('../assets/Twitter – 1.png')} /><br /><br />
                    <img src={require('../assets/Github – 1.png')} />
                </div>
                <About />
                <Events />
                <Collab />
                <Footer />
            </div>
        )
    }
}
