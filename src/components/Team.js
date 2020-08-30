import React, { Component } from 'react'
import { team, fields } from './../data/teamData';
import Profile from './common/profile';

export default class Team extends Component {
  state = {
    team,
    fields
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="col-7 col-sm-5 col-md-3 about">
            <img
              src={require('../assets/team.svg')}
              alt="team heading"
              className="aboutus img-fluid"
              style={{ marginTop: "57px" }}
            />
          </div>
          <div className="col"></div>
        </div>
        {this.state.fields.map(f => {
          let t = this.state.team.filter(m => m.field === f);
          return(<div className="row justify-content-center team-row">
            {t.map(m =>
              (<Profile
                name={m.name}
                position={m.position}
                field={m.field}
                git={m.git}
                fb={m.fb}
                lin={m.lin}
                imgLink={'./profileImages/Ellipse_49_d.png'}
              />))}
          </div>)
        })}

      </div>
    )
  }
}
