import { ReactElement } from 'react';

export { default as IStatus } from './IStatus';
export { default as IBlog } from './IBlog';
export { default as IAction } from './action';
export { default as IRouteConfig } from './IRouteConfig';

export interface IMessage {
  message: string | ReactElement;
}

export interface ISelector<TSource, TReturn> {
  (state: TSource): TReturn;
}
