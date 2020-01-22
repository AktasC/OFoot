import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

// Import scss
import './show-my-teams.scss';

const showMyTeams = () => (
   
  <div id="showMyTeams"> 
    <h4>Mes eeeeequipes</h4>
    <Row>
      <Col md={{ span: 6, offset: 3 }} > 
        <Carousel>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.sportmag.fr/wp-content/uploads/2018/04/Logo-PSG.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.sportmag.fr/wp-content/uploads/2018/04/Logo-PSG.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>      
        </Carousel>
      </Col>
    </Row>
  </div>
 
);

export default showMyTeams;