import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './user-profil.scss';

import ShowMyTeams from './ShowMyTeams';
import CreateNewTeam from '~/containers/UserProfile/CreateNewTeam';
import UserEdit from '~/containers/UserProfile/UserEdit';
import PasswordEdit from '~/containers/UserProfile/PasswordEdit';


const UserProfile = ({ userInformations }) => {

  const {
    first_name,
    last_name,
    email,
    picture_user,
    teams,
  } = userInformations;

  return (
    <div id="userProfile">

      <Container key="1">

        <div>
          <div className="sweatband">
            <h2>Welcome {first_name} !</h2>
          </div>
          <Row className="user-infos">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Header>MES INFORMATIONS</Card.Header>
                <Card.Body>
                  { picture_user != null ? <Avatar className="avatar-custom" src={picture_user} size="100" round /> : <Avatar name={`${first_name} ${last_name}`} size="150" size="100" round /> }
                  <Card.Title>
                    {first_name}
                    {' '}
                    {last_name}
                  </Card.Title>
                  <Card.Text>
                    Mail : {email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

      </Container>

      <Container key="2">
        <Tabs defaultActiveKey="teams" id="uncontrolled-tab-example">
          <Tab eventKey="teams" title="Mes équipes">
            {/* On mettra ici notre composant ShowMyTeams */}
            {teams !== undefined
              && <ShowMyTeams teams={teams} />}
          </Tab>
          <Tab eventKey="create-team" title="Créer mon équipe">
            {/* On mettra ici notre composant CreateNewTeam */}
            <CreateNewTeam />
          </Tab>
          <Tab eventKey="edit-profil" title="Éditer mon profil">
            {/* On mettra ici notre composant EditProfil */}

            <UserEdit />

          </Tab>
          <Tab eventKey="edit-password" title="Éditer mon mot de passe">
            {/* On mettra ici notre composant EditPassword */}
            <PasswordEdit />
          </Tab>
        </Tabs>
      </Container>

    </div>
  );
};

UserProfile.propTypes = {
  userInformations: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    picture_user: PropTypes.string,
    teams: PropTypes.array,
    roles: PropTypes.array,
  }).isRequired,
};

export default UserProfile;
