import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container } from 'react-bootstrap';


// Import scss
import './eventlist.scss';

// Infos
import eventData from './event.json';

// Import composant
import Overview from './Overview';
import List from './List';

const EventList = () => {

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

return (
    
    <div id="event-list">

        <Container>
            <div className="sweatband">
                <h2>AGENDA DES EVENEMENTS</h2>
            </div>
            <Col className="full-event">
                <Overview eventData = {eventDataMixChronological}/>
                <List eventData = {eventDataMixChronological}/>
            </Col>
            </Container>
    </div>
 
);
}

export default EventList;
