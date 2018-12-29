import React from 'react';

class Login extends React.Component {
  state = {
    usernameVal: '',
    fullnameVal: '',
    pwVal: ''
  };

  // componentDidMount() {
  //   localStorage.clear();
  // }

  usernameChange = e => {
    this.setState({
      usernameVal: e.target.value
    });
  };
  fullNameChange = e => {
    this.setState({
      fullnameVal: e.target.value
    });
  };
  pwChange = e => {
    this.setState({
      pwVal: e.target.value
    });
  };

  loginSubmit = e => {
    localStorage.setItem('username', `${this.state.usernameVal}`);
    localStorage.setItem('fullname', `${this.state.fullnameVal}`);
    localStorage.setItem('password', `${this.state.pwVal}`);

    this.setState({
      usernameVal: '',
      fullnameVal: '',
      pwVal: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.loginSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={this.usernameChange}
            value={this.state.usernameVal}
            required
          />
          <input
            type='text'
            name='fullname'
            placeholder='Full name'
            onChange={this.fullNameChange}
            value={this.state.fullnameVal}
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Fake password'
            id='password'
            value={this.state.pwVal}
            onChange={this.pwChange}
            required
          />
          <button type='submit'>login</button>
        </form>
      </div>
    );
  }
}

export default Login;
