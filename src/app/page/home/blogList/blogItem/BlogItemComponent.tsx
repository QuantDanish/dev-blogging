import * as React from 'react';
import IBlog from '../../../../common/interface/IBlog';
import { Card } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

import './blogItem.scss';

type BlogItemProps = {
  blog: IBlog;
};

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  let match = useRouteMatch();
  return (
    <Card className='blog-item-component'>
      <Card.Img variant='top' src={blog.image} />
      <Card.Body>
        <Card.Title>
          <h3>{blog.title}</h3>
        </Card.Title>
        <p>
          <b>By: </b>
          {blog.author}
        </p>
        <Link to={`${match.url}blog/${blog.index}`}>Read...</Link>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
