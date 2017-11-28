import React, { Component } from 'react';
// import logo from './logo.svg';
// import Provider from 'react-redux';
import './index.css';
import Main from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Hello World! */}
        <Main />
      </div>
    );
  }
}

export default App;
