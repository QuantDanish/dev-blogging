import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './component/header';
import AppRoute from './component/appRoute';
import Footer from './component/footer';

import './app.scss';

const App: React.FC = () => {
  return (
    <div className="app-component">
      <BrowserRouter>
        <Header />
        <AppRoute />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
