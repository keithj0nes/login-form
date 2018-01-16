import React from 'react';
import SignupForm from './SignupForm';
import '../css/LoginContainer.css';
import logo from '../images/twitter.svg';

class LoginContainer extends React.Component {

  constructor(){
    super();
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      whichForm: 'signup',
      users: [
        {
          name: 'Keith Jones',
          email: 'keith@keith.com',
          password: '123'
        },
        {
          name: 'John Smith',
          email: 'john@john.com',
          password: '123'
        }
      ]
    }
  }

  handleFormChange(e){
    this.setState({whichForm: e.target.id})
  }

  handleSubmit(user, type){

    if(type === 'signup'){
      const users = [...this.state.users];
      let userExists = false;
      for(var i = 0; i < users.length; i++){
        // console.log(users[i], "users[i]");
        if(users[i].email === user.email){
          console.log('user already exists!');
          userExists = true;
          break;
        }
      }

      if(!userExists){
        users.push(user)
        this.setState({users})
      }
    } else if(type === 'login'){

    }
  }


  componentDidUpdate(){
    console.log(this.state.users, 'componentDidUpdate');
  }


  render(){
    let barStyle = {};
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
            {this.state.whichForm === 'signup' ? <SignupForm handleSubmit={this.handleSubmit} signupForm={true} /> : <SignupForm handleSubmit={this.handleSubmit} loginForm={true}/> }
          </div>


        </div>
      </div>
    )
  }
}

export default LoginContainer;
