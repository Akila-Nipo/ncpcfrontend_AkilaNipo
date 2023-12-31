
import React  from 'react';
import CountdownTimer from '../OthersComponents/CountdownTimer';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
const CountApp = () => {
  return (
    
    
    <Container fluid="true" className="App mt-5 mb-5 m-2 p-0">    
       <h4 className='text-center p-4'>NCPC 2023 in Numbers</h4>
       <Row className="countRow  p-4 m-0">   
           <Col className="countCol m-0 p-0" lg={4} md={4} sm={12}>
            <Container fluid="true" className="ncpc_Counts m-4">
                <h1 className='text-center'><FontAwesomeIcon icon={faBuildingColumns}/></h1><h3 className='text-center'>Universities</h3>
                <CountdownTimer initialValue={0} targetValue={100} speed={500} />
            </Container>
            </Col>
            <Col className="countCol m-0 p-0" lg={4} md={4} sm={12}>
             <Container fluid="true" className="ncpc_Counts m-4">
              <h1 className='text-center'><FontAwesomeIcon icon={faPeopleGroup}/></h1><h3 className='text-center'>Teams</h3>
              <CountdownTimer initialValue={0} targetValue={120} speed={500} />
            </Container>
           </Col>
         
           <Col className="countCol m-0 p-0" lg={4} md={4} sm={12}>
             <Container fluid="true" className="ncpc_Counts m-4">
               <h1 className='text-center'><FontAwesomeIcon icon={faUser}/></h1><h3 className='text-center'>Contestants</h3>
                <CountdownTimer initialValue={0} targetValue={300} speed={400} />
             </Container>
           </Col>
        </Row>
       </Container>
      
  
  );
};

export default CountApp;
