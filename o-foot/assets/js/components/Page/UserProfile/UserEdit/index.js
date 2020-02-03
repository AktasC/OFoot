import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './useredit.scss';

class UserEdit extends React.Component {

  constructor(props) {
    super (props); 
    this.state= {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      emai: this.props.email,
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

    const { firstname, lastname, email } = this.state; 
    const { first_name, last_name, mail} = this.props;

  
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
                  placeholder={first_name}
                  onChange={this.handleChange}
                />
              
              <Form.Label>Modifier le nom de famille</Form.Label>
                <Form.Control
                  className="editUserInput"
                  type="text"
                  name="lastname"
                  placeholder={last_name}
                  value={lastname}
                  onChange={this.handleChange}
                />
          
              <Form.Label> Modifier l'adresse email</Form.Label>
                <Form.Control 
                  className="editUserInput"
                  type="email" 
                  name="email" 
                  placeholder={mail} 
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