import * as React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { scrollToTop } from 'Utils';
import SingUpForm from './signUpForm/SignUpFormComponent';

const SignUp: React.FC = () => {
  React.useEffect(() => scrollToTop());

  return (
    <Container className="sign-up-component">
      <Row className="justify-content-around">
        <Col md={5}>
          <h3 className="text-center mt-2">Sign up to Dev Blogging</h3>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col md={5} className="mt-5 align-middle">
          <Card>
            <Card.Body className="my-3 p-3">
              <SingUpForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col md={5} className="mt-3">
          <div className="my-3 text-muted text-center">
            Already have an account ?{' '}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
