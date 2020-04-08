import * as React from 'react';
import { Row } from 'react-bootstrap';

import IBlog from '../../../common/interface/IBlog';
import BlogItem from './blogItem/BlogItemComponent';

export interface BlogListProps {
  readonly blogs: IBlog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <Row className='blog-list-component justify-content-around'>
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </Row>
  );
};

export default BlogList;
