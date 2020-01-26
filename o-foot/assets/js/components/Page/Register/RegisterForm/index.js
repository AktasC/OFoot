import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Import scss
import './register-form.scss';

const RegisterForm = ({ 
  // Différents states traité depuis le reducer
  onValueChange,
  onSubmit,
  inputLastnameValue,
  inputFirstnameValue,
  inputEmailValue,
  inputPasswordValue,
  blurInputLastName,
  LastnameValidCheck,
  ErrorMessageInvalidLastname,
  blurInputFirstName,
  FirstnameValidCheck,
  ErrorMessageInvalidFirstname,
  blurInputEmailRegister,
  EmailRegisterValidCheck,
  ErrorMessageInvalidEmailRegister,
  blurInputPasswordRegister,
  PasswordRegisterValidCheck,
  ErrorMessageInvalidPasswordRegister,
  emptyInputsRegister,
  submitFormRegister,
  meta,
}) => {
  
  const onChangeInputLastName = (event) => {
    blurInputLastName(event.target.value);
  }

  const onChangeInputFirstName= (event) => {
    blurInputFirstName(event.target.value);
  }

  const onChangeInputEmailRegister = (event) => {
    blurInputEmailRegister(event.target.value);
  }

  const onChangeInputPasswordRegister = (event) => {
    blurInputPasswordRegister(event.target.value)
  }
  
  const handleChange = (event) => {
    onValueChange(event.target.value, event.target.name);
  }

  const onSubmitRegister = (evt) => {
    evt.preventDefault(); 
     if (inputEmailValue === "" && inputPasswordValue === "" && inputLastnameValue === "" && inputFirstnameValue === "") {
       emptyInputsRegister(); 
     } else if (EmailRegisterValidCheck === true && PasswordRegisterValidCheck === true && LastnameValidCheck === true && FirstnameValidCheck === true) {
       submitFormRegister();}
   };

  return (   
   <div id="registerForm">     
     
    <Form onSubmit={onSubmitRegister}>
      <Form.Row>
        <Col>
          <Form.Control 
            className={!LastnameValidCheck ? 'wrong' : ''}
            onChange={handleChange} 
            value={inputLastnameValue} 
            onBlur={onChangeInputLastName} 
            name="lastname" 
            placeholder="Nom" 
          />

          {!LastnameValidCheck && <div>{ErrorMessageInvalidLastname.input}</div>}
        </Col>
        
        <Col>
          <Form.Control 
            className={!FirstnameValidCheck ? 'wrong' : ''}
            onChange={handleChange} 
            value={inputFirstnameValue} 
            onBlur={onChangeInputFirstName}
            name="firstname" 
            placeholder="Prénom" 
          />

          {!FirstnameValidCheck && <div>{ErrorMessageInvalidFirstname.input}</div>}
        </Col>

      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control 
            className={!EmailRegisterValidCheck ? 'wrong' : ''}
            onChange={handleChange} 
            value={inputEmailValue} 
            name="email" 
            placeholder="Email"
            onBlur={onChangeInputEmailRegister}
           />

        {!EmailRegisterValidCheck && <div>{ErrorMessageInvalidEmailRegister.email}</div>}
        </Col>

        <Col>
          <Form.Control 
            className={!PasswordRegisterValidCheck ? 'wrong' : ''}
            onChange={handleChange} 
            value={inputPasswordValue}
            onBlur={onChangeInputPasswordRegister} 
            type="password" 
            name="password" 
            placeholder="Mot de Passe" 
          />

        {!PasswordRegisterValidCheck && <div>{ErrorMessageInvalidPasswordRegister.password}</div>}
        </Col>
      </Form.Row>

      {/* <Form.Row>
        <input type="hidden" name="token" value={meta}></input>
      </Form.Row> */}
      <Button variant="primary" type="submit">
          S'inscrire
      </Button>
    </Form>    

    </div>

  ) 
};

RegisterForm.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputLastnameValue: PropTypes.string.isRequired,
  inputFirstnameValue: PropTypes.string.isRequired,
  inputEmailValue: PropTypes.string.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
  blurInputLastName: PropTypes.func.isRequired,
  LastnameValidCheck: PropTypes.bool.isRequired,
  blurInputFirstName: PropTypes.func.isRequired,
  FirstnameValidCheck: PropTypes.bool.isRequired,
  blurInputEmailRegister: PropTypes.func.isRequired,
  EmailRegisterValidCheck: PropTypes.bool.isRequired,
  blurInputPasswordRegister:PropTypes.func.isRequired,
  PasswordRegisterValidCheck: PropTypes.bool.isRequired,
  emptyInputsRegister : PropTypes.func.isRequired,
  submitFormRegister : PropTypes.func.isRequired
};

export default RegisterForm;
