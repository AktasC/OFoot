import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'react-bootstrap';


// Import scss
import './eventlist.scss';

// Import composant
import Overview from './Overview';
import List from './List';

const EventList = () => (
    
    <div id="event-list">

        <Container>
            <div className="sweatband">
                <h2>AGENDA DES EVENEMENTS</h2>
            </div>
            <Col className="full-event">
                <Overview />
                <List />
            </Col>
            </Container>
    </div>
 
);

export default EventList;
