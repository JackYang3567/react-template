import React, { Component } from 'react';

import '../../assets/stylesheets/App.css';

import NavHeaderBar from './navHeaderBar';
import NavBooterBar from './navFooterBar';
import NavFloatFooterBar from './navFloatFooterBar'

class Master extends Component {
  render() {
    return (
       <div className="css-body">
            <NavHeaderBar />
            <main className="css-main">
                {this.props.children}
            </main>
            <NavBooterBar />
            <NavFloatFooterBar id="navfloat" />
      </div>
    );
  }
}

export default Master;
