import React from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';

// Import scss
import './addevent.scss';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
    };
  }


  render() {
    const {
      selectedOption,
      eventOptionChange,
      selectedOptionMatch,
      matchOptionChange,
      onValueChange,
      opponent,
      date_time,
      stadium,
      adress,
      onSubmitAddEvent,
    } = this.props;

    const dateFocus = () => {
      this.setState({
        type: 'datetime-local',
      });
    };

    const handleEventOptionChange = (evt) => {
      eventOptionChange(evt.target.value);
    };

    const handleMatchOptionChange = (evt) => {
      matchOptionChange(evt.target.value);
    };

    const handleChangeAddEvent = (event) => {
      onValueChange(event.target.value, event.target.name);
    };

    const onSubmit = (evt) => {
      evt.preventDefault();
      onSubmitAddEvent();
    };


    return (
      <div id="addEventForm">

        <Container>
          <Row>
            <Col>
              <Form id="addEvent" onSubmit={onSubmit}>
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
                              name="opponent"
                              value={opponent}
                              onChange={handleChangeAddEvent}
                              placeholder="Adversaire"
                            />
                          </Col>
                          )}

                <Col className="input">
                  <Form.Control
                    onFocus={dateFocus}
                    placeholder="Date et Heure"
                    type={this.state.type}
                    name="date_time"
                    value={date_time}
                    onChange={handleChangeAddEvent}
                  />
                </Col>

                <Col className="input">
                  <Form.Control
                    name="stadium"
                    placeholder="Stade"
                    value={stadium}
                    onChange={handleChangeAddEvent}
                  />
                </Col>

                <Col className="input">
                  <Form.Control
                    name="adress"
                    placeholder="Adresse"
                    value={adress}
                    onChange={handleChangeAddEvent}
                  />
                </Col>

                <Button className="custom-btn" type="submit">Ajouter l'événement</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddEvent;
