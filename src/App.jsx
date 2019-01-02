import React, { Component } from 'react';
import './components/style/App.scss';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';
import PostPage from './components/PostContainer/PostPage';
import insta from './instagram.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      searchInput: '',
      username: localStorage.getItem('username'),
      text: '',
      isTop: true,
      comments: [],
      firstName: localStorage.getItem('fullname'),
      profile: localStorage.getItem('display'),
      isLiked: [],
      likedCounter: [],
      isModalClicked: false
    };
  }

  componentDidMount() {
    console.log(window.localStorage);
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
    }, 3000);

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
    const newData = dummyData.map(item =>
      item.username.split('').filter(item => item.username === e.target.value)
    );

    this.setState({
      dataList: newData,
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

  modalClick = () => {
    this.setState({
      isModalClicked: true
    });
  };

  modalNoneClick = () => {
    this.setState({
      isModalClicked: false
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
          <PostPage
            searchInput={this.state.searchInput}
            searchInputChange={this.searchInputChange}
            isTop={this.state.isTop}
            dataList={this.state.dataList}
            comments={this.state.comments}
            commentValueChange={this.commentValueChange}
            text={this.state.text}
            addNewComment={this.addNewComment}
            isLiked={this.state.isLiked}
            heartClick={this.heartClick}
            likedCounter={this.state.likedCounter}
            username={this.state.username}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            profile={this.state.profile}
            logout={this.props.logout}
            isModalClicked={this.state.isModalClicked}
            modalClick={this.modalClick}
            modalNoneClick={this.modalNoneClick}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Authenticate(App);
