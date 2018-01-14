import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import '../css/LoginContainer.css';
import logo from '../images/twitter.svg';

class LoginContainer extends React.Component {

  constructor(){
    super();
    this.handleFormChange = this.handleFormChange.bind(this);

    this.state = {
      whichForm: 'signup'
    }
  }

  handleFormChange(e){
    // e.target.id === 'login' ?     barStyle = {'right': 0} : barStyle = {'left': 0}
    this.setState({whichForm: e.target.id})

  }

  componentDidUpdate(){
    // console.log(this.state);
  }


  render(){
    let barStyle = {};
    // this.state.whichForm === 'signup' ? barStyle = {'right': 0} : barStyle = {'left': 0}
    this.state.whichForm === 'signup' ? barStyle = {'marginLeft': '50%'} : barStyle = {'marginLeft': 0}


    return(
      <div className="form-container">
        <div className="welcome-section">
          <img src={logo} alt=""/>
          <p className="main">Welcome to Twitter.</p>
          <p className="sub">Connect with your friends - and other fascinating people. Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
        </div>
        <div className="login-form-section">

          <div className="radios">
            <label htmlFor="login"> Log in
              <input name="form" id="login" type="radio"
                onChange={this.handleFormChange}
                checked={this.state.whichForm === 'login'}
              />

            </label>
            <label htmlFor="signup"> Sign up
              <input name="form" id="signup" type="radio"
                onChange={this.handleFormChange}
                checked={this.state.whichForm === 'signup'}
              />
            </label>
            <div className="sliding-bar">
              <div className="bar" style={barStyle}></div>
            </div>
          </div>

          <div className="forms">
            {this.state.whichForm === 'signup' ? <SignupForm /> : <LoginForm /> }
          </div>


        </div>
      </div>
    )
  }
}

export default LoginContainer;
