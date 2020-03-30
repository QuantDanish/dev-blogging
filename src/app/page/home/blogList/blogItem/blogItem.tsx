import * as React from 'react';
import IBlog from '../../../../common/interface/IBlog';
import { Card } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

import './blogItem.scss';

type BlogItemProps= {
  blog: IBlog
}

const BlogItem: React.FC<BlogItemProps> = ({blog}) => {
  let match = useRouteMatch();
  return (
    <Card className="blog-item-component">
      <Card.Img src={blog.image} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <p>
          <b>By: </b>{blog.author}
        </p>
        <Link to={`${match.url}blog/${blog.index}`}>Read full blog</Link>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
