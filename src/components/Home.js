import React, { Component } from 'react'
import Homepage from './Homepage'
import About from './About'
import Events from './Events'
import Collab from './Collab'
import Footer from './Footer'
import Gsoc from './Gsoc'
import Sidebar from './Sidebar'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid main-container">
        <Sidebar/>
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
