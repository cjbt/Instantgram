import React from 'react';

const PostPage = () => {
  return (
    <React.Fragment>
      {this.state.dataList.length === 0 ? (
        <div className='loading'>
          <img className='loading-insta' src={insta} alt='' />
        </div>
      ) : (
        <div className='App'>
          <SearchBar
            searchInput={this.state.searchInput}
            searchInputChange={this.searchInputChange}
            isTop={this.state.isTop}
          />
          <div className='bottom-content'>
            <div className='postouter'>
              {!this.state.dataList
                ? ''
                : this.state.dataList.map((post, i) => (
                    <PostContainer
                      thumbnail={post.thumbnailUrl}
                      username={post.username}
                      img={post.imageUrl}
                      likes={post.likes}
                      timestamp={post.timestamp}
                      key={i}
                      index={i}
                      comments={this.state.comments[i]}
                      commentValueChange={this.commentValueChange}
                      text={this.state.text}
                      addNewComment={e => this.addNewComment(e, i)}
                      isLiked={this.state.isLiked}
                      heartClick={this.heartClick}
                      likedCounter={this.state.likedCounter}
                      isTop={this.state.isTop}
                    />
                  ))}
            </div>

            <Footer
              isTop={this.state.isTop}
              username={this.state.username}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostPage;
