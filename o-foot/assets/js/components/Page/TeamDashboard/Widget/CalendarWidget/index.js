// == Import : npm
import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

// Import scss
import './calendar-widget.scss';

import calendarData from './calendar.json';

const CalendarWidget = () => {  

  return (
    
      <div id="calendarWidget">        

        <Container>
          {calendarData.event.map((event, i) => (          
                                   
            <Row key={event.id} className="event-card">
              <Col>
                <div className="date">
                  {event.date_time_match}
                </div>
                <div className="event">
                  {event.event}
                </div>
              </Col> 
              Je participe à cet évènement :
              <Col className="buttons-col">                
                <Button variant="success">Oui</Button>
                <Button variant="danger">Non</Button>
              </Col>              
            </Row> 
          
          ))}
          
        </Container>
          
      </div>    
    
  )
};

// == Export
export default CalendarWidget;

