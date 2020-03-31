import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

// Import scss
import './register-form.scss';

const RegisterForm = ({ submitForm }) => {

  const {
    handleSubmit, register, errors, triggerValidation,
  } = useForm();

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    submitForm(data);
  };

  return (
    <div id="registerForm">

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Row>

          <Col>
            <Form.Control
              className={classNames('form-control', { wrong: errors.lastname })}
              placeholder="Nom"
              onBlur={() => triggerValidation('lastname')}
              onChange={() => triggerValidation('lastname')}
              name="lastname"
              ref={register({
                required: 'Champs requis',
              })}
            />
            {errors.lastname && errors.lastname.message}
          </Col>

          <Col>
            <Form.Control
              className={classNames('form-control', { wrong: errors.firstname })}
              placeholder="Prénom"
              onBlur={() => triggerValidation('firstname')}
              onChange={() => triggerValidation('firstname')}
              name="firstname"
              ref={register({
                required: 'Champs requis',
              })}
            />
            {errors.firstname && errors.firstname.message}
          </Col>

        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Control
              className={classNames('form-control', { wrong: errors.email })}
              placeholder="Email"
              onBlur={() => triggerValidation('email')}
              onChange={() => triggerValidation('email')}
              name="email"
              ref={register({
                required: 'Champs requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Votre adresse mail est incorrecte',
                },
              })}
            />
            {errors.email && errors.email.message}
          </Col>

          <Col>
            <Form.Control
              className={classNames('form-control', { wrong: errors.password })}
              placeholder="Mot de Passe"
              type="password"
              onBlur={() => triggerValidation('password')}
              onChange={() => triggerValidation('password')}
              name="password"
              ref={register({
                required: 'Champs requis',
                minLength: {
                  value: 6,
                  message: 'Votre mot de passe doit contenir au moins 6 caractères',
                },
              })}
            />
            {errors.password && errors.password.message}
          </Col>
        </Form.Row>

        <Button variant="primary" type="submit">
          S'inscrire
        </Button>

      </Form>
    </div>
  );
};

RegisterForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default RegisterForm;
