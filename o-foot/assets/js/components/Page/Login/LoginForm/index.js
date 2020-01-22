import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap'; 
import ErrorMessage from '../ErrorMessage'; 


// Import scss
import './loginform.scss';

const LoginForm = ({
  changeInputEmailLogin,
  email,
  changeInputPasswordLogin,
  password,
  submitForm,
  blurInputEmail, 
  EmailValidCheck,
  errorMessageEmail
}) => {
  
  const onChangeInputEmail = (event) => {
    blurInputEmail(event.target.value);
  }

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
          <Form.Control type="email" onBlur={onChangeInputEmail}
          onChange={handleChangeEmail} value={email} name="email" placeholder="Email" />
        </Col>
        {!EmailValidCheck && 
        <div>{errorMessageEmail.email}</div>
        } 
        
        <Col>
          <Form.Control type="password" onChange={handleChangePassword} value={password} name="password" placeholder="Mot de Passe" />
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
  submitForm: PropTypes.func,
};

export default LoginForm;


  