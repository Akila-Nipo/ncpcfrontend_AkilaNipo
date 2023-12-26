import React from 'react';
import {Col, Container, Row,Carousel} from "react-bootstrap";
import _201 from "../Assets/Images/dept/lab_201.png";
import green from "../Assets/Images/dept/green.png";
import seminar from "../Assets/Images/dept/seminar.png";
import _203_contest from "../Assets/Images/dept/_203_contest.jpg";
import codeElevate_302 from "../Assets/Images/dept/codeElevate_302.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from "@fortawesome/free-solid-svg-icons";

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
                            <img className="carouselImg" src={codeElevate_302} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={_201} alt=""/>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img className="carouselImg" src={_203_contest} alt=""/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carouselImg" src={seminar} alt=""/>
                        </Carousel.Item>

                    </Carousel>
                    <p className="alumniDescription text-black">
                        <hr/>
                        The Department of Computer Science and Engineering, Jahangirnagar University, has been striving to cultivate visionary programmers who can lead the next tech wave. With a vision to empower students with programming skills, the department offers special facilities, including a dedicated lab just for competitive programmers.Apart from this, the department places a significant emphasis on research. Teachers actively support and encourage students to engage in programming and research pursuits, providing guidance and mentorship along the way.
                    </p>
                </Col>
                <Col md={4} lg={4} sm={12} className="m-0 p-0" >
                    <div className="noticeDivRight">
                        <div className="noticeDivRightHeading">
                            <h3 className="noticeTitle"> <FontAwesomeIcon icon={faBell} beatFade size="l" /><span>     </span>Notice</h3>
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
                        <h5 className="noticeTitleSpeech">SPEECH</h5>
                        <Carousel className='carouselVideo'>
                            <Carousel.Item>
                                <iframe width="390" height="365" src="https://www.youtube.com/embed/UF8uR6Z6KLc?si=LyrWIMcVg5Hhjcrb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <h6 className="whiteTitle text-black">JU CSE</h6>
                            </Carousel.Item>
                            <Carousel.Item>
                                <iframe width="390" height="365" src="https://www.youtube.com/embed/UF8uR6Z6KLc?si=LyrWIMcVg5Hhjcrb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                <h6 className="whiteTitle text-black">JU CSE</h6>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;
