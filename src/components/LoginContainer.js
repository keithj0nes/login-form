import React from 'react';
// import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import '../css/LoginContainer.css';
import logo from '../images/twitter.svg';

class LoginContainer extends React.Component {
  render(){
    return(
      <div className="form-container">
        <div className="welcome-section">
          <img src={logo} alt=""/>
          <p className="main">Welcome to Twitter.</p>
          <p className="sub">Connect with your friends - and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
        </div>
        <div className="login-form-section">

          <div className="radios">
            <label htmlFor="login">
              <input name="form" id="form" type="radio"/> Log in
            </label>
            <label htmlFor="signup">
              <input name="form" id="signup" type="radio"/> Sign up
            </label>
            <div className="sliding-bar">
              <div className="bar"></div>
            </div>
          </div>

          <div className="forms">
            <SignupForm />
          </div>


        </div>
      </div>
    )
  }
}

export default LoginContainer;
