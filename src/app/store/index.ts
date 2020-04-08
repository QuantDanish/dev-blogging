import { compose, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import reducer from './rootReducer';
import { HomeActionType } from '../page/home/duck';
import { BlogActionType } from '../page/blog/duck/types';

export type AppAction = HomeActionType | BlogActionType;

const tool = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose;

const composeEnhancer = tool || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)));

export type AppState = ReturnType<typeof reducer>;

export default store;
