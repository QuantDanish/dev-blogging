import * as React from 'react';
import PageLoader from '../../component/pageLoader/PageLoaderComponent';

const Profile: React.FC<any> = ({}) => {
  return (
    <div className='profile-component'>
      <PageLoader message='User Profile' />
    </div>
  );
};

export default Profile;
