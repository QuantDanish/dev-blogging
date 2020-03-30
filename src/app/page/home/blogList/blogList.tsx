import * as React from 'react';
import { Row } from 'react-bootstrap';
import IBlog from '../../../common/interface/IBlog';
import BlogItem from './blogItem/blogItem';

const filterItems = ():IBlog[] => {
  return [
    {
      index:1,
      title: "Blog 1",
      content: "Redux is a predictable state container for JavaScript apps.      It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.          You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      createdOn: new Date(),
      author: "Test author "
    },
    {
      index:2,
      title: "Blog 2",
      content: "Redux is a predictable state container for JavaScript apps.      It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.          You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      createdOn: new Date(),
      author: "Test author "
    },
    {
      index:3,
      title: "Blog 3",
      content: "Redux is a predictable state container for JavaScript apps.      It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.          You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      createdOn: new Date(),
      author: "Test author "
    },
    {
      index:4,
      title: "Blog 3",
      content: "Redux is a predictable state container for JavaScript apps.      It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.          You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      createdOn: new Date(),
      author: "Test author "
    },
    {
      index:5,
      title: "Blog 3",
      content: "Redux is a predictable state container for JavaScript apps.      It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.          You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      createdOn: new Date(),
      author: "Test author "
    },
  ] as IBlog[];
}


const BlogList: React.FC = () => {
  return (
    <Row className="blog-list-component justify-content-around">
      {filterItems().map((blog, index) => <BlogItem key={index} blog={blog} />)}
    </Row>
  )
}




export default BlogList;
