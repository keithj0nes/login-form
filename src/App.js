import React, { Component } from 'react';
import LoginContainer from './components/LoginContainer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="transparency">
          <LoginContainer />
        </div>
      </div>
    );
  }
}

export default App;
