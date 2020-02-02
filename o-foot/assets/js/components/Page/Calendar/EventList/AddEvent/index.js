import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Import scss
import './addevent.scss';

const AddEvent = () => {

    /*onSubmit = (event) => {
        event.preventDefault();    
        this.props.onSubmitUpdateTeamInfos(this.state);
      }  
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }*/
    
        return (
          <div id="addEventForm">
    
            <Container>
              <Row>
                <Col>
                  <Form id="addEvent">
                    <Form.Row className="radios">
                      <Col className="radio">
                      <Form.Check
                        //type={type}
                        label='match'
                     />
                     <Form.Check
                        //type={type}
                        label='entrainement'
                    />
                      </Col>
                      <Col className="radio">
                      <Form.Check
                        //type={type}
                        label='domicile'
                     />
                     <Form.Check
                        //type={type}
                        label='extèrieur'
                    />
                      </Col>
                      </Form.Row>
    
                      <Col className="input">
                        <Form.Control
                          name="adversaire"
                          placeholder="Adversaire"
                        />
                      </Col>
                
                      <Col className="input">
                        <Form.Control
                          name="date-heure"
                          placeholder="Date et Heure"
                        />
                      </Col>
    
                      <Col className="input">
                        <Form.Control
                          name="stade"
                          placeholder="Stade"
                        />
                      </Col>

                      <Col className="input">
                        <Form.Control
                          name="adresse"
                          placeholder="Adresse"
                        />
                      </Col>
    
                    <Button className="custom-btn" type="submit">Ajouter l'événement</Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        )

}

export default AddEvent; 