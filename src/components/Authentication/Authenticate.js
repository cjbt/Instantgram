import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    state = {
      loginVerfied: false
    };

    componentDidMount() {
      const user = localStorage.getItem('username');

      if (user) {
        this.setState({
          loginVerfied: true
        });
      } else {
        this.setState({
          loginVerfied: false
        });
      }
    }
    render() {
      return (
        <React.Fragment>
          {this.state.loginVerfied ? <App /> : <Login />}
        </React.Fragment>
      );
    }
  };

export default Authenticate;
