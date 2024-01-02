
import React  from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import DatesCard from './DatesCard';
import MainContestCard from './MainContestCard';
import PaymentDeadlineCard from './PaymentDeadlineCard';
const Dates = () => {
  return (
    
    
    <Container fluid="true" className="mb-5 p-0"> 
       <Row className="DatesRow mt-4 p-4">  
        <h4 className='text-center pt-0 importantDates'>Important Dates</h4> 
           <Col className="DatesCol m-0 mb-5 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts m-5">
                <h1 className='text-center p-3'><FontAwesomeIcon icon={faCalendarDays} size="l" /></h1>
                <DatesCard/>     
            </Container>
            </Col>
            <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts m-5">
                <h1 className='text-center p-3'><FontAwesomeIcon icon={faCalendarDays} size="l"/></h1>
                <MainContestCard/>     
            </Container>
            </Col>
                 <Col className="DatesCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="Dates_Counts m-5">
                <h1 className='text-center p-3'><FontAwesomeIcon icon={faCalendarDays} size="l"/></h1>
                <PaymentDeadlineCard/>     
            </Container>
            </Col>
            
        </Row>
        
       </Container>
      
  
  );
};

export default Dates;
