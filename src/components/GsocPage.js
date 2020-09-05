import React, { Component } from 'react';
import { gsoc } from './../data/gsocData';
import Profile from './common/profile';

export default class GsocPage extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <div className="container-fluid">
        <div className="row" style={{marginBottom:"60px"}}>
          <div className="col"></div>
          <div className="col-7 col-sm-5 col-md-3 about">
            <img
              src={darkMode ? require('../assets/gsocdark.svg') : require('../assets/gsoc.svg')}
              alt="team heading"
              className="aboutus img-fluid"
              style={{ marginTop: "57px" }}
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row justify-content-center">
          {gsoc.map(m =>
            (<Profile
              name={m.name}
              org={m.org}
              git={m.git}
              fb={m.fb}
              lin={m.lin}
              imgLink={'./profileImages/Ellipse_49_d.png'}
            />))}
        </div>
      </div>
    )
  }
}