import * as React from 'react';
import { Button } from 'react-bootstrap';
import IBlog from "../../interface/IBlog";;

import './blog.scss';

type BlogProps = {
  blog: IBlog
}


const BlogComponent: React.FunctionComponent<BlogProps> = ({blog}) => {
  return <>
    <div className="blog-component">
      <h1>
        {blog.index} {blog.title} !!
      </h1>
      <img className="image" src={blog.image} alt="No image" />
      <p>{blog.content}</p>
      <hr />
      <p>By- {blog.author} </p>
      <p>On {blog.createdOn.toDateString()}</p>
      <Button variant="outline-primary">Edit</Button>
    </div>
  </>
};

export default BlogComponent;
