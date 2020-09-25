import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default class About extends Component {
    render() {
        const { darkMode } = this.props;
        return (
            <Container fluid id="about-page">
                <Row className="row">
                    <Col></Col>
                    <Col md={4} sm={5} xs={7} className="about">
                        <Image className="aboutus" src={darkMode ? require("../assets/aboutusdark.svg") : require('../assets/aboutus.svg')} fluid />
                    </Col>
                    <Col></Col>
                </Row>

                <div class="row flex-column-reverse flex-sm-row">
                    <div class="col-sm-5 whatwedo my-auto">
                        <h2 className={darkMode ? "dark-text-heading" : ""}><b>What We Do!</b></h2>
                        {/* <p className={darkMode?"dark-text-para":""}>We strive for excellence in the vast field of Computer Science including Artificial Intelligence, 
                        Software Development, Competitive Programming and many more....
                    </p> */}
                        <div className="col" style={{ padding: "0" }}>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnjack.iitp%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div class="col-sm-7 whatwedo">
                        <img class="img-fluid" src={require('../assets/ID2kids_1adult_v03.png')} alt="nice_img" />
                        <br />
                        <p className={darkMode ? "dark-text-para" : ""}>We are a group of students from IIT Patna with the aim of learning new technologies and
                        developing an innovative approach towards problem-solving!
                        </p>
                    </div>
                </div>
            </Container>
        )
    }
}
