import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { IoIosAddCircleOutline } from 'react-icons/io';

// Import scss
import './create-new-team.scss';

const CreateNewTeam = ({ onSubmit }) => {
  const { handleSubmit, register, errors, triggerValidation } = useForm();

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    onSubmit(data);
    // Permet de reset les inputs suite au Submit
    e.target.reset();
  };

  return (
    <div id="createNewTeam">

      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
              <Form.Row>

                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Nom de votre équipe</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.teamName })}
                    onBlur={() => triggerValidation('teamName')}
                    onChange={() => triggerValidation('teamName')}
                    name="teamName"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.teamName && errors.teamName.message}
                </Col>

                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Nom du stade</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.teamStadium })}
                    onBlur={() => triggerValidation('teamStadium')}
                    onChange={() => triggerValidation('teamStadium')}
                    name="teamStadium"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.teamStadium && errors.teamStadium.message}
                </Col>

              </Form.Row>

              <Form.Row>

                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Adresse du stade</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.teamAddress })}
                    onBlur={() => triggerValidation('teamAddress')}
                    onChange={() => triggerValidation('teamAddress')}
                    name="teamAddress"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.teamAddress && errors.teamAddress.message}
                </Col>

                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Label>Ville du stade</Form.Label>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.teamCity })}
                    onBlur={() => triggerValidation('teamCity')}
                    onChange={() => triggerValidation('teamCity')}
                    name="teamCity"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.teamCity && errors.teamCity.message}
                </Col>

              </Form.Row>

              <Button type="submit">
                <IoIosAddCircleOutline />
                {' '}
                Ajouter cette équipe
                {' '}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

CreateNewTeam.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateNewTeam;
