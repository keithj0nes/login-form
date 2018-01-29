import React from 'react';
import SignupForm from './SignupForm';
import Modal from './Modal';
import '../css/LoginContainer.css';
import logo from '../images/twitter.svg';

class LoginContainer extends React.Component {

  constructor(){
    super();
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

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
      ],
      modalShowing: false,
      modalData: {
        type: '',
        icon: '',
        main: '',
        sub: '',
        buttonText: ''
      }
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
          var modal = {
            type: 'error',
            icon: 'x',
            main: 'User already exists',
            sub: 'A user already exists with this login. Please enter a new email.'
          }
          this.setState({modalShowing: !this.state.modalShowing, modalData: modal})
          break;
        }
      }

      if(!userExists){
        users.push(user)
        var modal1 = {
          type: 'success',
          icon: '+',
          main: 'Success!',
          sub: 'You have successfully created your account!',
        }
        this.setState({modalShowing: !this.state.modalShowing, modalData: modal1, users})
      }
    } else if(type === 'login'){

    }
  }

  toggleModal(){
    this.setState({modalShowing: !this.state.modalShowing})
  }


  componentDidUpdate(){
    console.log(this.state.users, 'componentDidUpdate');
  }


  render(){
    let barStyle = {};
    this.state.whichForm === 'signup' ? barStyle = {'marginLeft': '50%'} : barStyle = {'marginLeft': 0};

    return(
      <div>
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







        <Modal modalShowing={this.state.modalShowing} modalData={this.state.modalData} modalClose={this.toggleModal} />

      </div>
    )
  }
}

export default LoginContainer;
