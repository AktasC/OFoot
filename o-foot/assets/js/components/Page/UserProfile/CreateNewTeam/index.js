import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Import scss
import './create-new-team.scss';

const CreateNewTeam = ({ 
  onValueChange,
  onSubmit,
  input
}) => {

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('form envoyé');
  }


  const handleChange = (event) => {
    onValueChange(event.target.value, event.target.name);
  };
   
  return (
    <div id="createNewTeam">    

      <Container>
        <Row className="">
          <Col lg={12} md={12} sm={12} xs={12}> 

            <Form onSubmit={onSubmit}>
              <Form.Row>
                
                  <Form.Control                    
                    onChange={handleChange}
                    value={inputLastnameValue}                    
                    name="lastname"
                    placeholder="Nom"
                  />

              </Form.Row>
            </Form>
          </Col>            
        </Row>
      </Container>

  </div>
  )
};

export default CreateNewTeam;