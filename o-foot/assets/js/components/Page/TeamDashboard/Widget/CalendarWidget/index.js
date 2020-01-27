// == Import : npm
import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

// Import scss
import './calendar-widget.scss';

import calendarData from './calendar.json';

const CalendarWidget = () => {  

  
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minutes: '2-digit' };

  return (
    
    <div id="calendarWidget">        

      <Container>
        {calendarData.event.map((event, i) => {

          let event_date = event.date_time_match;        
          let event_date_formatted = new Date(`${event_date}`);  

          return (
            <Row key={event.id} className={`event-card ${event.event.toLowerCase()}`}>
              <Col>
                <div className="date">
                  {event_date_formatted.toLocaleDateString('fr-FR', options)}
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
          )         
        })}          
      </Container>          
    </div> 

  )
};

// == Export
export default CalendarWidget;

