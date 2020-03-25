import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import scss
import './login.scss';
import LoginForm from '~/containers/Login/LoginForm';

const Login = () => (
  <div id="login">

    <Container>
      <Row
        lg={{ span: 8, offset: 3 }}
        md={{ span: 6, offset: 3 }}
        sm={{ span: 6, offset: 3 }}
        xs={12}>
        <Col className="box">
          <h2 className="title">Se Connecter</h2>
          <p>Renseigner ci-dessous votre adresse mail et votre mot de passe.</p>

          <LoginForm />

        </Col>
      </Row>
    </Container>

  </div>
);

export default Login;
