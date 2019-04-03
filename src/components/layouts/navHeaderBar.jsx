import React, { Component } from 'react'
//import {
 // Container,
 // Dropdown,
 // Image, 
 // Menu
//} from 'semantic-ui-react'

import {Link } from 'react-router-dom'
import Img from '../ui/Img/index';
import logo from '../../assets/images/logo.svg'
import imgMutiLang from '../../assets/images/mutilang.svg'
import imgRarrow from '../../assets/images/rectangle-arrow.svg'
//import Auth from '../utils/AuthService'
import '../../assets/stylesheets/App.css';
//const auth= new Auth();
const alt = 'test';

class NavHeakerBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
   // const { activeItem } = this.state
    
    const selectedStyle = {
      backgroundColor: "white",
      color: "slategray"
    }
  
    return (
     
       <header className="css-header">
          <div className="css-main">
            <div className="css-iiezwn">
                <Link to='/' className="css-hobwqm" activeStyle={selectedStyle}>
                  <Img src={logo} alt={alt} className="App-logo"  {... this.props} />
                  <span className="css-184keb2">React</span>
                  </Link>

               <nav className="css-79txt3">
               <Link to='/feed' className="css-hobwqm" activeStyle={selectedStyle}> 
                  文档 
                  </Link>
                  <Link to='/card' className="css-hobwqm" activeStyle={selectedStyle}>                  
                  教程
                  </Link>
                 
                  <Link to='/blog' className="css-hobwqm" activeStyle={selectedStyle}>        
                  博客
                  </Link>
                  <Link to='/community' className="css-hobwqm" activeStyle={selectedStyle}>
                  社区
                  </Link>
               </nav>
               <form className="css-33zy79">
                  <span className="algolia-autocomplete" 
                        style={{position: "relative", display: "inline-block", direction: "ltr"}}>
                      <input type="search" id="algolia-doc-search" placeholder="搜索" 
                            aria-label="在文档中搜索..." 
                            className="css-7dpbpx ds-input" 
                            autocomplete="off" 
                            spellcheck="false" 
                            role="combobox" 
                            aria-autocomplete="list" 
                            aria-expanded="false" 
                            aria-labelledby="algolia-doc-search" 
                            aria-owns="algolia-autocomplete-listbox-0" 
                            dir="auto" style={{position: "relative", verticalAlign:"top"}} />
                      <pre aria-hidden="true" style={{position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', fontFamily: '-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif', fontSize: '18px', fontStyle: 'normal', 
                      fontVariant: 'normal', fontWeight: '300', wordSpacing: '0px', letterSpacing: 'normal', textIndent: '0px', textRendering: 'auto', textTransform: 'none'}}></pre>
                      <span className="ds-dropdown-menu" 
                            role="listbox" 
                            id="algolia-autocomplete-listbox-0" 
                            style={{position: "absolute", top: "100%", zIndex: "100", display: "none", left: "0px", right: "auto"}}>
                          <div className="ds-dataset-1"></div>
                      </span>
                  </span>
                </form>
                
                <div className="css-nypjs8">
                    <a className="css-zvm479" href="/versions">v16.8.4</a>
                    <a className="css-1upvlu3" href="/languages">
                    <Img src={imgMutiLang} alt={alt}   {... this.props} />
                                     <span className="css-1rsw1pf">多语言</span></a>
                                     <a href="https://github.com/facebook/react/"  rel="noopener" className="css-6oo1gu">GitHub
                                     <Img src={imgRarrow} alt={alt}   {... this.props} />
                      </a>
                  </div>
              </div>
          </div>
        </header>
    )
  }
}

export default NavHeakerBar
