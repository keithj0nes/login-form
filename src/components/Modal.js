import React from 'react';
import '../css/Modal.css';

class Modal extends React.Component{

  render(){
    return (
      <div className="modal">
        <div className="type">
          &times;
        </div>
        <div className="content">
          <p className="main">User already exists!</p>
          <p className="sub">A user already exists with this login. Please enter a new email.</p>
        </div>
        <button>Try again</button>
      </div>
    )
  }
}

export default Modal;
