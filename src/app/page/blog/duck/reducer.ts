import initialState from './initialState';
import { LOAD_BLOG, SET_SUCCESS, SET_ERROR } from './actionType';
import { BlogActionType, BlogReducer } from './types';

const blogReducer: BlogReducer = (
  state = initialState,
  action: BlogActionType
) => {
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
    default:
      console.log('[Blog Reducer]', action);
      return state;
  }
};

export default blogReducer;
