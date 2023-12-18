import React, {Fragment} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import img1 from "../Assets/Images/alumni_photos/first.png";
import fifteen from "../Assets/Images/alumni_photos/2015.png";
import img6 from "../Assets/Images/alumni_photos/sixth.png";
import _2017 from "../Assets/Images/alumni_photos/2017.png";
import _2021 from "../Assets/Images/alumni_photos/2021.png";
import { faAward} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Alumni1(props) {
    return (
        <Fragment>
            <Container fluid="true" className='alumniFullBanner text-center pb-5'>
                <h4 className="title pt-4 pb-3">OUR ALUMNI'S HISTORY</h4>
                <Row className="p-0 mx-0 rowBackground">
                    <Col md={4} lg={4} sm={12} className="m-0 px-0 alumniColumn">
                        <h3 className="alumniTitle"><FontAwesomeIcon icon={faAward} className="mx-2"/>ALUMNI SUCCESS STORIES</h3>
                        <hr/>
                        <p className="alumniDescription">The Department of Computer Science and Engineering,Jahangirnagar University, has seen a constellation of alumni shining brightly in various programming contests, both nationally and internationally. These individuals have not just secured good positions but have also etched the department's and the university's name in the hall of fame within the tech world.</p>
                    </Col>
                    <Col md={8} lg={8} sm={12} className="m-0 p-0">
                        <Carousel>
                        <Carousel.Item>
                                <div className="carouselItemContainerAlumni">
                                    <img className="carouselImgAlumni" src={fifteen} alt=""/>
                                    <div className="carouselCaptionAlumni">
                                        <h3 className="whiteTitle">JU_Assassins</h3>
                                        <p className="alumniDescription text-white">Aninda Majumder(CSE), Md. Nafis Sadique(IIT), Suman Bhadra(CSE) participated at the ACM-ICPC 2015 World Finals and solved 6 problems.</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carouselItemContainerAlumni">
                                    <img className="carouselImgAlumni" src={img6} alt=""/>
                                    <div className="carouselCaptionAlumni">
                                        <h3 className="whiteTitle">JU_O(N^3) </h3>
                                        <p className="alumniDescription text-white">Md. Nafis Sadique(IIT), Niloy Datta(IIT), Raihat Zaman Neloy(CSE) secured 50th place at the ACM-ICPC 2016 World Finals solving 6 problems. </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carouselItemContainerAlumni">
                                    <img className="carouselImgAlumni" src={_2017} alt=""/>
                                    <div className="carouselCaptionAlumni">
                                        <h3 className="whiteTitle">JU_Circavex </h3>
                                        <p className="alumniDescription text-white">Bir Bahadur Khatri, Md Sahedul Islam Sohel, Raihat Zaman Neloy at the ACM-ICPC 2017 World Finals. </p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carouselItemContainerAlumni">
                                    <img className="carouselImgAlumni" src={_2021} alt=""/>
                                    <div className="carouselCaptionAlumni">
                                        <h3 className="whiteTitle">JU_Glass_Half_Full</h3>
                                        <p className="alumniDescription text-white">Anik Sarker, Chayan Kumar Ray, Sakib Hasan at the ICPC 2021 World Finals Dhaka.</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carouselItemContainerAlumni">
                                    <img className="carouselImgAlumni" src={img1} alt=""/>
                                    <div className="carouselCaptionAlumni">
                                    <h3 className="whiteTitle">JU_kzvd4729</h3>
                                        <p className="alumniDescription text-white">JU_kzvd4729 led by Mahmudul Hasan Shanto(CSE-46), Richita Khandakar Rifat(CSE-46) and Alif Al Hasan(CSE-47) secured 3rd place at the 2021 ICPC Asia Regional Dhaka Contest.</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Alumni1;

