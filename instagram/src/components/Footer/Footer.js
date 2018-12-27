import React from 'react';
import './_Footer.scss';
import UserProfile from './UserProfile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import BottomLinks from './BottomLinks';

const Footer = props => {
  return (
    <div className='footer'>
      <div className='footerchild'>
        <UserProfile />
        <Stories />
        <Suggestions />
        <BottomLinks />
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
