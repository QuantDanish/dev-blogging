import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  BlogContainer,
  Login,
  SignUp,
  Editor,
  Profile,
} from '../../page';
import Error from '../error/ErrorComponent';
import NotFound from '../notFound/NotFoundComponent';

import './appRoute.scss';

const AppRoute: React.FC = () => {
  return (
    <div className="app-route-component">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={BlogContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/error" component={Error} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default AppRoute;
