import React, { Component } from 'react'

export default class Homepage extends Component {
    render() {
        return (
            // <!-- Home -->
            <div class="container-fluid main-homepage-container" id="home-page">
                <div class="bg container-fluid"></div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col-md-5 njack-block">
                        <img class="njack-logo" src={require('../assets/Njack_logo.png')} alt="njack-logo" />
                        <br /><br />
                        <h2 class="not-just-text">Not Just Another <br/>Computer Science Club</h2>
                        <br />
                        <p class="home-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Dignissim suspendisse.
                         </p>
                        <button class="btn btn-lg home-but">Learn More</button>
                    </div>

                    <div class="col-md-5 m-auto">
                        <img class="img-fluid" src={require('../assets/Main photo.png')} />
                    </div>
                    <div class="col"></div>
                </div>

                <div class="row angbrack-row">
                    <div class="col home-clip">
                        <img class="home-clip-img" src={require('../assets/angbrack.svg')} />
                        <p class="angbrack-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                    <div class="col home-clip">
                        <img src={require('../assets/angbrack.svg')} />
                        <p class="angbrack-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                    <div class="col home-clip">
                        <img src={require('../assets/angbrack.svg')} />
                        <p class="angbrack-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>

                </div>
                <br />
                <hr class="nwoc-aper-line" />
                <br /><br />
            </div>
        )
    }
}
