import * as React from 'react';
import * as ReactDOM from "react-dom";
// import {Provider} from 'react-redux';

import App from "./component/App";
// import store from './store/store';


import './index.scss';

{/* <Provider store={store}>
</Provider> */}

ReactDOM.render(
  <App />
, document.getElementById('root'));