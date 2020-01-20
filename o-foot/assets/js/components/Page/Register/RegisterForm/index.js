import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

// Import scss
import './register-form.scss';

const RegisterForm = ({ 
  onValueChange,
  inputLastnameValue,
  inputFirstnameValue,
  inputMailValue,
  inputPasswordValue,
}) => {
    
  const onSubmit = (event) => {
    event.preventDefault()
    console.log('form envoyé');
  }

  const handleChange = (event) => {
    onValueChange(event.target.value, event.target.name);
  };

  return (   
   <div id="registerForm">     
     
    <Form onSubmit={onSubmit}>
      <Form.Row>
        <Col>
          <Form.Control onChange={handleChange} value={inputLastnameValue} name="lastname" placeholder="Nom" />
        </Col>
        <Col>
          <Form.Control onChange={handleChange} value={inputFirstnameValue} name="firstname" placeholder="Prénom" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control onChange={handleChange} value={inputMailValue} name="email" placeholder="Email" />
        </Col>
        <Col>
          <Form.Control onChange={handleChange} value={inputPasswordValue} name="password" placeholder="Mot de Passe" />
        </Col>
      </Form.Row>
      <Button variant="primary" type="submit">
          S'inscrire
      </Button>
    </Form>    

    </div>

  ) 
};

export default RegisterForm;
