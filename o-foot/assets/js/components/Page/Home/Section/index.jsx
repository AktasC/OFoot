import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

// Import scss
import './section.scss';


const Section = (func) => {
  console.log(func);

  const divStyle = {
    backgroundImage: `url(${func.img})`,
    width: 'auto',
    height: '350px',
    backgroundPosition: 'center',
    backgroundColor: 'white',
    backgroundSize: 'cover',
  };

  return (

    <div id="sections">
      <div id="section" className={func.classColor}>
        <Container>
          <Row className={func.classPosition}>
            <Col lg={6} md={6} sm={6} xs={6} className="align-with-pic">
              <h2 className="section-title">{func.title}</h2>
              <p className="section-text">{func.content}</p>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div style={divStyle} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  );
};

export default Section;
