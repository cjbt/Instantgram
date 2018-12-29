import React from 'react';
import PropTypes from 'prop-types';

const Stories = props => {
  return (
    <React.Fragment>
      <div className='footer-box stories-container'>
        <div className='box-left'>Stories</div>
        <div className='box-right'>Watch All</div>
      </div>
      <div>
        <form onSubmit={props.logout}>
          <button>Log Out</button>
        </form>
      </div>
    </React.Fragment>
  );
};

Stories.propTypes = {
  logout: PropTypes.func
};
export default Stories;
