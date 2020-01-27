// == Import : npm
import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

// Import scss
import './calendar-widget.scss';

import calendarData from './calendar.json';

const CalendarWidget = () => {  

  
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  return (
    
    <div id="calendarWidget">        

      <Container>
        {calendarData.event.map((event, i) => {

          const event_date = event.date_time_match;
          const event_date_formatted = new Date(`${event_date}`);
          console.log(event_date_formatted);
          console.log(event_date_formatted.toLocaleDateString('fr-FR', options));

          <Row key={event.id} className={`event-card ${event.event.toLowerCase()}`}>
            <Col>
              <div className="date">
                {event.date_time_match.toLocaleDateString('fr-FR', options)}
              </div>
              <div className="event">
                {event.event}
              </div>
              <div className="opponent">
                {event.opponent_team}
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
        })}          
      </Container>          
    </div> 

  )
};

// == Export
export default CalendarWidget;

