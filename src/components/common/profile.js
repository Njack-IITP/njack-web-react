import React from 'react'

export default function Profile(props) {
    const {name, org, position, field, git, fb, lin, imgLink} = props;
    return (
        <div className="col-sm-6 col-md-3 profile" style={{margin:"40px"}}>
            <img className="img-fluid profile-img" src={require(''+imgLink)} alt="profile"/>
            <p className="profile-details">
                {name}<br/>
                {org}{org && <br/>}
                {position}{position && <br/>}
                {position!=="Overall Co-ordinator" && field}{field && <br/>}
                {lin && <a href={lin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-lg m-2" style={{color:"white"}}/></a>}
                {git && <a href={git} target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-lg m-2" style={{color:"white"}}/></a>}
                {fb && <a href={fb} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-lg m-2" style={{color:"white"}}/></a>}
            </p>
        </div>
    )
}
