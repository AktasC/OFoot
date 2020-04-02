import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

// Import scss
import './useredit.scss';

const UserEdit = ({ onSubmit, userInformations }) => {
  const { handleSubmit, register, errors, triggerValidation, reset } = useForm({
    defaultValues: userInformations,
  });

  // Obliger d'utiliser ce hook car sinon le form se charge avec ses inputs vides et non rempli par les infos de l'utilisateur
  useEffect(() => {
    if (userInformations) {
      reset(userInformations);
    }
  }, [userInformations, reset]);

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div id="userEdit">

      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
              <Form.Row>

                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.last_name })}
                    onBlur={() => triggerValidation('last_name')}
                    onChange={() => triggerValidation('last_name')}
                    name="last_name"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.last_name && errors.last_name.message}
                </Col>

                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.first_name })}
                    onBlur={() => triggerValidation('first_name')}
                    onChange={() => triggerValidation('first_name')}
                    name="first_name"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.first_name && errors.first_name.message}
                </Col>

              </Form.Row>

              <Form.Row>

                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.email })}
                    onBlur={() => triggerValidation('email')}
                    onChange={() => triggerValidation('email')}
                    name="email"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.email && errors.email.message}
                </Col>

                {/* <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Ville du stade</Form.Label>
                  <Form.Control
                    type="file"
                    name="picture"
                  />
                </Col> */}

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

UserEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userInformations: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default UserEdit;