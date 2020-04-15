import { compose, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import reducer from './rootReducer';
import { HomeActionType } from '../page/home/duck';
import { BlogActionType } from '../page/blog/duck/types';
import { composeEnhancers } from './devTool';

export type AppAction = HomeActionType | BlogActionType;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
  )
);

export type AppState = ReturnType<typeof reducer>;

export default store;
