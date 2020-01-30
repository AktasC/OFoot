import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Jumbotron } from 'react-bootstrap';
import moment from 'moment';


// Import scss
import './list.scss';


const List = ({eventData, eventDataMixAll}) => {

    
const eventDataGames = eventData[0];
const eventDataPractices = eventData[1]; 

const eventDataMix = eventDataGames.concat(eventDataPractices);  

const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minutes: '2-digit' };
const date=moment("2020-02-15-T09:20:00", moment.ISO_8601);
console.log(date);
return (
    
    <div id="list">
        <h3> Tous vos événements </h3>

    {eventDataMix.map((event, id) => (
        <Row key="1" className={event.opponent_team === undefined ? " card-event practice" :  "card-event match"}>
                    <Col className="infos-col">
                        {event.opponent_team === undefined 
                        ? 
                        <div className="date"> {moment.parseZone(`${event.date_time_practice}`).format('LLLL')} </div> 
                        : 
                        <div className="date"> {moment.parseZone(`${event.date_time_game}`).format('LLLL')} </div> 
                        }    
                    </Col> 

                    <Col className="opponent-col">
                          {event.opponent_team === undefined 
                            ? 
                            <div className="event-type"> Entrainement </div> 
                            : 
                            <div>
                                <div className="event-type"> Match </div> 
                                <div className="vs"> VS </div> 
                            </div> 
                            }
                          {event.opponent_team != undefined && <div className="opponent"> {event.opponent_team} </div> }
                          {event.opponent_team != undefined && <div className="where"> {event.domicile_exterieur} </div> }

                          {event.opponent_team === undefined 
                          ? 
                          <div className="detail"> {event.stadium_practice} - {event.adress_practice} </div> 
                          : 
                          <div className="detail"> {event.stadium_game} - {event.adress_game} </div> 
                          }
                    </Col> 

                    <Col className="participate-col">
                        <Col className="buttons-col">                
                            <Button className="btn-answer" variant="success">Je participe</Button>
                            <Button className="btn-answer" variant="danger">Je ne participe pas</Button>
                        </Col> 
                    </Col>             
            </Row>   
    )
    )}
       
    </div>
 
);
}

export default List;

