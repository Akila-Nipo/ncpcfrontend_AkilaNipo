import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";

function About() {

    useEffect(()=>{
        axios.get("http://146.190.80.140:8080/test")
            .then((res)=>{
                // console.log(res);
            })
    },[]);

    return (
        <Container fluid="true" className="aboutJuBanner">
            <Row className="mx-0 px-0 overLay">
                <Col className="mx-0 px-0">
                    <div className="text-center overlayContent">
                        <h4 className="title text-light">About JU CSE</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;