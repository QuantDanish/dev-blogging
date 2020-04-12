import * as React from 'react';
import { Row, Col, Container, Alert } from 'react-bootstrap';

const style = {
  errorCode: {
    fontSize: '10rem',
  },
  message: {
    fontSize: '3rem',
    color: '#d3d3d3',
  },
};

const NotFound: React.FC<any> = ({}) => {
  return (
    <Container className='not-found-component'>
      <Row className='justify-content-around'>
        <Col md={6}>
          <p style={style.errorCode}>404</p>
          <p style={style.message}>
            Page you're looking is no longer available.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
