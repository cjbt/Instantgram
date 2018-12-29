import React from 'react';
import styled from 'styled-components';
import '../style/App.scss';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 980px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 350px;
  margin-top: 12px;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap column;
  border: 1px solid blue;
  width: 200px;
`;
const Input = styled.input`
  width: 200px;
`;
const Button = styled.button`
  width: 200px;
`;

const MidContainer = styled.div``;
const Footer = styled.div``;

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
      <Container>
        <TopContainer>
          <Form onSubmit={this.loginSubmit}>
            <Input
              type='text'
              name='username'
              placeholder='Username'
              onChange={this.usernameChange}
              value={this.state.usernameVal}
              required
            />
            <Input
              type='text'
              name='fullname'
              placeholder='Full name'
              onChange={this.fullNameChange}
              value={this.state.fullnameVal}
              required
            />
            <Input
              type='password'
              name='password'
              placeholder='Fake password'
              id='password'
              value={this.state.pwVal}
              onChange={this.pwChange}
              required
            />
            <Button type='submit'>login</Button>
          </Form>
        </TopContainer>
        <MidContainer />
        <Footer />
      </Container>
    );
  }
}

export default Login;
