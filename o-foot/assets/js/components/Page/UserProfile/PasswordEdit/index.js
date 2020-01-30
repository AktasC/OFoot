import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';


// Import scss
import './passwordEdit.scss'

const PasswordEdit = ({ current_password, new_password, new_password_check, handleChangeValue, PasswordValue, errors, noSubmit, submitForm }) => {

  
  const onSubmitForm = (evt) => {
    evt.preventDefault(); 
    const errors = []; 
    if(current_password === '' || new_password === '' || new_password_check === '') {
      errors.push('Merci de compléter chacun des champs');
      noSubmit(errors);
    } else if (current_password !== PasswordValue & current_password!=='') {
      errors.push('Le mot de passe n\'est pas valide'); 
      noSubmit(errors);
    } else if (new_password !== new_password_check & new_password!=='' & new_password_check!==''){
      errors.push('Les mots de passe ne correspondent pas'); 
      noSubmit(errors);
    } else if (new_password.length < 6 & new_password!==''){
      errors.push('Le mot de passe doit contenir au moins 6 caractères'); 
      noSubmit(errors);
    } else {
      submitForm(evt.target.new_password_check.value);
    }
  }

  const onValueChange = (evt) => {
    handleChangeValue(evt.target.value, evt.target.name); 
  }



  return (
    <div id="passwordEdit">

      <Form onSubmit={onSubmitForm}>
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Mot de passe actuel
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" value={current_password} name='current_password' onChange={onValueChange} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Nouveau mot de passe
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" value={new_password} name='new_password' onChange={onValueChange} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Confirmation du mot de passe
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" value={new_password_check} name='new_password_check' onChange={onValueChange} />

            </Col>
        </Form.Group>
    
        <Row>
          <Col>
          {(errors.length > 0) && errors.map((error, i) => (<div key={i}><p>{error}</p></div>))}
            <Button variant="primary" type="submit">
              Valider le changement
            </Button>
          </Col>
        </Row>
      </Form>

          
    </div>
  );

};

PasswordEdit.propTypes = {
  current_password: PropTypes.string.isRequired, 
  new_password: PropTypes.string.isRequired, 
  new_password_check: PropTypes.string.isRequired, 
  handleChangeValue: PropTypes.func.isRequired, 
  PasswordValue: PropTypes.string.isRequired,  
  noSubmit: PropTypes.func.isRequired, 
  submitForm: PropTypes.func.isRequired 
};

export default PasswordEdit;