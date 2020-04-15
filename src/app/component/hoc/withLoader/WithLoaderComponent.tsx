import * as React from 'react';
import PageLoader from '../../pageLoader';

type WithLoaderProps = {
  loading: boolean;
};
const WithLoader: React.FC<React.PropsWithChildren<WithLoaderProps>> = ({
  loading,
  children,
}) => {
  return loading ? <PageLoader message="loading" /> : <>{children}</>;
};

export default WithLoader;
