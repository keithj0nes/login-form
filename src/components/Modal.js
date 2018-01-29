import React from 'react';
import '../css/Modal.css';

class Modal extends React.Component{

  render(){
    let modalColorStyle = {};
    this.props.modalData.type === 'error' ? modalColorStyle = {'backgroundColor': '#be0000'} : modalColorStyle = {'backgroundColor': 'green'};

    const buttonText = this.props.modalData.type === 'error' ? 'Try Again' : 'Continue';

    if(!this.props.modalShowing){
      return null;
    }
    return (
      <div className="modal-backdrop">

        <div className="modal">
          <div className="type" style={modalColorStyle}>
            {this.props.modalData.icon}
          </div>
          <div className="content">
            <p className="main">{this.props.modalData.main}</p>
            <p className="sub">{this.props.modalData.sub}</p>
          </div>

          <button onClick={this.props.modalClose}>{buttonText}</button>
        </div>

      </div>

    )
  }
}

export default Modal;
// <div className="type">
//   &times;
//     &#10004;
// </div>
// <div className="content">
//   <p className="main">User already exists!</p>
//   <p className="sub">A user already exists with this login. Please enter a new email.</p>
// </div>
