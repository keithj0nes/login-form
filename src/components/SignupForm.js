import React from 'react';
import '../css/form.css';

class SignupForm extends React.Component {


handleSubmit(e){
  e.preventDefault();
  if(this.props.signupForm){
    const signupUser = {
      fullName: this.fullName.value,
      email: this.email.value,
      password: this.password.value
    }
    this.props.handleSubmit(signupUser, 'signup')
  } else {
    const loginUser = {
      email: this.email.value,
      password: this.password.value
    }
    this.props.handleSubmit(loginUser, 'login')
  }




}


  renderForm(){
    if(this.props.signupForm){
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Full name" ref={(input) => this.fullName = input}/>
          <input type="text" placeholder="Email address" ref={(input) => this.email = input}/>
          <input type="text" placeholder="Password" ref={(input) => this.password = input}/>
          <button>Sign up</button>
          <p className="terms">By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a></p>
        </form>
      )
    } else if(this.props.loginForm){
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Email address" ref={(input) => this.email = input}/>
          <input type="text" placeholder="Password" ref={(input) => this.password = input}/>
          <button>Log In</button>
        </form>
      )
    }
  }

  render(){
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
}

export default SignupForm;
