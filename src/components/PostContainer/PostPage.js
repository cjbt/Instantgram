import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

const PostPage = props => {
  return (
    <React.Fragment>
      <div className={props.isModalClicked ? 'modal' : null}>
        <div className='modal-menu-container'>
          <div className='modal-menu'>
            <form onSubmit={props.logout}>
              <button className='modal-option logout-p' onClick={props.logout}>
                <p>Log Out</p>
              </button>
            </form>

            <p className='modal-option cancel-p' onClick={props.modalNoneClick}>
              Cancel
            </p>
          </div>
        </div>
      </div>
      <div className='postpage'>
        <div className='App'>
          <SearchBar
            searchInput={props.searchInput}
            searchInputChange={props.searchInputChange}
            isTop={props.isTop}
            isModalClicked={props.isModalClicked}
            modalClick={props.modalClick}
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
              logout={props.logout}
              isTop={props.isTop}
              username={props.username}
              firstName={props.firstName}
              lastName={props.lastName}
              profile={props.profile}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

PostPage.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func,
  isTop: PropTypes.bool,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  comments: PropTypes.array,
  commentValueChange: PropTypes.func,
  text: PropTypes.string,
  addNewComment: PropTypes.func,
  isLiked: PropTypes.array,
  heartClick: PropTypes.func,
  likedCounter: PropTypes.array,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profile: PropTypes.string,
  logout: PropTypes.func,
  isModalClicked: PropTypes.bool,
  modalClick: PropTypes.func,
  modalNoneClick: PropTypes.func
};

export default PostPage;
