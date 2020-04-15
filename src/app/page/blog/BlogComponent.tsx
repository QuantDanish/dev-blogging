import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './blog.scss';
import { BlogProps } from './duck';

const Blog: React.FC<BlogProps> = ({ blog }) => {
  const { index, title, image, content, author, createdOn } = blog;
  return (
    <Container className="blog-component">
      <h1 className="py-2 text-center">{title}</h1>
      <Row className="justify-content-around">
        <img src={image} alt="no image" />
      </Row>
      <Row className="justify-content-around">
        <Col className="blog-content" lg={11}>
          {content}
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col lg={11}>
          <p className="mt-1">
            By <b>{author}</b>
          </p>
          <p>On: {createdOn.toDateString()}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
