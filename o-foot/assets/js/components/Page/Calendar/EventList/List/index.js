import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Jumbotron } from 'react-bootstrap';


// Import scss
import './list.scss';


const List = ({eventData, eventDataMixAll}) => {

    
const eventDataGames = eventData[0];
const eventDataPractices = eventData[1]; 

const eventDataMix = eventDataGames.concat(eventDataPractices);  

const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minutes: '2-digit' };

return (
    
    <div id="list">
        <h3> Tous vos événements </h3>

    {eventDataMix.map((event, id) => (
        <Jumbotron key={id} id="card-event">
        <Row key="1" className="event-card entrainement">
                    <Col className="infos-col">
                    {event.opponent_team === undefined ? <div className="date"> {event.date_time_practice} </div> : <div className="date"> {event.date_time_game} </div> }
                        
                    </Col> 

                    <Col className="opponent-col">
                          {event.opponent_team === undefined ? <div className="event-type"> Entrainement </div> : <div className="event-type"> Match </div> }
                          {event.opponent_team != undefined && <div className="event-type"> {event.opponent_team} </div> }
                          {event.opponent_team != undefined && <div className="event-type"> {event.domicile_exterieur} </div> }
                          {event.opponent_team === undefined ? <div className="detail"> {event.stadium_practice} - {event.adress_practice} </div> : <div className="detail"> {event.stadium_game} - {event.adress_game} </div> }
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