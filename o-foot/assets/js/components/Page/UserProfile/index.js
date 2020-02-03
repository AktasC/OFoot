import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab} from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './user-profil.scss';

import ShowMyTeams from './ShowMyTeams';
import CreateNewTeam from '~/containers/UserProfile/CreateNewTeam';
import UserEdit from '~/containers/UserProfile/UserEdit';
import PasswordEdit from '~/containers/UserProfile/PasswordEdit';


class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {

  }

  render() {

    const { userInformations } = this.props;

    return (
      <div id="userProfile">

        <Container key="1">

          <div>
            <div className="sweatband">
              <h2>Welcome {userInformations.first_name} !</h2>
            </div>
            <Row className="">
              <Col lg={12} md={12} sm={12} xs={12}>
                <Card>
                  <Card.Header >MES INFORMATIONS</Card.Header>
                  <Card.Body>
                    {userInformations.picture_User != null ? <Avatar className="avatar-custom" src={userInformations.picture_user} size="100" round={true} /> : <Avatar name={`${userInformations.first_name} ${userInformations.last_name}`} size="150" size="100" round={true} />}
                    <Card.Title>{userInformations.first_name} {userInformations.last_name}</Card.Title>
                    <Card.Text>
                      Mail : {userInformations.email}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

        </Container>

        <Container>
          <Tabs defaultActiveKey="teams" id="uncontrolled-tab-example">
            <Tab eventKey="teams" title="Mes équipes">
              {/* On mettra ici notre composant ShowMyTeams */}
              {userInformations.teams != undefined &&
                <ShowMyTeams teams={userInformations.teams} />
              }
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
    )
  }
}

export default UserProfile;