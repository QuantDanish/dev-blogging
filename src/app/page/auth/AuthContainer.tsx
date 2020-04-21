import * as React from 'react';
import { IRouteConfig } from 'Types/*';
import { loggerService as _ls } from 'Services/';
import { RouteComponentProps, Switch } from 'react-router-dom';
import { RouteRenderer } from 'Hoc/';

type AuthProps = {
  routes: IRouteConfig[];
};

const AuthContainer: React.FC<AuthProps & RouteComponentProps> = ({
  routes,
}) => {
  _ls.log('AuthContainer :: ', routes);

  return (
    <Switch>
      {routes.map((route) => (
        <RouteRenderer key={route.id} {...route} />
      ))}
    </Switch>
  );
};

export default AuthContainer;
