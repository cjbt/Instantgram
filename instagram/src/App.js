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
      username: 'cj',
      text: ''
    };
  }

  componentDidMount() {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const targetUrl = 'http://71.65.239.221:5000/addComment';
    // fetch(proxyUrl + targetUrl)
    //   .then(res => res.json())
    //   .then(data => this.setState({ data }));

    setTimeout(() => {
      this.setState({
        dataList: dummyData
      });
    }, 3000);
  }

  searchInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  commentValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    //console.log(this.state.commentValue);
  };

  commentSubmit = e => {
    e.preventDefault();
    this.setState({
      dataList: [
        ...this.state.dataList,
        { comment: [{ username: this.state.username, text: this.state.text }] }
      ],
      text: ''
    });

    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const targetUrl = 'http://71.65.239.221:5000/addComment';
    // e.preventDefault();

    // fetch(proxyUrl + targetUrl, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.state)
    // })
    //   .then(res => res.json())
    //   .then(data =>
    //     this.setState({
    //       username: data.username,
    //       text: data.text
    //     })
    //   );
    // console.log(this.state.data, this.state.commentValue);
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
            />
            <div className='bottom-content'>
              <div className='postouter'>
                {this.state.dataList.map(post => (
                  <PostContainer
                    thumbnail={post.thumbnailUrl}
                    username={post.username}
                    img={post.imageUrl}
                    likes={post.likes}
                    timestamp={post.timestamp}
                    key={post.timestamp}
                    comments={post.comments}
                    commentValueChange={this.commentValueChange}
                    commentSubmit={this.commentSubmit}
                    text={this.state.text}
                  />
                ))}
              </div>

              <Footer />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
