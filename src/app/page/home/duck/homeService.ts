import { Dispatch } from 'redux';

import * as networkService from '../../../common/services/networkService';
import { IBlog } from '../../../common/interface';
import { fetchBlogs, receivedBlogs, sendError } from './actionCreator';
import { AppState, AppAction } from '../../../store';

/*********	TODO: change return type of  getState to AppState	***********/

export const getMetaBlogs = async () => await networkService.fetchBlogInfo();

export const getBlogs = () => {
  return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
    dispatch(fetchBlogs());
    networkService
      .fetchBlogInfo()
      .then((blogs: IBlog[]) => {
        console.log('fetchBlogs return success promise ::');
        receivedBlogs(blogs);
      })
      .catch((error: string[]) => {
        console.log(error);
        dispatch(sendError(error));
      });
  };
};
