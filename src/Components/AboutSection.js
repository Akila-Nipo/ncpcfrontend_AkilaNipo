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
                    <Carousel className="card-carousel" interval={6000}>
                        <Carousel.Item>
                            <img className="carouselImg" src={green} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={lab} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={seminar} alt=""/>
                        </Carousel.Item>

                    </Carousel>
                    <p className="alumniDescription text-white">
                        <hr/>
                        The Department of Computer Science and Engineering, Jahangirnagar University, has been striving to cultivate visionary programmers who can lead the next tech wave. With a vision to empower students with programming skills, the department offers special facilities, including a dedicated lab just for competitive programmers. This space is open 24/7, giving students the chance to practice their coding skills anytime they want. Apart from this, the department places a significant emphasis on research. Teachers actively support and encourage students to engage in programming and research pursuits, providing guidance and mentorship along the way.
                    </p>
                </Col>
                <Col md={4} lg={4} sm={12} className="m-0 p-0" >
                    <div className="noticeDivRight">
                        <div className="noticeDivRightHeading">
                            <h3 className="noticeTitle text-white"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
                        </div>
                        <a href="facebook.com/abc">1. Registration Rules</a>
                        <hr/>
                        <a href="facebook.com/abc">2. Accommodation</a>
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
                                <iframe width="320" height="315" src="https://www.youtube.com" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <h6 className="whiteTitle">JU CSE</h6>
                            </Carousel.Item>
                            <Carousel.Item>
                                <iframe width="320" height="315" src="https://www.youtube.com" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <h6 className="whiteTitle">JU CSE</h6>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;
