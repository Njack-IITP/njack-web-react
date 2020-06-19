import React, { Component } from 'react'

export default class Collab extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center collab">
                    <div className="col-12 collab-head">Collaborations</div>
                    <div className="col-4 d-flex justify-content-center">
                        <img className="img-fluid" src={require('../assets/Image_11.png')} />
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <img className="img-fluid" src={require('../assets/Image_13.png')} />

                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <img className="img-fluid" src={require('../assets/github.png')} />

                    </div>
                </div>
            </div>
        )
    }
}
