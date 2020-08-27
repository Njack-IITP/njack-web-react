import React from 'react'

export default function Profile(props) {
    const {name, position, field, git, fb, lin, imgLink} = props;
    return (
        <div className="col-md-3 profile">
            <img className="img-fluid profile-img" src={require(''+imgLink)} />
            <p className="profile-details">
                {name}<br/>
                {position}<br/>
                {position!=="Overall Co-ordinator" && field}<br/>
                <a href={lin}><i className="fa fa-linkedin-square fa-lg" style={{color:"white"}}/></a>
                <a href={git}><i className="fa fa-github-square fa-lg m-2" style={{color:"white"}}/></a>
                <a href={fb}><i className="fa fa-facebook-square fa-lg" style={{color:"white"}}/></a>
            </p>
        </div>
    )
}
