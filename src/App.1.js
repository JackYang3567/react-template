import React, { Component } from 'react';
import logo from './logo.svg';
import Img from './components/elements/Img'
import './App.css';

import NavHeaderBar from './components/navHeaderBar';
import NavBooterBar from './components/navFooterBar'
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavHeaderBar />
          <div>
            {this.props.children}
          </div>
        <div> </div> 
        <div className="App-header">
        <p><Img src='./images/work1.jpg' className="logo" alt="logo" /> </p>
          <Img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit  <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
         
        <NavBooterBar />
      </div>
    );
  }
}

export default App;
