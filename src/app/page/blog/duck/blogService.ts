export { getBlogByIndex } from '../../../common/services/networkService';

// import { Dispatch } from 'redux';
// import { AppAction, AppState } from '../../../store';
// import { loadBlog, setSuccess, setError } from './actionCreator';

// const getBlog = async (index: number) => {
//   return async (dispatch: Dispatch<AppAction>, getState?: () => AppState) => {
//     dispatch(loadBlog());

//     try {
//       const blog = await getBlogByIndex(index);
//       dispatch(setSuccess(blog));
//     } catch (e) {
//       console.log('Error on executing getBlogByIndex.', e);
//       const error = ['Error while fetching blog by api'];
//       dispatch(setError(error));
//     }
//   };
// };
// export { getBlog };
