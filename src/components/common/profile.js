import React from 'react'

export default function Profile(props) {
    const {name, position, field, git, fb, lin, imgLink} = props;
    return (
        <div className="col-md-3 profile">
            <img className="img-fluid profile-img" src={require(''+imgLink)} alt="profile photo"/>
            <p className="profile-details">
                {name}<br/>
                {position}<br/>
                {position!=="Overall Co-ordinator" && field}<br/>
                {lin && <a href={lin} target="_blank"><i className="fa fa-linkedin-square fa-lg m-2" style={{color:"white"}}/></a>}
                {git && <a href={git} target="_blank"><i className="fa fa-github-square fa-lg m-2" style={{color:"white"}}/></a>}
                {fb && <a href={fb} target="_blank"><i className="fa fa-facebook-square fa-lg m-2" style={{color:"white"}}/></a>}
            </p>
        </div>
    )
}
