import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row foot-row">

          <div class="col-md-4">
            <h4>NJACK</h4>
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</b>
            <br />
            <br />
            <a href="https://github.com/Njack-IITP"><img height="36px" width="36px" src={require('../assets/git.png')} /></a>
            <a href="https://www.instagram.com/iit_patna/"><img height="36px" width="36px" src={require('../assets/IG.png')} /></a>
            <a href="https://twitter.com/njackiitp"><img height="36px" width="36px" src={require('../assets/TWITTER.png')} /></a>
          </div>
        </div>
      </div>

    )
  }
}
