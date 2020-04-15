import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';

import {
  getBlogByIndex,
  BlogState,
  loadBlog,
  BlogActionType,
  setSuccess,
  setError,
  resetState,
} from './duck';
import { AppState } from '../../store';
import { ISelector } from 'Types';
import { WithLoader } from 'Hoc';
import { scrollToTop } from 'Utils/';
import Blog from './BlogComponent';

const selectBlogState: ISelector<AppState, BlogState> = (state: AppState) =>
  state.blog;

const onUnMount = (dispatch: Dispatch<BlogActionType>) => {
  dispatch(resetState());
};

const BlogContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const state = useSelector<AppState, BlogState>(selectBlogState);

  const dispatch = useDispatch<Dispatch<BlogActionType>>();

  React.useEffect(() => {
    scrollToTop();
    dispatch(loadBlog());
    getBlogByIndex(+id)
      .then((blog) => dispatch(setSuccess(blog)))
      .catch((e) => dispatch(setError(['Error while fetching required blog'])));

    return () => onUnMount(dispatch);
  }, []);
  console.log('[BlogContainer is going to render on UI]');
  return (
    <WithLoader loading={state.loading}>
      <Blog blog={state.blog} />
    </WithLoader>
  );
};

export default BlogContainer;
