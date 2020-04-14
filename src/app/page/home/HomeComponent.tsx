import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { HomeState, homeService, actionCreator, HomeActionType } from './duck';
import { AppState } from '../../store';
import BlogList from './blogList/BlogListComponent';
import { Dispatch } from 'redux';
import { ISelector, IBlog } from '../../common/interface';
import { WithLoader } from '../../component/hoc';

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
      <Row className='home-component'>
        <Col xs={12}>
          <BlogList blogs={blogs} />
        </Col>
      </Row>
    </WithLoader>
  );
};

export default Home;
