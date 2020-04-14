import * as React from 'react';

import IBlog from '../../../common/interface/IBlog';
import BlogItem from './blogItem/BlogItemComponent';

export interface BlogListProps {
  readonly blogs: IBlog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog, index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </>
  );
};

export default BlogList;
