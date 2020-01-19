import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

// Import scss
import './loginform.scss';

const LoginForm = () => (

  <div id="loginForm">

    <Form>
      <Col>
        <Form.Control name="email" placeholder="Email" />
      </Col>
      <Col>
        <Form.Control name="password" placeholder="Mot de Passe" />
      </Col>
      <Button variant="primary" type="submit">
          Se connecter
      </Button>
    </Form>

  </div>

);

export default LoginForm;
