import React, { Component } from 'react'
import Profile from './common/profile'

export default class Gsoc extends Component {
	render() {
		return (
			<div>
				<hr className="nwoc-aper-line" />
				<br /><br />

				<div className="row-fluid">
					<div className="col gsochead">
						GSOC Results @2020
                     </div>
				</div>

				{/* <!-- visible on mobile and sm only --> */}
				<div className="row d-md-none mobile-gsoc" >
					<div className="col d-flex justify-content-center mobile-gsoc">
						<img className="img-fluid" src={require('../assets/gsoc.png')} />
					</div>
					<div className="row-fluid gsoc-text">
						<p className="gsoc-para">
							Google Summer of Code is the most prestigious
                            global program focused on bringing student developers into open source software development.<br /><br />
                            Congrats to all the six students of our institute who have been selected in the year 2020!
                    </p>
						<button className="btn btn-danger gsoc-results">View Results</button>
					</div>
				</div>

				{/* <!-- visible on md and above --> */}
				<div className="container-fluid d-none d-md-block">
					<div className="row gsoc justify-content-center">
						<Profile
							name="Abhishek Chopra"
							position="Overall Co-ordinator"
							imgLink='./profileImages/Ellipse_49_d.png'
							lin='https://www.linkedin.com/in/abhiii13/'
							git='https://github.com/abhishekchopra13/'
							fb='https://www.facebook.com/abhishekchopra13'
						/>
						{/* <div className="col-md-3 profile">
							<img className="img-fluid profile-img" src={require('../assets/Ellipse_49_d.png')} />
							<p className="profile-details">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
						</div> */}
						<div className="col-md-3 profile">
							<img className="img-fluid profile-img" src={require('../assets/Ellipse_49_ea.png')} />
							<p className="profile-details">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                             </p>
						</div>
						<div className="col-md-3 profile">
							<img className="img-fluid profile-img" src={require('../assets/Ellipse_49.png')} />
							<p className="profile-details">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    		</p>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
