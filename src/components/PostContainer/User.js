import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return (
    <div className='user-content'>
      <img className='thumbnail' src={props.thumbnail} alt='' />
      <div className='username'>{props.username}</div>
    </div>
  );
};

User.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string
};

export default User;
