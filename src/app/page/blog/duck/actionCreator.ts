import { BlogActionType } from './types';
import { LOAD_BLOG, SET_ERROR, SET_SUCCESS, CLEAR } from './actionType';
import { IBlog } from '../../../common/interface';

export const loadBlog = (): BlogActionType => ({ type: LOAD_BLOG });

export const setError = (error: string[]): BlogActionType => ({
  type: SET_ERROR,
  error,
});

export const setSuccess = (blog: IBlog): BlogActionType => ({
  type: SET_SUCCESS,
  blog,
});

export const resetState = (): BlogActionType => ({ type: CLEAR });
