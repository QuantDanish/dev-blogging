import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';

import PageLoader from '../../component/pageLoader';
import {
  getBlogByIndex,
  BlogState,
  loadBlog,
  BlogActionType,
  setSuccess,
  setError,
} from './duck';
import { AppState } from '../../store';
import { ISelector } from '../../common/interface';
import Blog from './BlogComponent';

const selectBlogState: ISelector<AppState, BlogState> = (state: AppState) =>
  state.blog;

const BlogContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const state = useSelector<AppState, BlogState>(selectBlogState);

  const dispatch = useDispatch<Dispatch<BlogActionType>>();

  React.useEffect(() => {
    dispatch(loadBlog());
    getBlogByIndex(+id)
      .then((blog) => dispatch(setSuccess(blog)))
      .catch((e) => dispatch(setError(['Error while fetching required blog'])));
  }, []);

  if (state.loading) {
    return <PageLoader message='Please wait while blog is loading' />;
  } else {
    return <Blog blog={state.blog} />;
  }
};

export default BlogContainer;
