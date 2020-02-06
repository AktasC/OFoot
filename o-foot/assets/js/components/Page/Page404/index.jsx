import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Col, Row, Container, Button,
} from 'react-bootstrap';
import { TiArrowForwardOutline } from 'react-icons/ti';


// Import scss
import './page-404.scss';

const Page404 = () => (

  <div id="page404">

    <Container>
      <div className="sweatband">
        <h2>Hum, vous faites fausse route !</h2>
      </div>

      <Row className="">
        <Col lg={12}>
          <img src="/img/404.gif" alt="Mauvaise route jeune homme" />
        </Col>
        <Col lg={12}>
          <NavLink to="/" className="link">
            <Button>
              <TiArrowForwardOutline />
              {' '}
              This way
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>

  </div>

);

// == Export
export default Page404;
