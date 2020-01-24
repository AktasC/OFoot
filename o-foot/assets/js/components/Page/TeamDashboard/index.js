// == Import : npm
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import TeamInfosCard from './TeamInfosCard';

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

          <Row>
            <Col>
              <TeamInfosCard teamData={teamData}/> 
            </Col>              
            <Col>2 of 2</Col>
          </Row> 
        </Container>
          
      </div>    
    
  )
};

// == Export
export default TeamDashboard;

