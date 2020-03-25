/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

// Import scss
import './loginform.scss';

const LoginForm = ({ submitForm }) => {

  const {
    handleSubmit, register, errors, triggerValidation,
  } = useForm();

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    submitForm(data);
  };

  return (
    <div id="loginForm">

      <Form onSubmit={handleSubmit(onSubmitForm)}>

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

        <Button variant="primary" type="submit">
          Se connecter
        </Button>

      </Form>

    </div>
  );
};

LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;
