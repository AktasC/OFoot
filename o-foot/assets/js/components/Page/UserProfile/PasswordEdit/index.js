import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';


// Import scss
import './passwordEdit.scss'

const PasswordEdit = () => {
  
  return (
    <div id="passwordEdit">

      <Form>
        
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Mot de passe actuel
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Nouveau mot de passe
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="6">
                Confirmation du mot de passe
            </Form.Label>
            <Col sm="6">
                <Form.Control type="password" placeholder="" />
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