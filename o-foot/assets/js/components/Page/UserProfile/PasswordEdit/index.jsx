import React from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';


// Import scss
import './password-edit.scss';

const PasswordEdit = ({ onSubmit }) => {
  const { handleSubmit, register, errors, triggerValidation, watch } = useForm();

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div id="passwordEdit">

      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
              <Form.Row>

                <Col className="input" lg={{ span: 8, offset: 2 }}>
                  <Form.Label>Mot de passe actuel</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.actualPwd })}
                    onBlur={() => triggerValidation('actualPwd')}
                    onChange={() => triggerValidation('actualPwd')}
                    name="actualPwd"
                    ref={register({
                      required: 'Champs requis',
                      minLength: {
                        value: 6,
                        message: 'Votre mot de passe contient au moins 6 caractères',
                      },
                    })}
                  />
                  {errors.actualPwd && errors.actualPwd.message}
                </Col>

                <Col className="input" lg={{ span: 8, offset: 2 }}>
                  <Form.Label>Nouveau mot de passe</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.newPwd })}
                    onBlur={() => triggerValidation('newPwd')}
                    onChange={() => triggerValidation('newPwd')}
                    name="newPwd"
                    ref={register({
                      required: 'Champs requis',
                      minLength: {
                        value: 6,
                        message: 'Votre mot de passe doit contenir au moins 6 caractères',
                      },
                      validate: (value) => value !== watch('actualPwd') || 'Mot de passe identique au précédent',
                    })}
                  />
                  {errors.newPwd && errors.newPwd.message}
                </Col>

              </Form.Row>

              <Form.Row>

                <Col className="input" lg={{ span: 8, offset: 2 }}>
                  <Form.Label>Confirmation du mot de passe</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.confirmNewPwd })}
                    onBlur={() => triggerValidation('confirmNewPwd')}
                    onChange={() => triggerValidation('confirmNewPwd')}
                    name="confirmNewPwd"
                    ref={register({
                      required: 'Champs requis',
                      validate: (value) => value === watch('newPwd') || 'Mot de passe ne correspondent pas',
                    })}
                  />
                  {errors.confirmNewPwd && errors.confirmNewPwd.message}
                </Col>

              </Form.Row>

              <Button type="submit">
                {' '}
                Enregistrer les modifications
                {' '}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>


    </div>
  );
};

PasswordEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PasswordEdit;
