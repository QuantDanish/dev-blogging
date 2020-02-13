import * as React from 'react';

import BlogComponent from './Blog/BlogComponent';
import './app.scss';

import  data from '../data';



const App = () => {
  return (
    <div className="app-component">
      {
        data.map((blog, index) => 
          <BlogComponent key={index} blog={blog} />)
      }
    </div>
  )
}

export default App;
