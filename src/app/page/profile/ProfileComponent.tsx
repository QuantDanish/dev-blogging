import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import profileImg from 'Components/../assets/images/account.png';

const Profile: React.FC = () => {
  return (
    <Row className="profile-component align-items-center justify-content-around">
      <Col className="my-2" md={10}>
        <Card>
          <Card.Body>
            <Row>
              <Col className="border-right p-3" md={4}>
                <img className="rounded-circle w-100" src={profileImg} alt="" />
              </Col>
              <Col className="p-3" md={8}>
                <div className="p-1 text-uppercase h1">Mohd Danish</div>
                <div className="p-1 text-uppercase text-bold">
                  Software Engineer
                </div>
                <div className="p-1 text-muted">mohd@danish.com</div>
                <div className="p-1 text-muted">
                  <small>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </small>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
