import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'react-bootstrap';

// Import scss
import './list.scss';


const List = ({eventData}) => {


// séparation des objets   
const eventDataGames = eventData[0];
const eventDataPractices = eventData[1]; 

// modification key date_time_game/practice
const objectRenameKeys = require('object-rename-keys');

var changes = {
	date_time_game: 'date_time',
};

const eventDataGamesRename = objectRenameKeys(eventDataGames, changes);

var changesPractice = {
	date_time_practice: 'date_time',
};

const eventDataPracticesRename = objectRenameKeys(eventDataPractices, changesPractice);

// Fusion des objets
const eventDataMix = eventDataGamesRename.concat(eventDataPracticesRename); 

//Ordre Chronologique
const eventDataMixChronological = eventDataMix.sort(function (a, b) {
    if (a.date_time > b.date_time) return 1;
    if (a.date_time < b.date_time) return -1;
    return 0;
  });

// gestion date au format iso 8601
const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minutes: '2-digit' };
function dateFromISO8601(isostr) {
    var parts = isostr.match(/\d+/g);
    return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
}

return (
    
    <div id="list">
        <h3> Tous vos événements </h3>

    {eventDataMixChronological.map((event, id) => (
        <Row key={id} className={event.opponent_team === undefined ? " card-event practice" :  "card-event match"}>
                    <Col className="infos-col">
                        {event.opponent_team === undefined 
                        ? 
                        <div className="date date-practice"> {dateFromISO8601(`${event.date_time}`).toLocaleDateString('fr-FR', options)} </div> 
                        : 
                        <div className="date"> {dateFromISO8601(`${event.date_time}`).toLocaleDateString('fr-FR', options)} </div> 
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

