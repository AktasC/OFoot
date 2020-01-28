import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoIosAddCircleOutline } from "react-icons/io";

// Import scss
import './create-new-team.scss';

const CreateNewTeam = ({ 
  onValueChange,
  onSubmitCreateTeam,
  teamNameValue,
  teamAddressValue,
  teamStadiumValue,    
  teamCityValue,   
}) => {

  const onSubmit = (event) => {
    console.log("hey submit");
    event.preventDefault();
    onSubmitCreateTeam();
  }


  const handleChange = (event) => {    
    onValueChange(event.target.value, event.target.name);
  };
   
  return (
    <div id="createNewTeam">    

      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}> 
            <Form onSubmit={onSubmit}>
              <Form.Row>
                
                <Col className="input" lg={6} md={6} sm={21} xs={12}>
                  <Form.Control                    
                    onChange={handleChange}
                    value={teamNameValue}                    
                    name="teamNameValue"
                    placeholder="Nom de votre équipe"
                  />
                </Col>

                <Col className="input" lg={6} md={6} sm={21} xs={12}>
                  <Form.Control                    
                    onChange={handleChange}
                    value={teamStadiumValue}                    
                    name="teamStadiumValue"
                    placeholder="Nom du Stade"
                  />
                </Col>

              </Form.Row>

              <Form.Row>

                <Col className="input" lg={6} md={6} sm={21} xs={12}>
                  <Form.Control                    
                    onChange={handleChange}
                    value={teamAddressValue}                    
                    name="teamAddressValue"
                    placeholder="Adresse du Stade"
                  />
                </Col>

                <Col className="input" lg={6} md={6} sm={21} xs={12}>
                  <Form.Control                    
                    onChange={handleChange}
                    value={teamCityValue}                    
                    name="teamCityValue"
                    placeholder="Ville du Stade"
                  />
                </Col>

              </Form.Row>

              <Button type="submit"><IoIosAddCircleOutline/> Ajouter cette équipe </Button>
            </Form>
          </Col>            
        </Row>
      </Container>

  </div>
  )
};

export default CreateNewTeam;