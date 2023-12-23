import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Dates(props) {
    return (
        <Container fluid="true" className="datesTop mb-4">
            <Row className="mx-0 px-0 overLayDatesTop">
                <Col className="mx-0 px-0">
                    <div className="text-center overlayContentDatesTop">
                        <h4 className="title text-light">Important Dates</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Dates;