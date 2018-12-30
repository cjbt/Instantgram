import React from 'react';
import './_Footer.scss';
import UserProfile from './UserProfile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import BottomLinks from './BottomLinks';
import PropTypes from 'prop-types';

const Footer = props => {
  return (
    <div className={props.isTop ? 'footer' : 'footer footer-fixed'}>
      <div className='footerchild'>
        <UserProfile
          username={props.username}
          firstName={props.firstName}
          lastName={props.lastName}
          profile={props.profile}
        />
        <Stories logout={props.logout} />
        <Suggestions />
        <BottomLinks />
      </div>
    </div>
  );
};

Footer.propTypes = {
  isTop: PropTypes.bool,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  logout: PropTypes.func
};

export default Footer;
