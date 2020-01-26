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

          <Row className="full-dashboard">
            <Col className="infos-part">
              <TeamInfosCard teamData={teamData}/> 
            </Col>              
            <Col className="func-part">
              <Row>
                <div className="calendar">Calendrier</div>
              </Row>
              <Row>
                <div className="effectif">Effectif</div>
              </Row>
              <Row className="statistics">
                <Col>
                  <div className="statistic-players">Statistiques Joueurs</div>
                </Col>
                <Col>
                <div className="statistic-team">Statistiques Équipes</div>
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

