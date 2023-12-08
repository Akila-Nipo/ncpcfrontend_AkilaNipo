import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import aboutNcpc from "../Assets/Images/aboutNcpc.png";

function AboutNcpc() {
    return (
       <Container fluid="true" className="text-center aboutNcpc p-5">
           <Row className="m-0 aboutNcpcRow">
               <h4 className="title pb-4">ABOUT NCPC</h4>
               <Col className="ncpcImgDiv m-0 p-0" md={12} lg={5} sm={12}>
                   <img src={aboutNcpc} alt="aboutNcpc"/>
               </Col>
               <Col className="aboutNcpcDescription" md={12} lg={7} sm={12}>
                   <h4 className="title text-dark">ACM-ICPC ASIA REGIONAL DHAKA SITE EVENT - 2014</h4>
                   <p className="alumniDescription text-dark">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi non numquam provident quisquam? Ad consequuntur delectus expedita fugit illo ipsam, minus nulla placeat porro provident qui tempore unde voluptatibus.
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, atque beatae eligendi eos esse fugit minima nihil, nobis non odio officia perferendis quibusdam quos soluta, tempora velit voluptatem voluptatibus.
                   </p>
               </Col>
           </Row>
       </Container>
    );
}

export default AboutNcpc;