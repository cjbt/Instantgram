import React from 'react';
import instaLogo from './instagram.svg';
import instatext from './instatext.png';
import PropTypes from 'prop-types';

const Logo = props => {
  return (
    <div className='logo-container'>
      <div className='logos'>
        <img className='insta-logo' src={instaLogo} alt='' />
      </div>
      <div className={props.isTop ? 'logo-name' : 'hidden logo-name'}>
        <img className='insta-text' src={instatext} alt='' />
      </div>
    </div>
  );
};

Logo.propTypes = {
  isTop: PropTypes.bool
};

export default Logo;
