import React from 'react';
import Avatar from 'react-avatar';
import { Button, Modal, Col } from 'react-bootstrap';
import { FiEdit3 } from 'react-icons/fi';

import TeamInfosEditForm from '../../../../containers/Page/TeamDashboard/TeamInfosCard/TeamInfosEditForm';

// Import scss
import './team-infos-card.scss';

class TeamInfosCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      show: false,
    };
  }

  render() {
    const handleClose = () => {
      this.setState({
        show: false,
      });
    };
    const handleShow = () => {
      this.setState({
        show: true,
      });
    };

    const {
      logo_team,
      team_name,
      championship_team,
      stadium_team,
      address_team,
      city_team,
    } = this.props.teamData;

    return (
      <div id="teamInfosCard">

        <div className="edit">
          <Button onClick={handleShow}><FiEdit3 size={22} /></Button>
        </div>

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

        <Modal id="infosEditModal" size="lg" show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier les infos administratives de mon Club</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Col>
              <TeamInfosEditForm teamInfos={this.props.teamData} show={this.state.show} onClose={this.handleClose} />
            </Col>

          </Modal.Body>
          <Modal.Footer>
            <Button className="custom-btn" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default TeamInfosCard;
