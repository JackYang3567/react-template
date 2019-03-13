import React, { Component } from 'react';
import Routes from './routes'
import {
  Container
} from 'semantic-ui-react'

//import logo from './logo.svg';
//import Img from './components/elements/Img'
import './assets/stylesheets/App.css';

import NavHeaderBar from './components/layouts/navHeaderBar';
import NavBooterBar from './components/layouts/navFooterBar';
import NavFloatFooterBar from './components/layouts/navFloatFooterBar'

class App extends Component {
  render() {
    return (
      <div className="css-body">
        <NavHeaderBar />
        <main className="css-main">
            <Routes />           
            <Container text style={{ marginTop: '7em' }}>
              {this.props.children}
            </Container>
        </main>
        <NavBooterBar />
        <NavFloatFooterBar id="navfloat" />
      </div>
    );
  }
}

export default App;
