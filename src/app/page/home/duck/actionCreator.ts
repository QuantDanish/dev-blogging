import { FETCH_BLOGS, SUCCESS, FAILURE } from './actionTypes';
import { HomeActionType } from './types';
import { IBlog } from '../../../common/interface';

export const fetchBlogs = (): HomeActionType => ({
  type: FETCH_BLOGS,
});

export const receivedBlogs = (blogs: IBlog[]): HomeActionType => ({
  type: SUCCESS,
  blogs,
});

export const sendError = (error: string[]): HomeActionType => ({
  type: FAILURE,
  error,
});
