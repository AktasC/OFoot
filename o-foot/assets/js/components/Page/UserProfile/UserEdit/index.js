import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './useredit.scss';

class UserEdit extends React.Component {

  constructor(props) {
    super (props); 
    console.log(props);
    this.state= {
      firstname: this.props.userInformations.first_name,
      lastname: this.props.userInformations.last_name,
      email: this.props.userInformations.email,
    };
  }

  onSubmit = (event) => {
    event.preventDefault();  
    this.props.onSubmitUpdateUserInfos(this.state);
  
  }  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const { firstname, lastname, email  } = this.state; 
    /* const { first_name, last_name, mail, errorsUserEdit, noSubmit } = this.props; */

  
    return (
      <div id="userEdit">
  
        <Form onSubmit={this.onSubmit}>
      
          <Row className="editUserInputs">
            <Col className="colUserEdit">
              <Form.Label>Modifier l'avatar</Form.Label>
                <Form.Control
                  className="editUserInput"
                  type="file"
                  name="picture_user"
                  onChange={this.handleChange}
                />
            </Col>
      
            <Col className="colUserEdit">
              <Form.Label>Modifier le prénom</Form.Label>
                <Form.Control
                  className="editUserInput"
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder="Votre prénom"
                  onChange={this.handleChange}
                />
              
              <Form.Label>Modifier le nom de famille</Form.Label>
                <Form.Control
                  className="editUserInput"
                  type="text"
                  name="lastname"
                  placeholder="Votre Nom"
                  value={lastname}
                  onChange={this.handleChange}
                />
          
              <Form.Label> Modifier l'adresse email</Form.Label>
                <Form.Control 
                  className="editUserInput"
                  type="email" 
                  name="email" 
                  placeholder="Votre Mail"
                  value={email}
                  onChange={this.handleChange}
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