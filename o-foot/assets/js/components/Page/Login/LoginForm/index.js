import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap'; 


// Import scss
import './loginform.scss';




const LoginForm = ({
  changeInputEmailLogin,
  email,
  changeInputPasswordLogin,
  password,
  submitForm,
}) => {
  

  const handleChangeEmail = (event) => {
    changeInputEmailLogin(event.target.value);
  };
  

  const handleChangePassword = (event) => {
    changeInputPasswordLogin(event.target.value);
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    submitForm();
  };

  return (

    <div id="loginForm">

      <Form onSubmit={onSubmitForm}>
        <Col>
          <Form.Control required type="email"
          onChange={handleChangeEmail} value={email} name="email" placeholder="Email" />
          <div>erreur
      </div>
        </Col>
          
        
        
        <Col>
          <Form.Control required type="password" onChange={handleChangePassword} value={password} name="password" placeholder="Mot de Passe" />
        </Col>
      


        
        <Button variant="primary" type="submit">
          Se connecter
        </Button>
        


      </Form>

    </div>

  );
};

LoginForm.propTypes = {
  changeInputEmailLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  changeInputPasswordLogin: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;

/* 
export const checkValidity = (email) => {
  const errors = {};
  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
};
  */