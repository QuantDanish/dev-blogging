import * as React from 'react';
import IBlog from '../../../../common/interface/IBlog';
import { Card } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

import './blogItem.scss';

type BlogItemProps = {
  blog: IBlog;
};

const generateUrl = (baseUrl: string, id: number) =>
  [baseUrl, 'blog/', id].join('');

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  let match = useRouteMatch();
  return (
    <Card className='blog-item-component'>
      <Card.Img variant='top' src={blog.image} />
      <Card.Body>
        <Card.Title>
          <h3>{blog.title}</h3>
        </Card.Title>
        <p className='text-muted'>{blog.synopsis || ''}</p>
        <p>
          <b>By: </b>
          {blog.author}
        </p>
        <div className='p-1'>
          <Link
            className='btn w-100 btn-outline-primary'
            to={generateUrl(match.url, blog.index)}
          >
            Read full blog
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
