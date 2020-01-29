import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container, Button, Jumbotron } from 'react-bootstrap';


// Import scss
import './list.scss';


const List = () => (
    
    <div id="list">
        <h3> Tous vos événements </h3>

        <Jumbotron id="card-event">
        <Row key="1" className="event-card entrainement">
                    <Col className="infos-col">
                        <div className="date">
                            13/01/2020
                        </div>
                        <div className="time">
                            20h
                        </div>
                    </Col> 

                    <Col className="opponent-col">
                        <div className="event-type">
                            Match / Entrainement
                        </div>
                        <div className="detail">
                            Détails
                        </div>
                    </Col> 

                    <Col className="participate-col">
                        <Col className="buttons-col">                
                            <Button className="btn-answer" variant="success">Je participe</Button>
                            <Button className="btn-answer" variant="danger">Je ne participe pas</Button>
                        </Col> 
                    </Col>             
            </Row>   
        </Jumbotron>

        <Jumbotron id="card-event">
        <Row key="1" className="event-card entrainement">
                    <Col className="infos-col">
                        <div className="date">
                            13/01/2020
                        </div>
                        <div className="time">
                            20h
                        </div>
                    </Col> 

                     <Col className="opponent-col">
                        <div className="event-type">
                            Match / Entrainement
                        </div>
                        <div className="detail">
                            Détails
                        </div>
                    </Col>  

                    <Col className="participate-col">
                        <Col className="buttons-col">                
                            <Button className="btn-answer" variant="success">Je participe</Button>
                            <Button className="btn-answer" variant="danger">Je ne participe pas</Button>
                        </Col> 
                    </Col>             
            </Row> 
    
        </Jumbotron>
    </div>
 
);

export default List;