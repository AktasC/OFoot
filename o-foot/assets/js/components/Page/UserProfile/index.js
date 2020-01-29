import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './user-profil.scss';

/* import infos from './userInfos.json'; */

import ShowMyTeams from './ShowMyTeams';
import UserEdit from '../../../containers/UserProfile/UserEdit';
import PasswordEdit from '../../../containers/UserProfile/PasswordEdit';


const UserProfile = ( infosObj ) => {


    // Récupère les informations sur le joueurs depuis le state userProfil sous forme d'Objet
    // Transforme l'objet récupéré en array
    var infosArray = Object.values(infosObj);
    return (
      <div id="userProfile">    

        <Container key="1">      
          {infosArray.map((user, i) => (          
            <div key={i}>
              <div className="sweatband">
                <h2>Welcome {user.first_name} !</h2>
              </div>          
              <Row className="">
                <Col lg={12} md={12} sm={12} xs={12}> 
                  <Card>
                    <Card.Header >MES INFORMATIONS</Card.Header>
                    <Card.Body>
                    {user.picture_user === null ? <Avatar name={`${user.last_name} ${user.first_name}`} size="100" round={true} className="avatar-custom"  /> : <Avatar className="avatar-custom" src={user.picture_user} size="100" round={true} />}
                      <Card.Title>{user.last_name} {user.first_name} </Card.Title>
                      <Card.Text>
                      Mail : {user.email} 
                      </Card.Text>                
                    </Card.Body>
                  </Card>
                </Col>            
              </Row>
            </div>
          ))} 

        </Container>

        <Container>
      <Tabs defaultActiveKey="teams" id="uncontrolled-tab-example">
        <Tab eventKey="teams" title="Mes équipes">
          {/* On mettra ici notre composant ShowMyTeams */}
          {infosArray.map((user, i) => (  
            <ShowMyTeams {...user.team}/>
          ))}
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

export default UserProfile;