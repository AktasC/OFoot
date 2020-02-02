// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

import TeamInfosCard from './TeamInfosCard';
import CalendarWidget from './Widget/CalendarWidget';

// Import scss
import './team-dashboard.scss';

const TeamDashboard = (teamInformations) => {

  /* console.log("from TeamDashboard teamInfooooos:", teamInformations.teamInformations); */

  return (

    <div id="teamDashboard">

      <Container>
        <div className="sweatband">
          <h2>DASHBOARD ÉQUIPE</h2>
        </div>

        <Row className="full-dashboard">
          <Col className="infos-part">
            <TeamInfosCard teamData={teamInformations.teamInformations} />
          </Col>
          <Col className="func-part">
            <Row className="func-part-row calendar">
              <Col className="func-part-col">
                <CalendarWidget />
              </Col>
            </Row>
            <NavLink to="/players/list" className="link">
              <Row className="func-part-row effectif">
                <Col className="func-part-col">
                  <div></div>
                </Col>
              </Row>
            </NavLink>
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

