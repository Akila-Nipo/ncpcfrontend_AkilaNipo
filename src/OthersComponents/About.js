import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";

function About(props) {

    useEffect(()=>{
        axios.get("localhost:8080/")
            .then((res)=>{
                console.log(res);
            })
    },[]);

    return (
        <Container fluid="true" className="aboutJuBanner">
            <Row className="mx-0 px-0">
                <Col className="mx-0 px-0">

                </Col>
            </Row>
        </Container>
    );
}

export default About;