import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div class="container-fluid">
            <div class="row foot-row">
                <div class="col">
                    <div class="list-group list-group-flush">
                        <button type="button" class="list-group-item list-group-item-action" disabled>
                            <h4>Upcoming Events</h4>
                        </button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <b>NWOC</b></button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <b>Apeireon</b></button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <b>Codesprint</b></button>
                    </div>
                </div>

                <div class="col-md col-12">
                    <div class="list-group list-group-flush">
                        <button type="button" class="list-group-item list-group-item-action" disabled>
                            <h4>Contact Us</h4>
                        </button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <img height="30px" width="26px" src={require('../assets/LOCATION.png')} /><b>IIT Patna, Bihta,
                                Bihar</b></button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <img height="30px" width="26px" src={require('../assets/phone_in_talk-24px.svg')} /><b>
                                999999999999</b></button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <img height="30px" width="30px" src={require('../assets/SEND.png')} /><b>njack@iitp.ac.in</b></button>
                    </div>
                </div>

                <div class="col">
                    <div class="list-group list-group-flush">
                        <button type="button" class="list-group-item list-group-item-action" disabled>
                            <h4>NJACK</h4>
                        </button>
                        <button type="button" class="list-group-item list-group-item-action">
                            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</b></button>

                        <button type="button" class="list-group-item list-group-item-action">
                            <img height="36px" width="36px" src={require('../assets/git.png')} />
                            <img height="36px" width="36px" src={require('../assets/IG.png')} />
                            <img height="36px" width="36px" src={require('../assets/TWITTER.png')} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
