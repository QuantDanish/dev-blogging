import * as React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingUpForm from './signUpForm/SignUpFormComponent';
import { Link } from 'react-router-dom';

const SignUp: React.FC<any> = ({}) => {
  return (
    <Container className='sign-up-component'>
      <Row className='justify-content-around'>
        <Col md={5} className='mt-5 align-middle'>
          <Card>
            <Card.Body className='my-3 p-3'>
              <SingUpForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-around'>
        <Col md={5} className='mt-3'>
          <div className='p-3'>
            <p className='text-muted'>
              Already have an account ?{' '}
              <span>
                <Link to='/login'>Login</Link>
              </span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
