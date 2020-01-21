import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

// Import scss
import './register-form.scss';

const RegisterForm = ({ 
  // Différents states traité depuis le reducer
  onValueChange,
  onSubmit,
  inputLastnameValue,
  inputFirstnameValue,
  inputMailValue,
  inputPasswordValue,
}) => {
    
  
  const handleChange = (event) => {
    onValueChange(event.target.value, event.target.name);
  }

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

RegisterForm.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputLastnameValue: PropTypes.string.isRequired,
  inputFirstnameValue: PropTypes.string.isRequired,
  inputEmailValue: PropTypes.string.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
};

export default RegisterForm;
