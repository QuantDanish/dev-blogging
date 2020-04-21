import * as React from 'react';

export default interface IRouteConfig {
  id: string;
  path: string;
  exact?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>;
  children?: IRouteConfig[];
}
