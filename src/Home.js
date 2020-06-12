import React, { Component } from 'react'
import TopNav from './TopNav'
import { SocialMediaIconsReact } from 'social-media-icons-react';
import recImage from './images/recImage.png'

export default class Home extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-1 leftSideBar ">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h5 className="flip">
                                r
                            </h5>
                            <h5 className="flip">
                                a
                            </h5><h5 className="flip">
                                h
                            </h5><h5 className="flip">
                                i
                            </h5><h5 className="flip">
                                B
                            </h5>
                            <pre className="space"> </pre>
                            <h5 className="flip">
                                a
                            </h5><h5 className="flip">
                                n
                            </h5><h5 className="flip">
                                t
                            </h5><h5 className="flip">
                                a
                            </h5><h5 className="flip">
                                P
                            </h5>
                            <pre className="space"> </pre>
                            <h5 className="flip">
                                T
                            </h5><h5 className="flip">
                                I
                            </h5>
                            <h5 className="flip">
                                I
                            </h5>
                            <br />
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(249,245,245,1)" backgroundColor="rgba(10,5,5,1)" iconSize="9" roundness="50%" url="https://github.com/Njack-IITP" size="24" />
                            <br />
                            <SocialMediaIconsReact borderColor="rgba(6,7,7,0.99)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(15,7,7,1)" backgroundColor="rgba(255,255,255,1)" iconSize="8" roundness="50%" url="https://www.facebook.com/njack.iitp/" size="24" />
                        </div>

                        <div />
                        <div className="col"></div>

                        <div className="col-sm-auto rectangle">
                            <h2>Not Just Another Coding Club</h2>
                            <div className="row align-items-center">
                                <div className="col-sm-auto">ajdfgajgfajdhafdaf</div>
                                <div className="col-sm-auto">
                                    <img src={recImage} alt="img"></img>
                                </div>
                            </div>

                        </div>

                        <div className="col"></div>

                    </div>
                </div>
            </div>
        )
    }
}
