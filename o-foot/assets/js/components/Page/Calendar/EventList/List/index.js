import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Jumbotron } from 'react-bootstrap';


// Import scss
import './list.scss';


const List = ({eventData}) => {

console.log(eventData); 

return (
    
    <div id="list">
        <h3> Tous vos événements </h3>

    {eventData.map((event, id) => (
        <Jumbotron key={id} id="card-event">
        <Row key="1" className="event-card entrainement">
                    <Col className="infos-col">
                        <div className="date">
                            {event.date_time}
                        </div>
                        <div className="time">
                            20h
                        </div>
                    </Col> 

                    <Col className="opponent-col">
                          {event.opponent_team === null ? <div className="event-type"> Entrainement </div> : <div className="event-type"> Match </div> } 
                        <div className="detail">
                            {event.stadium} - {event.adress}
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
    )
    )}
       
    </div>
 
);
}

export default List;