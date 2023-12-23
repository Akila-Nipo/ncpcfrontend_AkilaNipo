import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Sponsor(props) {
    return (
        <Container fluid="true" className="text-center supportDiv mt-5">
            <Row className="m-0">
                <Col lg={6} md={6} sm={12}>
                    <h4 className="title text-dark">Gold Sponsors</h4>
                    <a href="https://therapbd.com/" target="blank"><img className="supportImg" src="https://icpc.bubt.edu.bd/assets/img/sponsors/therap.png" alt=""/></a>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <h4 className="title text-dark">Others Sponsors</h4>
                    <img className="supportImg" src="https://icpc.bubt.edu.bd/assets/img/sponsors/AFREEN-ENTERPRISE-Main-Logo.png" alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default Sponsor;