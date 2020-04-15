import * as React from 'react';
import './pageLoader.scss';
import { IMessage } from 'Types';

const PageLoader: React.FC<IMessage> = ({ message }) => {
  return (
    <div className="page-loader-component">
      <div className="message">{message || null}</div>
      <div className="loader" />
    </div>
  );
};

export default PageLoader;
