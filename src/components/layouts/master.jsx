import React, { Component } from 'react';

import '../../assets/stylesheets/App.css';

import NavHeaderBar from './navHeaderBar';
import NavBooterBar from './navFooterBar';
import NavFloatFooterBar from './navFloatFooterBar'
import BackToTop from '../ui/BackToTop'

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
            <BackToTop />
      </div>
    );
  }
}

export default Master;
