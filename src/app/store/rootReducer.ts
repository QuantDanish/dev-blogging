import { combineReducers } from 'redux';
import homeReducer from '../page/home/duck';
import blogReducer from '../page/blog/duck';

const reducer = {
  home: homeReducer,
  blog: blogReducer,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
