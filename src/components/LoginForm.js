import React from 'react';
import '../css/form.css';

class LoginForm extends React.Component {
  render(){
    return (
      <form>
        <input type="text" placeholder="Email address"/>
        <input type="text" placeholder="Password"/>
        <button>Log In</button>
      </form>
    )
  }
}

export default LoginForm;
