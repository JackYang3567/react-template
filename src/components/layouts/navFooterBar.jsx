import React, { Component } from 'react'
import {
  //Container,
  //Divider,
  //Grid,
  //Header,
  Image,
  //List,
  //Segment,
} from 'semantic-ui-react'
//import logo from '../../assets/images/logo.svg'
import imgRarrow from '../../assets/images/rectangle-arrow.svg'
import imgLogoTest from '../../assets/images/logo_test.png'

import Img from '../ui/Img/index';


const alt = 'test';

 

class NavFooterBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
   // const { activeItem } = this.state

    return (
     
     <footer className="css-smm72f">
         <div className="css-main">
              <div className="css-17njq4x">
                <div className="css-1q9mcvr">
                      <div className="css-12bsqfj">
                          <div className="css-1m3wp4q">
                              <div className="css-109jn6d">文档</div>
                              
                                <a className="css-8l81zy" href="/docs/getting-started.html">安装</a>
                                <a className="css-8l81zy" href="/docs/hello-world.html">核心概念</a>
                                <a className="css-8l81zy" href="/docs/accessibility.html">高级指引</a>
                                <a className="css-8l81zy" href="/docs/react-api.html">API Reference</a>
                                <a className="css-8l81zy" href="/docs/hooks-intro.html">Hooks（新）</a>
                                <a className="css-8l81zy" href="/docs/how-to-contribute.html">贡献</a>
                                <a className="css-8l81zy" href="/docs/faq-ajax.html">FAQ</a>
                          </div>
                      </div>
                      <div className="css-12bsqfj">
                        <div className="css-1m3wp4q">
                    
                            <div className="css-109jn6d">Channels</div>
                            <a href="https://github.com/facebook/react" rel="noopener" className="css-8l81zy">GitHub<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                            <a href="https://stackoverflow.com/questions/tagged/reactjs" rel="noopener" className="css-8l81zy">Stack Overflow<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                            <a href="https://discuss.reactjs.org" rel="noopener" className="css-8l81zy">Discussion 论坛<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                            <a href="https://discord.gg/0ZcbPKXt5bZjGY5n" rel="noopener" className="css-8l81zy">Reactiflux 聊天室<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                            <a href="https://dev.to/t/react" rel="noopener" className="css-8l81zy">DEV 社区<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                            <a href="https://www.facebook.com/react" rel="noopener" className="css-8l81zy">Facebook<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                            <a href="https://twitter.com/reactjs" rel="noopener" className="css-8l81zy">Twitter<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                        </div>
                      </div>
                      
                      <div className="css-12bsqfj">
                        <div className="css-1m3wp4q">
                            <div className="css-109jn6d">社区</div>
                            <a className="css-8l81zy" href="/community/support.html">社区资源</a>
                            <a className="css-8l81zy" href="/community/debugging-tools.html">工具</a>
                        </div>
                      </div>
                      <div className="css-12bsqfj">
                        <div className="css-1m3wp4q">
                            <div className="css-109jn6d">其他</div>
                            <a className="css-8l81zy" href="/tutorial/tutorial.html">教程</a>
                            <a className="css-8l81zy" href="/blog/">博客</a>
                            <a className="css-8l81zy" href="/acknowledgements.html">致谢</a>
                            <a href="https://facebook.github.io/react-native/" rel="noopener" className="css-8l81zy">React Native<Img src={imgRarrow} alt={alt} {... this.props} /></a>
                        </div>
                      </div>
                  </div>
                      
                  <section className="css-1tq073i">
                        <a href="https://code.facebook.com/projects/" rel="noopener">
                        <Image size='small' src={imgLogoTest} /></a>
                        <p className="css-1yy5aal">Copyright © 2019 Facebook Inc.</p>
                        <p className="css-1yy5aal"><a href="https://docschina.org/" >印记中文</a></p>
                </section>
              </div>
          </div>
        </footer>
    )
  }
}

export default NavFooterBar
