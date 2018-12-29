import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

const PostPage = props => {
  return (
    <React.Fragment>
      <div className='App'>
        <SearchBar
          searchInput={props.searchInput}
          searchInputChange={props.searchInputChange}
          isTop={props.isTop}
        />
        <div className='bottom-content'>
          <div className='postouter'>
            {!props.dataList
              ? ''
              : props.dataList.map((post, i) => (
                  <PostContainer
                    thumbnail={post.thumbnailUrl}
                    username={post.username}
                    img={post.imageUrl}
                    likes={post.likes}
                    timestamp={post.timestamp}
                    key={i}
                    index={i}
                    comments={props.comments[i]}
                    commentValueChange={props.commentValueChange}
                    text={props.text}
                    addNewComment={e => props.addNewComment(e, i)}
                    isLiked={props.isLiked}
                    heartClick={props.heartClick}
                    likedCounter={props.likedCounter}
                    isTop={props.isTop}
                  />
                ))}
          </div>

          <Footer
            isTop={props.isTop}
            username={props.username}
            firstName={props.firstName}
            lastName={props.lastName}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

PostPage.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func,
  isTop: PropTypes.bool,
  dataList: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  }),
  comments: PropTypes.array,
  commentValueChange: PropTypes.func,
  text: PropTypes.text,
  addNewComment: PropTypes.func,
  isLiked: PropTypes.array,
  heartClick: PropTypes.func,
  likedCounter: PropTypes.array,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profile: PropTypes.string
};

export default PostPage;
