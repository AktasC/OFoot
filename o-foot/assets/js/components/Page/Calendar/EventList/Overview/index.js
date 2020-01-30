import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container, Button } from 'react-bootstrap';


// Import scss
import './overview.scss';

const Overview = () => (
    
    <Row id="overview">
        <div>       
        <div id="calendarWidget">        
            <Container>
  
                <Row key="1" className="event-card entrainement">
                    <Col className="infos-col">
                        <div className="date">
                            13/01/2020
                        </div>
                    </Col> 

                     <Col className="opponent-col">
                        <div className="opponent">
                            Si match : opposant
                        </div>
                    </Col>  

                    <Col className="participate-col">
                        <Col className="participate-text">Je participe :</Col>
                        <Col className="buttons-col">                
                            <Button variant="success">Oui</Button>
                            <Button variant="danger">Non</Button>
                        </Col> 
                    </Col>             
                </Row>   

            </Container>          
        </div> 
        </div>

        <div>      
        <div id="calendarWidget">        
            <Container>
  
                <Row key="1" className="event-card entrainement">
                    <Col className="infos-col">
                        <div className="date">
                            13/01/2020
                        </div>
                    </Col> 

                     <Col className="opponent-col">
                        <div className="opponent">
                            Si match : opposant
                        </div>
                    </Col>  

                    <Col className="participate-col">
                        <Col className="participate-text">Je participe :</Col>
                        <Col className="buttons-col">                
                            <Button variant="success">Oui</Button>
                            <Button variant="danger">Non</Button>
                        </Col> 
                    </Col>             
                </Row>   

            </Container>          
        </div> 
        </div>
    </Row>
);

export default Overview;
