import { log } from 'Services/loggerService';
import initialState from './initialState';
import { LOAD_BLOG, SET_SUCCESS, SET_ERROR, CLEAR } from './actionType';
import { BlogActionType, BlogReducer } from './types';

const blogReducer: BlogReducer = (
  state = initialState,
  action: BlogActionType
) => {
  log('[Blog Reducer] : State ', state);
  switch (action.type) {
    case LOAD_BLOG:
      log('[Blog Reducer]', action);
      return { loading: true, ...state };
    case SET_SUCCESS:
      log('[Blog Reducer]', action);
      return { loading: false, blog: action.blog };
    case SET_ERROR:
      log('[Blog Reducer]', action);
      return { loading: false, error: action.error, ...state };
    case CLEAR:
      return initialState;
    default:
      log('[Blog Reducer]', action);
      return state;
  }
};

export default blogReducer;
