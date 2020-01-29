/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';


// Import scss
import './loginform.scss';

const LoginForm = ({
  changeInputLogin,
  emailValue,  
  passwordValue,
  submitForm,
  blurInputEmail,
  emailValidCheck,
  errorMessageEmail,
  blurInputPassword,
  passwordValidCheck,
  errorMessagePassword,
  emptyInputs,

}) => {
  const onChangeInputEmail = (event) => {
    blurInputEmail(event.target.value);
  };

  const onChangeInputPassword = (event) => {
    blurInputPassword(event.target.value);
  };

  const handleChange = (event) => {
    changeInputLogin(event.target.value, event.target.name);
  };


  const onSubmitForm = (evt) => {
    console.log(emailValue);
    evt.preventDefault();
    if (emailValue === '' && passwordValue === '') {
      console.log('emptyinputs');
      emptyInputs();
    }
    else if (emailValidCheck === true && passwordValidCheck === true) {
      submitForm();
    }
  };

  return (

    <div id="loginForm">

      <Form onSubmit={onSubmitForm}>
        <Col>
          <Form.Control
            className={!emailValidCheck ? 'wrong' : ''}
            type="email"
            onBlur={onChangeInputEmail}
            onChange={handleChange}
            value={emailValue}
            name="emailValue"
            placeholder="Email"
          />
        </Col>
        {!emailValidCheck && <div>{errorMessageEmail.email}</div>}

        <Col>
          <Form.Control
            className={!passwordValidCheck ? 'wrong' : ''}
            type="password"
            onBlur={onChangeInputPassword}
            onChange={handleChange}
            value={passwordValue}
            name="passwordValue"
            placeholder="Mot de Passe"            
          />
        </Col>
        {!passwordValidCheck && <div>{errorMessagePassword.password}</div>}

        <Button variant="primary" type="submit">
          Se connecter
        </Button>


      </Form>

    </div>

  );
};

LoginForm.propTypes = {
  changeInputLogin: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,  
  passwordValue: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  blurInputEmail: PropTypes.func.isRequired,
  emailValidCheck: PropTypes.bool.isRequired,
  blurInputPassword: PropTypes.func.isRequired,
  passwordValidCheck: PropTypes.bool.isRequired,
  emptyInputs: PropTypes.func.isRequired,
};

export default LoginForm;
