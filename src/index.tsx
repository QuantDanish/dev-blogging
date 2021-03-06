import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './app/store';

import './index.scss';

const wrapper = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(wrapper, document.getElementById('root'));
