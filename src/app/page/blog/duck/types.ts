import { Action } from 'redux';
import { IBlog } from '../../../common/interface';
import { LOAD_BLOG, SET_SUCCESS, SET_ERROR } from './actionType';

/*********	blog state type	***********/
export interface BlogState {
  blog: IBlog;
  error?: string[];
  loading: boolean;
}

/*********	blog props type	***********/
export interface BlogProps {
  blog: IBlog;
}

/*********	action creator types	***********/
export interface LoadBlogAction extends Action<typeof LOAD_BLOG> {}

export interface SetErrorAction extends Action<typeof SET_ERROR> {
  error: string[];
}
export interface SetSuccessAction extends Action<typeof SET_SUCCESS> {
  blog: IBlog;
}

/*********	blog actions union	***********/
export type BlogActionType = LoadBlogAction | SetErrorAction | SetSuccessAction;

/*********	blog reducer type	***********/
export type BlogReducer = (
  state: BlogState,
  action: BlogActionType
) => BlogState;
