import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

// Import scss
import './section.scss';


const Section = (func) => {
    console.log(func)

    var divStyle = {      
      backgroundImage: 'url(' + func.img + ')',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
    };

    return (

      <div id="section">

        <Container>
          <Row>
            <Col lg={6} md={6} sm={6} xs={6}>
              <h2 className="section-title">{func.title}</h2>
              <p className="section-content">{func.content}</p>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div style={divStyle}></div>              
            </Col>
          </Row>         
        </Container>

      </div>

    )
 
};

export default Section;
