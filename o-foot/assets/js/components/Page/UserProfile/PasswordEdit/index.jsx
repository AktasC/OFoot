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
    console.log( ">>> Change PWD >>>:", data);
    /* onSubmit(data); */
  };

  /* const onSubmitForm = (evt) => {
    evt.preventDefault();
    const errors = [];
    if (current_password === '' || new_password === '' || new_password_check === '') {
      errors.push('Merci de compléter chacun des champs');
      noSubmit(errors);
    } else if (current_password != PasswordValue & current_password != '') {
      errors.push('Le mot de passe n\'est pas valide');
      noSubmit(errors);
    } else if (new_password !== new_password_check & new_password !== '' & new_password_check !== '') {
      errors.push('Les mots de passe ne correspondent pas');
      noSubmit(errors);
    } else if (new_password.length < 6 & new_password !== '') {
      errors.push('Le mot de passe doit contenir au moins 6 caractères');
      noSubmit(errors);
    } else {
      submitForm(evt.target.new_password_check.value);
    }
  };

  const onValueChange = (evt) => {
    handleChangeValue(evt.target.value, evt.target.name);
  }; */

  console.log(">>> Errors >>>", errors.newPwd);

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
                    })}
                  />
                  {errors.actualPwd && errors.actualPwd.message}
                </Col>

                <Col className="input" lg={{ span: 8, offset: 2 }}>
                  <Form.Label>Nouveau mot de passe</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.newPwd })}
                    onBlur={() => triggerValidation('newPwd')}
                    /* onChange={() => triggerValidation('newPwd')} */
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
                    /* onChange={() => triggerValidation('confirmNewPwd')} */
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
  current_password: PropTypes.string.isRequired,
  new_password: PropTypes.string.isRequired,
  new_password_check: PropTypes.string.isRequired,
  handleChangeValue: PropTypes.func.isRequired,
  PasswordValue: PropTypes.string.isRequired,
  noSubmit: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default PasswordEdit;
