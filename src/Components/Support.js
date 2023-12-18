import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import digital from "../Assets/Images/digital-bangladesh.png";
import ict from "../Assets/Images/ICT_Division.png";
import bd from "../Assets/Images/bcc_logo.png";
import ju_cse from "../Assets/Images/dept/ju_cse.png";

function Support(props) {
    return (
        <Container fluid="true" className="text-center supportDiv mt-5">
            <Row className="m-0 p-0">
                <h4 className="boldTitle text-dark">Hosted By</h4>
                <div>
                    <img className="supportImgJU" src={ju_cse} alt=""/>
                </div>
            </Row>
            <Row className="mx-0 p-0 mt-5">
                <h4 className="title text-dark mb-4">Supported By</h4>
                <Col sm={4} md={4} lg={4}>
                    <img className="supportImg mt2" src={digital} alt=""/>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <img className="supportImg" src={bd} alt=""/>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <img className="supportImg" src={ict} alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default Support;