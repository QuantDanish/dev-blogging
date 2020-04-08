import { IStatus, IBlog, IAction } from '../../../common/interface';
import { FETCH_BLOGS, SUCCESS, FAILURE } from './actionTypes';

export interface HomeState extends IStatus {
  blogs?: IBlog[];
}

/*********	Action Creator Types	***********/
export interface FetchBlogsAction extends IAction<typeof FETCH_BLOGS> {}

export interface SetSuccessAction extends IAction<typeof SUCCESS> {
  blogs: IBlog[];
}

export interface SetFailureAction extends IAction<typeof FAILURE> {
  error?: string[];
}

/*********	Export action creator type union	***********/
export type HomeActionType = FetchBlogsAction | SetSuccessAction | SetFailureAction;

/*********	Prop types	***********/
export interface HomePropTypes {
  blogs: IBlog[];
}
