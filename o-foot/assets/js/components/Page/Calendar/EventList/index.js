import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container } from 'react-bootstrap';


// Import scss
import './eventlist.scss';

// Infos
//import eventData from './event.json';

// Import composant
import Overview from './Overview';
import List from './List';

const EventList = ({eventData}) => {

return (
    
    <div id="event-list">

        <Container>
            <div className="sweatband">
                <h2>AGENDA DES EVENEMENTS</h2>
            </div>
            <Col className="full-event">
                <Overview eventData = {eventData}/>
                <List eventData = {eventData}/>
            </Col>
            </Container>
    </div>
 
);
}

export default EventList;
