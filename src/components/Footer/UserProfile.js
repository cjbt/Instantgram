import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = props => {
  return (
    <div className='user-profile'>
      <div>
        <img className='profile-pic' src={props.profile} alt='' />
      </div>

      <div className='main-user'>
        <div className='main-alias'>{props.username}</div>
        <div className='main-full'>{`${props.firstName}`}</div>
      </div>
    </div>
  );
};

UserProfile.defaultProps = {
  username: 'cjbt',
  firstName: 'cj',
  lastName: 'tantay',
  profile:
    'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
};

UserProfile.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profile: PropTypes.string
};

export default UserProfile;
