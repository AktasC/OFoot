import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';


// Import scss
import './loginform.scss';

const LoginForm = ({
  changeInputEmail,
  email,
  changeInputPassword,
  password,
  submitForm,
}) => {
  const handleChangeEmail = (event) => {
    changeInputEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    changeInputPassword(event.target.value);
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    submitForm();
  };

  return (

    <div id="loginForm">

      <Form onSubmit={onSubmitForm}>
        <Col>
          <Form.Control onChange={handleChangeEmail} value={email} name="email" placeholder="Email" />
        </Col>
        <Col>
          <Form.Control onChange={handleChangePassword} value={password} name="password" placeholder="Mot de Passe" />
        </Col>

        
        <Button variant="primary" type="submit">
          Se connecter
        </Button>
        


      </Form>

    </div>

  );
};

LoginForm.propTypes = {
  changeInputEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  changeInputPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;
