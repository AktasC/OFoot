import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';


// Import scss
import './addevent.scss';

const AddEvent = ({
  selectedOption,
  eventOptionChange,
  selectedOptionMatch,
  matchOptionChange,
  onSubmitAddEvent,
}) => {
  const {
    handleSubmit, register, errors, triggerValidation,
  } = useForm();

  const handleEventOptionChange = (evt) => {
    eventOptionChange(evt.target.value);
  };

  const handleMatchOptionChange = (evt) => {
    matchOptionChange(evt.target.value);
  };

  const onSubmit = (data, evt) => {
    evt.preventDefault();
    onSubmitAddEvent(data);
  };


  return (
    <div id="addEventForm">

      <Container>
        <Row>
          <Col>
            <Form id="addEvent" onSubmit={handleSubmit(onSubmit)}>
              <Form.Row className="radios">
                <Col className="radio_btn">
                  <Form.Check
                    type="radio"
                    name="type-event"
                    label="Entrainement"
                    value="entrainement"
                    checked={selectedOption === 'entrainement'}
                    onChange={handleEventOptionChange}
                  />
                  <Form.Check
                    type="radio"
                    name="type-event"
                    label="Match"
                    value="match"
                    checked={selectedOption === 'match'}
                    onChange={handleEventOptionChange}
                  />
                </Col>

                {selectedOption === 'match'
                  && (
                  <Col className="radio_btn">
                    <Form.Check
                      type="radio"
                      name="match"
                      label="Domicile"
                      value="domicile"
                      checked={selectedOptionMatch === 'domicile'}
                      onChange={handleMatchOptionChange}
                    />
                    <Form.Check
                      type="radio"
                      name="match"
                      label="Extérieur"
                      value="exterieur"
                      checked={selectedOptionMatch === 'exterieur'}
                      onChange={handleMatchOptionChange}
                    />
                  </Col>
                  )}

              </Form.Row>
              {selectedOption === 'match'
                  && (
                  <Col className="input">
                    <Form.Control
                      className={classNames('form-control', { wrong: errors.opponent })}
                      name="opponent"
                      placeholder="Adversaire"
                      onBlur={() => triggerValidation('opponent')}
                      onChange={() => triggerValidation('opponent')}
                      ref={register({
                        required: 'Champs requis',
                      })}
                    />
                    <span className="errorMessage">
                      {errors.opponent && errors.opponent.message}
                    </span>
                  </Col>
                  )}

              <Col className="input">
                <Form.Control
                  className={classNames('form-control', { wrong: errors.date_time })}
                  placeholder="Date et Heure"
                  type="datetime-local"
                  name="date_time"
                  onBlur={() => triggerValidation('date_time')}
                  onChange={() => triggerValidation('date_time')}
                  ref={register({
                    required: 'Merci de renseigner une date et une heure',
                  })}
                />
                <span className="errorMessage">
                  {errors.date_time && errors.date_time.message}
                </span>
              </Col>

              <Col className="input">
                <Form.Control
                  className={classNames('form-control', { wrong: errors.stadium })}
                  name="stadium"
                  placeholder="Stade"
                  onBlur={() => triggerValidation('stadium')}
                  onChange={() => triggerValidation('stadium')}
                  ref={register({
                    required: 'Champs requis',
                  })}
                />
                <span className="errorMessage">
                  {errors.stadium && errors.stadium.message}
                </span>
              </Col>

              <Col className="input">
                <Form.Control
                  className={classNames('form-control', { wrong: errors.adress })}
                  name="adress"
                  placeholder="Adresse"
                  onBlur={() => triggerValidation('adress')}
                  onChange={() => triggerValidation('adress')}
                  ref={register({
                    required: 'Champs requis',
                  })}
                />
                <span className="errorMessage">
                  {errors.adress && errors.adress.message}
                </span>
              </Col>

              <Button className="custom-btn" type="submit">Ajouter l'événement</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

AddEvent.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  eventOptionChange: PropTypes.func.isRequired,
  selectedOptionMatch: PropTypes.string.isRequired,
  matchOptionChange: PropTypes.func.isRequired,
  onSubmitAddEvent: PropTypes.func.isRequired,
};

export default AddEvent;
