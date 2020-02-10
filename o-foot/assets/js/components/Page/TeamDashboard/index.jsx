// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import TeamInfosCard from './TeamInfosCard';
import CalendarWidget from './Widget/CalendarWidget';

// Import scss
import './team-dashboard.scss';

import teamData from './team.json';

class TeamDashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.loadCalendarTeamInfo();
  }


  render() {
    const { teamInformations } = this.props;

    /* console.log("from TeamDashboard teamInfooooos:", teamInformations.teamInformations); */

    return (

      <div id="teamDashboard">

        <Container>
          <div className="sweatband">
            <h2>DASHBOARD ÉQUIPE</h2>
          </div>

          <Row className="full-dashboard">
            <Col lg={6} md={12} sm={12} xs={12} className="infos-part">
              <TeamInfosCard teamData={teamInformations} />
            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className="func-part">
              <NavLink to="/event/list" className="link">
                <Row className="func-part-row calendar">
                  <Col className="func-part-col">
                    <CalendarWidget />
                  </Col>
                </Row>
              </NavLink>
              <NavLink to="/players/list" className="link">
                <Row className="func-part-row effectif">
                  <Col className="func-part-col">
                    <div />
                  </Col>
                </Row>
              </NavLink>
              <Row className="func-part-row statistics">
                <Col className="func-part-col">
                  <div className="statistic-players" />
                </Col>
                <Col className="func-part-col">
                  <div className="statistic-team" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// == Export
export default TeamDashboard;
