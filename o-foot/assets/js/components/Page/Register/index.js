import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

// Import scss
import './register.scss';

const Register = () => (
    
    <div id="register">
      
      <Container>
        <Row >
          <Col lg={{span: 6, offset: 3}} md={{span: 6, offset: 3}} sm={{span: 6, offset: 3}} xs={12}>
            <div className="box">
              <h2 className="title">S'inscrire</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est qui rerum earum quidem placeat. Distinctio aliquid, quasi unde veritatis, itaque amet ab voluptate rerum adipisci architecto maxime rem enim voluptatibus!</p>   
            </div>

           
          </Col>
        </Row>
      </Container>

    </div>
 
);

export default Register;
