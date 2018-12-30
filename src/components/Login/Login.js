import React from 'react';
import styled from 'styled-components';
import Instagram from './instatext.png';
import austen from './staff/austen.png';
import dustin from './staff/dustinM.jpeg';
import josh from './staff/joshknell.jpeg';
import karen from './staff/karen.jpeg';
import ryan from './staff/ryanhamblin.jpeg';
import cj from './staff/ProfilePhoto.jpg';

// 3F97F0
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
  padding-bottom: 53px;
`;

const InstagramImg = styled.img`
  padding-top: 28px;
  width: 67%;
  margin-left: 57px;
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
  position: relative;
`;
const Input = styled.input`
  /* width: 200px; */
  display: flex;
  justify-content: center;
  border-radius: 2px;
  border: 1px solid #efefef;
  padding: 11.5px 0;
  margin-bottom: 6px;
  background: #fafafa;
  text-indent: 9px;
`;
const DisplayImages = styled.div`
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 26px;
  margin-top: 15px;
`;

const TopImage = styled.div``;
const BotImage = styled.div``;
const Image = styled.img`
  border-radius: 50%;
  width: 72px;
  border: 1px solid #efefef;
  opacity: 0.5;
  cursor: pointer;

  &:checked {
    outline: 2px solid #f00;
  }

  &:hover {
    opacity: 1;
  }
`;

const BottomRow = styled.div`
  padding-top: 25px;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;

  margin-top: 25px;
  width: 268px;
  padding: 6px 0;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 15px;

  background: ${props => (props.typed ? '#3F97F0' : '#bae1fb')};
`;

const MidContainer = styled.div``;
const Footer = styled.div``;

const Or = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  width: 84px;
  background-color: white;
  padding: 12px;
  z-index: 999;
  position: absolute;
  top: 242px;
  left: 482px;
  color: #999999;
  top: 134px;
  left: 95px;
`;

const OrBottom = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  background-color: white;
  z-index: 999;
  position: absolute;
  color: #999999;
  top: 349px;
  left: 84px;
  padding: 9px;
`;

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
                <br />
                <Or>DISPLAY PICTURE</Or>
                <DisplayImages>
                  <TopImage />
                  <Image src={austen} alt='' />
                  <Image src={josh} alt='' />
                  <Image src={dustin} alt='' />
                  <BotImage />
                  <Image src={ryan} alt='' />
                  <Image src={karen} alt='' />
                  <Image
                    src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
                    alt=''
                  />
                </DisplayImages>
                <OrBottom>OR DEFAULT</OrBottom>
                <BottomRow>
                  <Image src={cj} alt='' />
                </BottomRow>
                {this.state.usernameVal.length > 0 ? (
                  <Button typed>Log in</Button>
                ) : (
                  <Button>Log in</Button>
                )}
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
