import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { scrollToTop } from 'Utils';
import LoginForm from './loginForm/LoginFormComponent';

const Login: React.FC = () => {
  React.useEffect(() => {
    scrollToTop();
  });

  return (
    <Container className="login-component">
      <Row className="mt-3 justify-content-around">
        <Col md={5}>
          <h3 className="text-center">Login to Dev Blogging</h3>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col className="mt-3" md={5}>
          <LoginForm />
        </Col>
      </Row>

      <Row className="mt-2 justify-content-around">
        <Col md={5}>
          <div className="text-center text-muted">
            No account ? <Link to="/sign-up">Sign Up</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
