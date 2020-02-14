import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container } from 'react-bootstrap';


// Import scss
import './eventlist.scss';

// Infos

// Import composant
import List from './List';

const EventList = ({ eventData, currentTeamId }) => (

  <div id="event-list">

    <Container>
      <div className="sweatband">
        <h2>AGENDA DES EVENEMENTS</h2>
      </div>
      <Col className="full-event">
        <List eventData={eventData} currentTeamId={currentTeamId} />
      </Col>
    </Container>
  </div>

);

export default EventList;
