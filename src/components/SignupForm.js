import React from 'react';
import '../css/form.css';

class SignupForm extends React.Component {
  render(){
    return (
      <form>
        <input type="text" placeholder="Full name"/>
        <input type="text" placeholder="Email address"/>
        <input type="text" placeholder="Password"/>
        <button>Sign up</button>
        <p className="terms">By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a></p>
      </form>
    )
  }
}

export default SignupForm;
