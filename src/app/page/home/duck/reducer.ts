import { log } from 'Services/loggerService';
import { HomeState, HomeActionType } from './types';
import { SUCCESS, FAILURE, FETCH_BLOGS } from './actionTypes';
import initialState from './initialState';

const homeReducer = (
  state = initialState,
  action: HomeActionType
): HomeState => {
  log('Home Reducer :: ', action);
  switch (action.type) {
    case FETCH_BLOGS:
      return { loading: true, success: false, failure: false };

    case SUCCESS:
      log('returning success');
      return {
        loading: false,
        success: false,
        failure: false,
        blogs: [...action.blogs],
      };

    case FAILURE:
      return { loading: false, success: false, failure: true };

    default:
      return state;
  }
};

export default homeReducer;
