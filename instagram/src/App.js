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
    setTimeout(() => {
      this.setState({
        dataList: dummyData
      });
    }, 0);
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
  };

  addNewComment = (e, i) => {
    e.preventDefault();

    console.log(e.target.key);

    const newArr = [];
    this.state.dataList.map((item, i) => newArr.push(item.comments));

    newArr[0].push({ username: 'hamza', text: 'idk' });

    // console.log(newArr);
    // this.setState({
    //   dataList: [
    //     ...this.state.dataList,
    //     { comments: [{ username: this.state.username, text: this.state.text }] }
    //   ],
    //   text: ''
    // });

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
  }; // commentSubmit()

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
                        comments={post.comments}
                        commentValueChange={this.commentValueChange}
                        text={this.state.text}
                        addNewComment={i => this.addNewComment(i)}
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
