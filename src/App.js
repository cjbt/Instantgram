import React, { Component } from 'react';
import './components/style/App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Footer from './components/Footer/Footer';
import insta from './instagram.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      searchInput: '',
      username: 'cjbt',
      text: '',
      isTop: true,
      comments: [],
      firstName: 'cj',
      lastName: 'tantay',
      profile: null,
      isLiked: [],
      likedCounter: []
    };
  }

  componentDidMount() {
    const commentArr = dummyData.map(data => data.comments);
    const isLiked = dummyData.map(data => false);
    const likedCounter = dummyData.map(data => data.likes);

    setTimeout(() => {
      this.setState({
        dataList: dummyData,
        comments: commentArr,
        isLiked: isLiked,
        likedCounter: likedCounter
      });
    }, 0);

    document.addEventListener('scroll', this.scrollChange);
  }

  scrollChange = () => {
    const isTop = window.scrollY < 55;
    if (isTop !== this.state.isTop) {
      this.setState({
        isTop
      });
    }
  };

  searchInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  commentValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewComment = (e, i) => {
    e.preventDefault();
    const newArr = this.state.comments;
    newArr[i].push({ username: this.state.username, text: this.state.text });

    this.setState({
      comments: newArr,
      text: ''
    });
  }; // commentSubmit()

  heartClick = e => {
    const indexClicked = parseInt(e.target.name);
    const isLiked = this.state.isLiked.map((like, i) => {
      if (i === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    this.setState({
      isLiked: isLiked
    });

    this.likedCounterChange(indexClicked);
  };

  likedCounterChange = indexClicked => {
    const likedCounter = this.state.likedCounter.map((item, i) => {
      if (i === indexClicked) {
        return this.state.isLiked[indexClicked] ? (item -= 1) : (item += 1);
      } else {
        return item;
      }
    });
    this.setState({
      likedCounter: likedCounter
    });
  };

  render() {
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
  }
}

export default App;
