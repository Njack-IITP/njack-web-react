import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {darkMode} = this.props;
    return (
      <div class="container-fluid">
        <div class="row foot-row">

          <div class="col-md-4">
            <h4 className={darkMode?"dark-text-heading":""} >NJACK</h4>
            <p className={darkMode?"dark-text-para":""}><b>Not Just Another ComputerScience Klub<br/>Indian Institute of Technology Patna<br/>Bihta, Bihar-801106</b></p>
            <a href="https://github.com/Njack-IITP">
              <img alt="git icon" height="36px" width="36px" src={require('../assets/git.png')} />
            </a>
            <a href="https://www.instagram.com/iit_patna/">
              <img alt="instagram icon" height="36px" width="36px" src={require('../assets/IG.png')} />
            </a>
            <a href="https://twitter.com/njackiitp">
              <img alt="twitter icon" height="36px" width="36px" src={require('../assets/TWITTER.png')} />
            </a>
          </div>
        </div>
      </div>

    )
  }
}
