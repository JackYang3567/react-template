import React from 'react'
//import { Link, Route } from 'react-router-dom'
//import { MainMenu, AboutMenu } from './menus'
//import './stylesheets/pages.scss'
import Master from '../layouts/master'

export const Whoops404 = ({ location }) =>
  <Master>
    <div className="css-main">
       <div className="css-container">
           <h1>=没找到请求的页面资源 '{location.pathname}'</h1>
       </div>
    </div>
 </Master>
