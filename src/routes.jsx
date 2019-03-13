// routes.jsx
import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import Home from './components/pages/home'
import {Whoops404} from './components/pages/commonPages'
import Feed from './components/pages/feedComponent';
import Card from './components/pages/myFirstComponent';
import HSL from './components/pages/hsl'
import RGB from './components/pages/rgb'
import Yellow from './components/pages/yellow'




const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/feed" component={Feed} />
            <Route path="/card" component={Card} />
          
            <Route path="/hsl/:h/:s/:l" component={HSL} />
            <Route path="/rgb/:r/:g/:b" component={RGB} />
            <Route path="/yellow" component={Yellow} />
            <Route component={Whoops404} />
        </Switch>
    </Router> )

export default Routes