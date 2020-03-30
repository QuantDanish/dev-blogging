import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './component/header/header';
import AppRoute from './component/appRoute/appRoute';
import './app.scss';
import Footer from './component/footer/FooterComponent';

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
