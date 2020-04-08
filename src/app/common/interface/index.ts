import { ReactElement } from 'react';

export { default as IStatus } from './IStatus';
export { default as IBlog } from './IBlog';
export { default as IAction } from './action';

export interface IMessage {
  message: string | ReactElement;
}

export interface ISelector<TSource, TReturn> {
  (state: TSource): TReturn;
}
