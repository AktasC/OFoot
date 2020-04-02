import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { Button, Modal, Col } from 'react-bootstrap';
import { FiEdit3 } from 'react-icons/fi';

import TeamInfosEditForm from '~/containers/Page/TeamDashboard/TeamInfosCard/TeamInfosEditForm';

// Import scss
import './team-infos-card.scss';

const TeamInfosCard = ({ teamData, isManager }) => {
  const [show, setShow] = useState(false);

  const {
    logo_team,
    team_name,
    championship_team,
    stadium_team,
    address_team,
    city_team,
  } = teamData;

  return (
    <div id="teamInfosCard">

      { isManager && (
        <div className="edit">
          <Button onClick={() => setShow(true)}><FiEdit3 size={22} /></Button>
        </div>
      )}

      <div className="card-header">
        <Avatar className="avatar-custom" src={logo_team} size="100" round />
        <div className="card-header-title">
          <h4>{team_name}</h4>
          <p>{championship_team}</p>
        </div>
      </div>

      <div className="card-content">
        <div className="stadium">
          <h6>{stadium_team}</h6>
        </div>
        <div className="address">
          <p>{address_team}</p>
          <p>{city_team}</p>
        </div>

      </div>

      <Modal id="infosEditModal" size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier les infos administratives de mon Club</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Col>
            <TeamInfosEditForm teamInfos={teamData} show={show} onClose={() => setShow(false)} />
          </Col>

        </Modal.Body>
        <Modal.Footer>
          <Button className="custom-btn" onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );

}

TeamInfosCard.propTypes = {
  teamData: PropTypes.shape({
    logo_team: PropTypes.string,
    team_name: PropTypes.string,
    championship_team: PropTypes.string,
    stadium_team: PropTypes.string,
    address_team: PropTypes.string,
    city_team: PropTypes.string,
  }).isRequired,
  isManager: PropTypes.bool.isRequired,
};

export default TeamInfosCard;
