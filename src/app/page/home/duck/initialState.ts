import { HomeState } from './types';
import { IBlog } from '../../../common/interface';

const initialState: HomeState = {
  blogs: [] as IBlog[],
  loading: true,
  failure: false,
  success: false,
  error: null,
};

export default initialState;
