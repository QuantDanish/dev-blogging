import * as React from 'react';
import './pageLoader.scss';
import { IMessage } from '../../common/interface';

const PageLoader: React.FC<IMessage> = ({ message }) => {
  return (
    <div className='page-loader-component'>
      <div className='message'>{message ? message : null}</div>
      <div className='loader'></div>
    </div>
  );
};

export default PageLoader;
