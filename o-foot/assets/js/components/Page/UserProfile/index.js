import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './user-profil.scss';

import infos from './userInfos.json';

import ShowMyTeams from './ShowMyTeams';


const UserProfile = () => {
   
  console.log("depuis UserProfile:", infos);
  
  return (
  <div id="userProfile">    

    <Container>      
      {infos.map((user) => (          
        <>
          <div className="sweatband">
            <h2>Welcome {user.first_name} !</h2>
          </div>          
          <Row className="">
            <Col lg={12} md={12} sm={12} xs={12}> 
              <Card>
                <Card.Header >MES INFORMATIONS</Card.Header>
                <Card.Body>
                  <Avatar className="avatar-custom" src={user.picture_user} size="100" round={true} />
                  <Card.Title>{user.last_name} {user.first_name} </Card.Title>
                  <Card.Text>
                  Mail : {user.email} 
                  </Card.Text>                
                </Card.Body>
              </Card>
            </Col>            
          </Row>
        </>
      ))} 

    </Container>

    <Container>

      <Tabs defaultActiveKey="teams" id="uncontrolled-tab-example">
        <Tab eventKey="teams" title="Mes équipes">
          {/* On mettra ici notre composant ShowMyTeams */}
          {infos.map((user, i) => (  
            <ShowMyTeams {...user.team}/>
          ))}
        </Tab>
        <Tab eventKey="edit-profil" title="Éditer mon profil">
          {/* On mettra ici notre composant EditProfil */}
          <div>Éditer mon profil</div>
        </Tab>
        <Tab eventKey="edit-password" title="Éditer mon mot de passe">
          {/* On mettra ici notre composant EditPassword */}
          <div>Éditer mon mot de passe</div>
        </Tab>
      </Tabs> 

    </Container>

  </div>
  )
};

export default UserProfile;