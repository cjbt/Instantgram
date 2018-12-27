import React from 'react';
import compass from './compass-regular.svg';
import heart from './heart-regular.svg';
import user from './user-regular.svg';

const IconTabs = props => {
  return (
    <div className='icon-container'>
      <div className='logo location'>
        <img src={compass} alt='' />
      </div>
      <div className='logo likes'>
        <img src={heart} alt='' />
      </div>
      <div className='logo profile'>
        <img src={user} alt='' />
      </div>
    </div>
  );
};

export default IconTabs;
