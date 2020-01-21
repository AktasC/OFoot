import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap'; 


// Import scss
import './loginform.scss';

export const checkValidity = (email) => {
  const errors = {};
  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
};


const LoginForm = ({
  changeInputEmail,
  email,
  changeInputPassword,
  password,
  submitForm,
  checkValidity 
}) => {


  const check = (evt) => {
    checkValidity(evt.target.value);
  };
  

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
          <Form.Control required type="email" onBlur={check}
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
  changeInputEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  changeInputPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;

/*/* const onSubmitForm = (evt) => {
    //const form = {email, password};
    const checkValidity = (email, password) => {
    const errors = {};
    if (!email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address'
    };
    if (!password) {
      errors.password = 'Required'
    } else if (password.length < 8) {
      errors.password = 'Minimum be 8 characters or more'
    } return errors; 
  }; 
    if (!errors.isEmpty){
      evt.preventDefault();
      evt.stopPropagation();
      validated===false;
      console.log('non valide');
    } else {
    evt.preventDefault();
    evt.stopPropagation();
    validated===true;
    submitForm();
    console.log('valide');
    };
  };*/