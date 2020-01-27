import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './useredit.scss';



const UserEdit = () => {
  
  return (
    <div id="userEdit">

<Form id="userEditForm">
    
    <Row>
        <Col>
        <Form.Label>Modifier l'avatar</Form.Label>
          <Form.Control
            type="file"
            name="name"
            placeholder=""
          />
        </Col>
    
        <Col>
        <Form.Label>Modifier le nom d'utilisateur</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder=""
          />
        
        <Form.Label>Modifier l'adresse email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="" 
             />
        </Col>
    

        <Col>
        <Button variant="primary" type="submit">
          Enregistrer les modifications
        </Button>
        </Col>
    </Row>


      </Form>

          
    </div>
  );

};

export default UserEdit;