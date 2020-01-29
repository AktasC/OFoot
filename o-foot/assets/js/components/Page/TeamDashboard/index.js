// == Import : npm
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import TeamInfosCard from './TeamInfosCard';
import CalendarWidget from './Widget/CalendarWidget';

// Import scss
import './team-dashboard.scss';

import teamData from './team.json';

const TeamDashboard = () => {  

  return (
    
      <div id="teamDashboard">        

        <Container>
          <div className="sweatband">
            <h2>DASHBOARD ÉQUIPE</h2>
          </div>

          <Row className="full-dashboard">
            <Col className="infos-part">
              <TeamInfosCard teamData={teamData}/> 
            </Col>              
            <Col className="func-part">
              <Row className="func-part-row calendar">
                <Col className="func-part-col">
                  <CalendarWidget />
                </Col>
              </Row>
              <Row className="func-part-row effectif">
                <Col className="func-part-col">
                  <div></div>
                </Col>
              </Row>
              <Row className="func-part-row statistics">
                <Col className="func-part-col">
                  <div className="statistic-players"></div>
                </Col>
                <Col className="func-part-col">
                <div className="statistic-team"></div>
                </Col>
              </Row>
            </Col>
          </Row> 
        </Container>
          
      </div>    
    
  )
};

// == Export
export default TeamDashboard;

