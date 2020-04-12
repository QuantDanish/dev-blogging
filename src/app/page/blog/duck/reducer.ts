import initialState from './initialState';
import { LOAD_BLOG, SET_SUCCESS, SET_ERROR, CLEAR } from './actionType';
import { BlogActionType, BlogReducer } from './types';

const blogReducer: BlogReducer = (
  state = initialState,
  action: BlogActionType
) => {
  console.log('[Blog Reducer] : State ', state);
  switch (action.type) {
    case LOAD_BLOG:
      console.log('[Blog Reducer]', action);
      return { loading: true, ...state };
    case SET_SUCCESS:
      console.log('[Blog Reducer]', action);
      return { loading: false, blog: action.blog };
    case SET_ERROR:
      console.log('[Blog Reducer]', action);
      return { loading: false, error: action.error, ...state };
    case CLEAR:
      return initialState;
    default:
      console.log('[Blog Reducer]', action);
      return state;
  }
};

export default blogReducer;
