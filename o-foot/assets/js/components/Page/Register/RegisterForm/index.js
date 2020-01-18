import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

// Import scss
import './register-form.scss';

const RegisterForm = () => (
    
    <div id="registerForm">     
     
    <Form>
      <Form.Row>
        <Col>
          <Form.Control placeholder="Nom" />
        </Col>
        <Col>
          <Form.Control placeholder="Prénom" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control placeholder="Email" />
        </Col>
        <Col>
          <Form.Control placeholder="Mot de Passe" />
        </Col>
      </Form.Row>
      <Button variant="primary" type="submit">
          S'inscrire
      </Button>
    </Form>    

    </div>
 
);

export default RegisterForm;
