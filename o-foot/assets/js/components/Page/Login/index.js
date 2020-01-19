import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

// Import scss
import './login.scss';
import LoginForm from './LoginForm';

const Login = () => (

  <div id="register">

    <Container>
      <Row lg={{ span: 8, offset: 3 }} md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} xs={12}>
        <Col className="box">
          <h2 className="title">Se Connecter</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est qui rerum earum quidem placeat. Distinctio aliquid, quasi unde veritatis, itaque amet ab voluptate rerum adipisci architecto maxime rem enim voluptatibus!</p>

          <LoginForm />

        </Col>
      </Row>
    </Container>

  </div>

);

export default Login;
