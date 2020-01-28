import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './passwordEdit.scss'

const PasswordEdit = ({ current_password, new_password, new_password_check, handleChangeCurrentPassword,  handleChangeNewPassword, handleChangeNewPasswordCheck }) => {
  
  const onSubmitForm = (evt) => {
    evt.preventDefault(); 
    if(current_password === '' || new_password === '' || new_password_check === '') {
      console.log('stop');
    } else {
      console.log('ok'); 
    }
  }

  const onChangeCurrentPassword = (evt) => {
    handleChangeCurrentPassword(evt.target.value); 
  }

  const onChangeNewPassword = (evt) => {
    handleChangeNewPassword(evt.target.value); 
  }

  const onChangeNewPasswordCheck = (evt) => {
    handleChangeNewPasswordCheck(evt.target.value); 
  }


  return (
    <div id="passwordEdit">

      <Form onSubmit={onSubmitForm}>
        
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Mot de passe actuel
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" value={current_password} onChange={onChangeCurrentPassword} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Nouveau mot de passe
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" name={new_password} onChange={onChangeNewPassword} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Confirmation du mot de passe
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" name={new_password_check} onChange={onChangeNewPasswordCheck} />
            </Col>
        </Form.Group>
    
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Valider le changement
            </Button>
          </Col>
        </Row>
      </Form>

          
    </div>
  );

};

export default PasswordEdit;