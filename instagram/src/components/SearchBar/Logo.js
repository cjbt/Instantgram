import React from 'react';
import instaLogo from './instagram.svg';
import instatext from './instatext.png';

const Logo = props => {
  return (
    <div className='logo-container'>
      <div className='logos'>
        <img className='insta-logo' src={instaLogo} alt='' />
      </div>
      <div className='logo-name'>
        <img className='insta-text' src={instatext} alt='' />
      </div>
    </div>
  );
};

export default Logo;
