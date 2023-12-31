
import React  from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import DatesCard from './DatesCard';

const Dates = () => {
  return (
    
    
    <Container fluid="true" className="mt-5 mb-5 m-2 p-0">    
       
       <Row className="DatesRow  p-4 m-0">   
           <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts m-4">
                <h1 className='text-center p-3'><FontAwesomeIcon icon={faBuildingColumns} /></h1>
                <DatesCard/>     
            </Container>
            </Col>
            <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts m-4">
                <h1 className='text-center p-3'><FontAwesomeIcon icon={faBuildingColumns} /></h1>
                <DatesCard/>     
            </Container>
            </Col>
            <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts m-4">
                <h1 className='text-center p-3'><FontAwesomeIcon icon={faBuildingColumns} /></h1>
                <DatesCard/>     
            </Container>
            </Col>
            
        </Row>
       </Container>
      
  
  );
};

export default Dates;
