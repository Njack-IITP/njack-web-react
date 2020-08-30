import React, { Component } from 'react'
import Homepage from './Homepage'
import About from './About'
import Events from './Events'
import Collab from './Collab'
import Footer from './Footer'
import Gsoc from './Gsoc'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid main-container">
        <div className="sidebaricon d-none d-lg-block">
          <a href="https://www.instagram.com/iit_patna/"><img src={require('../assets/Instagram – 1.png')}/></a><br /><br />
          <a href="https://www.facebook.com/njack.iitp/"><img src={require('../assets/Facebook – 1.png')} /></a><br /><br />
          <a href="https://twitter.com/njackiitp"><img src={require('../assets/Twitter – 1.png')} /></a><br /><br />
          <a href="https://github.com/Njack-IITP"><img src={require('../assets/Github – 1.png')} /></a>
        </div>
        <Homepage />
        <About />
        <Events />
        <Gsoc />
        <Collab />
        <Footer />
      </div>

    )
  }
}
