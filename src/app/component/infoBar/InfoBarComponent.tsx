import * as React from 'react';
import { Alert, Row, Col } from 'react-bootstrap';


import { InfoBarProps } from './types';



const InfoBar: React.FC<InfoBarProps> = ({ message }) => {
  return (
    <Row className="justify-content-md-center">
      <Col md={4} >
        <Alert variant="info">{message || ''}</Alert>
      </Col>
    </Row>
  );
};

export default InfoBar;
