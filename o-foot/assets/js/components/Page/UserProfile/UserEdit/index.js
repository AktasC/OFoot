import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './useredit.scss';

const UserEdit = () => {
  
  return (
    <div id="userEdit">

      <Form>
    
        <Row className="editUserInputs">
          <Col className="colUserEdit">
            <Form.Label>Modifier l'avatar</Form.Label>
              <Form.Control
                className="editUserInput"
                type="file"
                name="name"
              />
          </Col>
    
          <Col className="colUserEdit">
            <Form.Label>Modifier le nom d'utilisateur</Form.Label>
              <Form.Control
                className="editUserInput"
                type="text"
                name="name"
                placeholder=""
              />
        
            <Form.Label> Modifier l'adresse email</Form.Label>
              <Form.Control 
                className="editUserInput"
                type="email" 
                name="email" 
                placeholder="" 
             />
          </Col>
        </Row>
    
        <Row>
          <Col>
            <Button className="editButton" variant="primary" type="submit">
              Enregistrer les modifications
            </Button>
          </Col>
        </Row>
      </Form>

          
    </div>
  );

};

export default UserEdit;