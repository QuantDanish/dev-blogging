import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './blog.scss';

const Blog: React.FC<any> = ({}) => {
  const { id } = useParams();
  return (
    <Container className="blog-component">
      Blog id : {id}
      <h1 className="text-center">Title</h1>
      <Row className="justify-content-around">
        <Col lg={10}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="no image" />
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col className="blog-content" lg={10}>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
          passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
          Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
          of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col lg={10}>
            <p className="mt-1">By <b>Author name</b></p>
            <p>On: 23 March 2020</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;