import * as React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { HomeState, homeService, actionCreator, HomeActionType } from './duck';
import { AppState } from '../../store';
import BlogList from './blogList/BlogListComponent';
import { Dispatch } from 'redux';
import { WithLoader } from 'Hoc';
import { ISelector, IBlog } from 'Types';

const selectBlogs: ISelector<AppState, HomeState> = (state: AppState) =>
  state.home;

const useFetchBlogs = (homeDispatch: Dispatch<HomeActionType>) => {
  homeDispatch(actionCreator.fetchBlogs());
  homeService
    .getMetaBlogs()
    .then((b: IBlog[]) => homeDispatch(actionCreator.receivedBlogs(b)))
    .catch((e: any) =>
      homeDispatch(
        actionCreator.sendError(['blog fetching from server failed'])
      )
    );
};

const Home: React.FC = () => {
  const { blogs, loading } = useSelector(selectBlogs);
  const dispatch = useDispatch<Dispatch<HomeActionType>>();
  React.useEffect(() => useFetchBlogs(dispatch), []);

  return (
    <WithLoader loading={loading}>
      <Container className='home-component'>
        <BlogList blogs={blogs} />
      </Container>
    </WithLoader>
  );
};

export default Home;
