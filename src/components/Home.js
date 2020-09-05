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
    const {darkMode} = this.props;
    return (
      <div className="container-fluid main-container" id="home">
        <Sidebar/>
        <Homepage darkMode={darkMode}/>
        <About darkMode={darkMode}/>
        <Events darkMode={darkMode}/>
        <Gsoc darkMode={darkMode}/>
        <Collab />
        <Footer darkMode={darkMode}/>
      </div>

    )
  }
}
