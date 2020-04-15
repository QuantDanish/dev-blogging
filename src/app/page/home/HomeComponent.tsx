import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { WithLoader } from 'Hoc';
import { ISelector, IBlog } from 'Types';
import { HomeState, homeService, actionCreator, HomeActionType } from './duck';
import { AppState } from '../../store';
import BlogList from './blogList/BlogListComponent';

const selectBlogs: ISelector<AppState, HomeState> = (state: AppState) =>
  state.home;

const useFetchBlogs = () => {
  const dispatch = useDispatch<Dispatch<HomeActionType>>();
  React.useEffect(() => {
    dispatch(actionCreator.fetchBlogs());
    homeService
      .getMetaBlogs()
      .then((b: IBlog[]) => dispatch(actionCreator.receivedBlogs(b)))
      .catch(() =>
        dispatch(actionCreator.sendError(['blog fetching from server failed']))
      );
  }, []);
};

const Home: React.FC = () => {
  const { blogs, loading } = useSelector(selectBlogs);
  useFetchBlogs();

  return (
    <WithLoader loading={loading}>
      <Container className="home-component">
        <BlogList blogs={blogs} />
      </Container>
    </WithLoader>
  );
};

export default Home;
