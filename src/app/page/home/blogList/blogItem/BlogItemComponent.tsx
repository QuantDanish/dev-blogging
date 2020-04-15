import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { IBlog } from 'Types/';
import './blogItem.scss';

type BlogItemProps = {
  blog: IBlog;
};

const generateUrl = (baseUrl: string, id: number) =>
  [baseUrl, 'blog/', id].join('');

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  const match = useRouteMatch();
  return (
    <Row className="blog-item-component justify-content-around my-5">
      <Col md={10}>
        <Card>
          <Card.Body>
            <Row>
              <Col md={3}>
                <img
                  className="w-100"
                  src={blog.image}
                  alt="image not available"
                />
              </Col>
              <Col md={9}>
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div className="flex-fill my-1">
                    <h3>{blog.title}</h3>
                  </div>
                  <div className="flex-fill my-1 text-muted">
                    {blog.synopsis || ''}
                  </div>
                  <div className="flex-fill my-1 align-bottom">
                    <span className="text-muted">author</span>: {blog.author}
                    <Link
                      className="float-right btn btn-outline-primary"
                      to={generateUrl(match.url, blog.index)}
                    >
                      Read full blog
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BlogItem;
