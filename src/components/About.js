import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class About extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="row aboutrow">
                    <Col></Col>
                    <Col md={4} sm={5} xs={7} className="about">
                        <Image className="aboutus" src={require('../assets/aboutus.svg')} fluid />
                    </Col>
                    <Col></Col>
                </Row>

                <div class="row flex-column-reverse flex-sm-row">
                    <div class="col-sm-5 whatwedo my-auto">
                        <h2><b>What We Do!</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veni. Ut enim ad minim veni.
                    </p>
                    </div>
                    <div class="col-sm-7 whatwedo">
                        <img class="img-fluid" src={require('../assets/ID2kids_1adult_v03.png')} alt="nice_img" />
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                           </p>
                     </div>
                </div>
            </Container>
        )
    }
}
