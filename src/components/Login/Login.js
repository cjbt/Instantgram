import React from 'react';
import styled from 'styled-components';
import Instagram from './instatext.png';

const Loginpage = styled.div`
  background-color: #fafafa;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 980px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin-top: 12px;
  justify-content: center;
  background: white;
  border: 1px solid #e6e6e6;
`;

const InstagramImg = styled.img`
  padding-top: 31px;
  width: 67%;
  margin-left: 60px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 269px;
  width: 100%;
  margin: 0 auto;
`;

const Form = styled.form`
  padding-top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* max-width: 300px; */
  width: 100%;
`;
const Input = styled.input`
  /* width: 200px; */
  display: flex;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid #efefef;
`;
const Button = styled.button`
  width: 268px;
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
      <Loginpage>
        <Container>
          <TopContainer>
            <InstagramImg src={Instagram} alt='' />
            <FormContainer>
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
            </FormContainer>
          </TopContainer>
          <MidContainer />
          <Footer />
        </Container>
      </Loginpage>
    );
  }
}

export default Login;
