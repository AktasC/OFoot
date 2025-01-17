import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Col, Row, Button, Modal,
} from 'react-bootstrap';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

// Import scss
import './list.scss';

import AddEvent from '~/containers/Page/Calendar/EventList/AddEvent';

class List extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      showAddEvent: false,
    };
  }

  render() {
    const { eventData, currentTeamId } = this.props;

    // gestion date au format iso 8601
    const options = {
      weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minutes: '2-digit',
    };
    function dateFromISO8601(isostr) {
      const parts = isostr.match(/\d+/g);
      return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
    }

    const handleShowAddEvent = () => {
      this.setState({
        showAddEvent: true,
      });
    };

    const handleCloseAddEvent = () => {
      this.setState({
        showAddEvent: false,
      });
    };

    return (
      <div id="list">
        <div className="buttons">
          <NavLink to={`/team/${currentTeamId}`}>
            <Button>
              <IoIosArrowBack />
              Retour au dashboard
            </Button>
          </NavLink>
          <Button onClick={handleShowAddEvent}>
            <FiPlus size={20} />
            Ajouter un événement
          </Button>
        </div>

        {eventData.map((event, id) => (
          <Row key={id} className={event.opponent_team === undefined ? ' card-event practice' : 'card-event match'}>
            <Col className="infos-col">
              {event.opponent_team === undefined
                ? (
                  <div className="date date-practice">
                    {dateFromISO8601(`${event.date_time}`).toLocaleDateString('fr-FR', options)}
                  </div>
                )
                : (
                  <div className="date">
                    {' '}
                    {dateFromISO8601(`${event.date_time}`).toLocaleDateString('fr-FR', options)}
                    {' '}
                  </div>
                )}
            </Col>

            <Col className="opponent-col">
              {event.opponent_team === undefined
                ? <div className="event-type"> Entrainement </div>
                : (
                  <div>
                    <div className="event-type"> Match </div>
                    <div className="vs"> VS </div>
                  </div>
                )}
              {event.opponent_team != undefined && (
              <div className="opponent">
                {' '}
                {event.opponent_team}
                {' '}
              </div>
              ) }
              {event.opponent_team != undefined && (
              <div className="where">
                {' '}
                {event.domicile_exterieur}
                {' '}
              </div>
              ) }

              {event.opponent_team === undefined
                ? (
                  <div className="detail">
                    {' '}
                    {event.stadium_practice}
                    {' '}
                    -
                    {' '}
                    {event.address_practice}
                    {' '}
                  </div>
                )
                : (
                  <div className="detail">
                    {' '}
                    {event.stadium_game}
                    {' '}
                    -
                    {' '}
                    {event.address_game}
                    {' '}
                  </div>
                )}
            </Col>

            <Col className="participate-col">
              <div className="buttons-col">
                <Button className="btn-answer" variant="success">Je participe</Button>
                <Button className="btn-answer" variant="danger">Je ne participe pas</Button>
              </div>
            </Col>
          </Row>
        ))}

        <Modal id="addEventModal" size="lg" show={this.state.showAddEvent} onHide={handleCloseAddEvent}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un événement</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Col>
              <AddEvent />
            </Col>

          </Modal.Body>
          <Modal.Footer>
            <Button className="custom-btn" onClick={handleCloseAddEvent}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>

    );
  }
}

export default List;
