import * as React from 'react';
import reactImage from '../../assets/images/react.png';
import reduxImage from '../../assets/images/redux.png';

// import IBlog from './shared/interface/IBlog';

const data: any[] = [
  {
    index: 1,
    title: `Introduction to  React`,
    content: `"React has been designed from the start for gradual adoption, and
     you can use as little or as much React as you need. Whether you want to get a taste of React, add
    some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help
    you get started."`,
    synopsis: `interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help...`,
    image: ['/', reactImage].join(''),
    author: 'John Wick',
    createdOn: new Date(),
  },
  {
    index: 3,
    title: `Getting started with Redux`,
    content: `Redux is a predictable state container for JavaScript apps.

    It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
    
    You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.`,
    synopsis: `interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help...`,
    image: ['/', reduxImage].join(''),
    author: 'John Wick',
    createdOn: new Date(),
  },
  {
    index: 2,
    title: `New Hooks in react and using it in you running application.`,
    content: `"React has been designed from the start for gradual adoption, and
     you can use as little or as much React as you need. Whether you want to get a taste of React, add
    some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help
    you get started."`,
    synopsis: `interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help...`,
    image: ['/', reactImage].join(''),
    author: 'John Wick',
    createdOn: new Date(),
  },
  {
    index: 5,
    title: `Deep dive in react and redux.`,
    content: `Redux is a predictable state container for JavaScript apps.

    It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
    
    You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.`,
    synopsis: `You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies),...`,
    image: ['/', reduxImage].join(''),
    author: 'John Wick',
    createdOn: new Date(),
  },
  {
    index: 4,
    title: `Better Reusable React Components with the Overrides Pattern`,
    content: `"React has been designed from the start for gradual adoption, and
     you can use as little or as much React as you need. Whether you want to get a taste of React, add
    some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help
    you get started."`,
    synopsis: `React has been designed from the start for gradual adoption, and
     you can use as little or as much React as you need.`,
    image: ['/', reactImage].join(''),
    author: 'John Wick',
    createdOn: new Date(),
  },
  {
    index: 6,
    title: `Optimise your redux store with new tools.`,
    content: `Redux is a predictable state container for JavaScript apps.

    It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
    
    You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.`,
    synopsis: `Redux is a predictable state container for JavaScript apps.

    It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience,..`,
    image: ['/', reduxImage].join(''),
    author: 'John Wick',
    createdOn: new Date(),
  },
];

export default data;
