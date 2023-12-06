import React from 'react';
import {Col, Container, Row,Carousel} from "react-bootstrap";
import lab from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";
import seminar from "../Assets/Images/dept/seminar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function AboutSection(props) {
    return (
        <Container fluid="true" className="text-center honorContainer">
            <Row className="p-0 m-0">
                <Col className="noticeDivLeft m-0 p-0" md={8} lg={8} sm={12}>
                    <h4 className="noticeTitle text-center">About JU CSE</h4>
                    <Carousel className="card-carousel">
                        <Carousel.Item>
                            <img className="carouselImg" src={green} alt=""/>
                            <Carousel.Caption className="carouselCaptionDivLeftHonor">
                                <h3 className="whiteTitle">Front View of Department</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={lab} alt=""/>
                            <Carousel.Caption className="carouselCaptionDivLeftHonor">
                                <h3 className="whiteTitle">Programming LAB</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={seminar} alt=""/>
                            <Carousel.Caption className="carouselCaptionDivLeftHonor">
                                <h3 className="whiteTitle">SEMINAR LIBRARY</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                    <p className="alumniDescription text-white">
                        <hr/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquid at blanditiis commodi consequuntur corporis deleniti doloremque dolorum ducimus eos error, expedita fuga illo inventore libero natus non nulla numquam porro possimus qui quibusdam quidem, quis quo recusandae sit totam vero vitae voluptatum? Aliquid error inventore optio quaerat tempora.
                    </p>
                </Col>
                <Col md={4} lg={4} sm={12} className="m-0 p-0" >
                    <div className="noticeDivRight">
                        <div className="noticeDivRightheading">
                            <h3 className="noticeTitle text-white"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
                        </div>
                        <a href="facebook.com/abc">1. Registration Rules</a>
                        <hr/>
                        <a href="facebook.com/abc">2. Accomodation</a>
                        <hr/>
                        <a href="facebook.com/abc">3. Payment Details</a>
                        <hr/>
                        <a href="facebook.com/abc">4. Main Contest Date</a>
                        <hr/>
                        <a href="facebook.com/abc" className="seeMoreLink">See More...</a>
                        <hr/>
                    </div>
                    <div className="carouselItemContainerSpeech">
                        <h5 className="noticeTitleSpeech"><FontAwesomeIcon icon={faUser}/>Speech from Respected Personalities </h5>
                        <hr/>
                        <Carousel className='carouselVideo'>
                            <Carousel.Item>
                                <iframe width="320" height="315" src="https://www.youtube.com/embed/bC4kQ2-kHZE?si=YNCq8mEbLr2EOU7P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <h6 className="whiteTitle">Abraham Lincoln</h6>
                            </Carousel.Item>
                            <Carousel.Item>
                                <iframe width="320" height="315" src="https://www.youtube.com/embed/UF8uR6Z6KLc?si=vqzt33t2fjHVALCL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <h6 className="whiteTitle">Steve Jobs</h6>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;
