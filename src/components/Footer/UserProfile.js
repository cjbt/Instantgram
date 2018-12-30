import React from 'react';
import PropTypes from 'prop-types';
import cj from '../Login/staff/ProfilePhoto.jpg';

const UserProfile = props => {
  return (
    <div className='user-profile'>
      <div>
        <a
          href={`http://instagram.com/${props.username}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='profile-pic' src={props.profile} alt='' />
        </a>
      </div>

      <div className='main-user'>
        <div className='main-alias'>
          <a
            href={`http://instagram.com/${props.username}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {props.username}
          </a>
        </div>
        <div className='main-full'>{`${props.firstName}`}</div>
      </div>
    </div>
  );
};

UserProfile.defaultProps = {
  username: 'cjbt',
  firstName: 'cj',
  lastName: 'tantay',
  profile: 'https://ca.slack-edge.com/T4JUEB3ME-UD8L25VAT-3b0b9548a520-512'
};

UserProfile.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profile: PropTypes.string
};

export default UserProfile;
