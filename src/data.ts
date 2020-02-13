import reactImage from './assets/images/react.png';
import reduxImage from './assets/images/redux.png';

import IBlog from './interface/IBlog';



const data: IBlog[] = [
  {
    index: 1,
    title: `It's React`,
    content: `"React has been designed from the start for gradual adoption, and
     &lt;b&gt; you can use as little or as much React as you need&lt;/b&gt; . Whether you want to get a taste of React, add
    some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help
    you get started."`,
    image: reactImage,
    author:'Mohammad Danish',
    createdOn: new Date(),
  },
  {
    index: 2,
    title: `Redux`,
    content: `Redux is a predictable state container for JavaScript apps.

    It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
    
    You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.`,
    image: reduxImage,
    author:'Mohammad Danish',
    createdOn: new Date(),
  }
]

export default data;