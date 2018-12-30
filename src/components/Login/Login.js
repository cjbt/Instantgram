import React from 'react';
import styled from 'styled-components';
import Instagram from './instatext.png';

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
  border: ${props =>
    props.clicked ? '2px solid #3F97F0' : '1px solid #efefef'};
  opacity: ${props => (props.clicked ? 1 : 0.5)};
  cursor: pointer;

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
    pwVal: '',
    displayImg:
      'https://ca.slack-edge.com/T4JUEB3ME-UD8L25VAT-3b0b9548a520-512',
    clicked: false
  };

  // componentDidMount() {
  //   localStorage.clear();
  // }

  changeHandler = e => {
    if (this.state.displayImg !== e.target.src) {
      this.setState({});
    }
  };

  clickHandler = e => {
    if (this.state.displayImg === e.target.src) {
      this.setState(prevState => ({ clicked: !prevState.clicked }));
    }

    this.changeHandler(e);
  };

  displayClick = e => {
    this.setState(
      {
        displayImg: e.target.src
      },
      () => console.log(this.state.displayImg)
    );

    this.clickHandler(e);
  };

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
    localStorage.setItem('display', `${this.state.displayImg}`);

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
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-U4KHSNE3D-fd940398bb80-512'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-U8QE15GJJ-ge23210c2ee8-512'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-UC043SA0G-2e65e76a0500-512'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
                  <BotImage />
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-U5SF97A1Z-a2ca5f5dbe53-512'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-U7LV36C66-84460946c45e-512'
                    onClick={this.displayClick}
                    alt=''
                  />
                  <Image
                    src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
                </DisplayImages>
                <OrBottom>OR DEFAULT</OrBottom>
                <BottomRow>
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-UD8L25VAT-3b0b9548a520-512'
                    onClick={this.displayClick}
                    alt=''
                    clicked={this.state.clicked}
                  />
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
