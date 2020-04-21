import * as React from 'react';
import { Switch } from 'react-router-dom';

import { RouteRenderer } from 'Hoc/';
import { IRouteConfig } from 'Types/';
// import {
//   Home,
//   BlogContainer,
//   Login,
//   SignUp,
//   Editor,
//   Profile,
// } from '../../page';
// import Error from '../error/ErrorComponent';
// import NotFound from '../notFound/NotFoundComponent';

import './appRoute.scss';
import routes from './routes';

const AppRoute: React.FC = () => {
  return (
    <div className="d-flex app-route-component">
      <Switch>
        {routes.map((config: IRouteConfig) => {
          return <RouteRenderer key={config.id} {...config} />;
        })}
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/blog/:id" component={BlogContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/editor" component={Editor} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/error" component={Error} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
};

export default AppRoute;
