import * as React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { IRouteConfig } from 'Types/';

const renderComponent = (config: IRouteConfig) => {
  return (props: RouteComponentProps): React.ReactNode => {
    return <config.component routes={config.children} {...props} />;
  };
};

const RouteRenderer: React.FC<IRouteConfig> = (props) => (
  <Route
    path={props.path}
    exact={!!props.exact}
    render={renderComponent(props)}
  />
);

export default RouteRenderer;
