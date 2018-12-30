import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = props => {
  return (
    <div className='user-profile'>
      <div>
        <a
          href={`http://instagram.com/${props.username}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='profile-pic'
            src={localStorage.getItem('display')}
            alt=''
          />
        </a>
      </div>

      <div className='main-user'>
        <div className='main-alias'>
          <a
            href={`http://instagram.com/${props.username}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {props.username}
          </a>
        </div>
        <div className='main-full'>{`${props.firstName}`}</div>
      </div>
    </div>
  );
};

// UserProfile.defaultProps = {
//   username: 'cjbt',
//   firstName: 'cj',
//   lastName: 'tantay',
//   profile: 'https://ca.slack-edge.com/T4JUEB3ME-UD8L25VAT-3b0b9548a520-512'
// };

UserProfile.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profile: PropTypes.string
};

export default UserProfile;

/* 
  displayClick = e => {
    this.setState(
      {
        displayImg: e.target.src
      },
      () => console.log(this.state.displayImg)
    );

    if (this.state.displayImg === e.target.src) {
      this.setState (prevState=> ({
        clicked: !prevState.clicked
      }))
  };

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
                

                  <BotImage >

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
                      clicked={this.state.clicked}
                    />
               
                <Image
                      src='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png'
                      onClick={this.displayClick}
                      alt=''
                      clicked={this.state.clicked}
                    />
                    </BotImage>
           
                </DisplayImages>
                <OrBottom>OR DEFAULT</OrBottom>
                <BottomRow>
                  <Image
                    src='https://ca.slack-edge.com/T4JUEB3ME-UD8L25VAT-3b0b9548a520-512'



*/
