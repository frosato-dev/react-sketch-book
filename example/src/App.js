import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title/index'
import Button from './Button/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>Welcome to React</Title>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>This is a button</Button>
      </div>
    );
  }
}

export default App;
