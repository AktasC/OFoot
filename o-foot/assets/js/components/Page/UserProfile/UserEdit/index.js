import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './useredit.scss';

class UserEdit extends React.Component {

  constructor(props) {
    super (props); 
  }


  render() {

    const { pictureuser, firstname, lastname, email, handleSubmit, handleEmailChange, handleNameChange, handleAvatarChange, handleLastNameChange } = this.props; 

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
  
    const onChangeLastname = (evt) => {
      handleLastNameChange(evt.target.value); 
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
              <Form.Label>Modifier le prénom</Form.Label>
                <Form.Control
                  className="editUserInput"
                  type="text"
                  name="first_name"
                  value={firstname}
                  onChange={onChangeFirstname}
                />
              
              <Form.Label>Modifier le nom de famille</Form.Label>
                <Form.Control
                  className="editUserInput"
                  type="text"
                  name="last_name"
                  value={lastname}
                  onChange={onChangeLastname}
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

  }

 

};

export default UserEdit;