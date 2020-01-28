import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './useredit.scss';

const UserEdit = ({ pictureuser, firstname, email, handleSubmit, handleEmailChange, handleNameChange, handleAvatarChange }) => {
 

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit();
  }

  const onChangeAvatar = (evt) => {
    handleAvatarChange(evt.target.value); 
  }

  const onChangeFirstname = (evt) => {
    handleNameChange(evt.target.value); 
  }

  const onChangeEmail = (evt) => {
    handleEmailChange(evt.target.value); 
  }

  return (
    <div id="userEdit">

      <Form onSubmit={onSubmit}>
    
        <Row className="editUserInputs">
          <Col className="colUserEdit">
            <Form.Label>Modifier l'avatar</Form.Label>
              <Form.Control
                className="editUserInput"
                type="file"
                name="picture_user"
                onChange={onChangeAvatar}
              />
          </Col>
    
          <Col className="colUserEdit">
            <Form.Label>Modifier le nom d'utilisateur</Form.Label>
              <Form.Control
                className="editUserInput"
                type="text"
                name="first_name"
                value={firstname}
                onChange={onChangeFirstname}
              />
        
            <Form.Label> Modifier l'adresse email</Form.Label>
              <Form.Control 
                className="editUserInput"
                type="email" 
                name="email" 
                placeholder="" 
                value={email}
                onChange={onChangeEmail}
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