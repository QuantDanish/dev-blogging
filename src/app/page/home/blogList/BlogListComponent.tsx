import * as React from 'react';
import { CardColumns } from 'react-bootstrap';

import IBlog from '../../../common/interface/IBlog';
import BlogItem from './blogItem/BlogItemComponent';

export interface BlogListProps {
  readonly blogs: IBlog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <CardColumns>
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </CardColumns>
  );
};

export default BlogList;
