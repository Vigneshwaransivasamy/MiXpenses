import React, { Component } from 'react';
import './index.css';
import Main from './route';

class App extends Component {
  render() {
    return (
      <div className="app flex">
        <Main />
      </div>
    );
  }
}

export default App;
