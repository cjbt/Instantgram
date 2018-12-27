import React from 'react';
import PropTypes from 'prop-types';
import commentIcon from './comment-regular.svg';
import heartIcon from './heart-regular.svg';
import bookmark from './bookmark-regular.svg';

const MiddleContentImg = props => {
  return (
    <div className='middle-content'>
      <img src={props.img} alt='' />
      <div className='post-icons'>
        <div className='icon-left'>
          <img className='heart' src={heartIcon} alt='' />
          <img className='comment' src={commentIcon} alt='' />
        </div>

        <div className='icon-right'>
          <img className='bookmark' src={bookmark} alt='' />
        </div>
      </div>
      <div className='likes'>{props.likes} likes</div>
    </div>
  );
};

MiddleContentImg.propTypes = {
  img: PropTypes.string,
  likes: PropTypes.number
};

export default MiddleContentImg;
