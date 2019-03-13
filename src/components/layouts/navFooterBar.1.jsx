import React, { Component } from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg'
import rarrow from '../../assets/images/rectangle-arrow.svg'

class NavFooterBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
   // const { activeItem } = this.state

    return (
      {
        /*  
      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src={logo} />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
      */
     }

      <footer className="css-smm72f">
         <div className="css-tctv7l">
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
                            <a href="https://github.com/facebook/react" target="_blank" rel="noopener" className="css-8l81zy">GitHub<Image src={rarrow} /></a>
                            <a href="https://stackoverflow.com/questions/tagged/reactjs" target="_blank" rel="noopener" className="css-8l81zy">Stack Overflow<Image src={rarrow} /></a>
                            <a href="https://discuss.reactjs.org" target="_blank" rel="noopener" className="css-8l81zy">Discussion 论坛<Image src={rarrow} /></a>
                            <a href="https://discord.gg/0ZcbPKXt5bZjGY5n" target="_blank" rel="noopener" className="css-8l81zy">Reactiflux 聊天室<Image src={rarrow} /></a>
                            <a href="https://dev.to/t/react" target="_blank" rel="noopener" className="css-8l81zy">DEV 社区<Image src={rarrow} /></a>
                            <a href="https://www.facebook.com/react" target="_blank" rel="noopener" className="css-8l81zy">Facebook<Image src={rarrow} /></a>
                            <a href="https://twitter.com/reactjs" target="_blank" rel="noopener" className="css-8l81zy">Twitter<Image src={rarrow} /></a>
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
                            <a href="https://facebook.github.io/react-native/" target="_blank" rel="noopener" className="css-8l81zy">React Native<Image src={rarrow} /></a>
                        </div>
                      </div>
                  </div>
                      
                  <section className="css-1tq073i">
                        <a href="https://code.facebook.com/projects/" target="_blank" rel="noopener">
                        <Image centered size='mini' src={logo} /></a>
                        <p className="css-1yy5aal">Copyright © 2019 Facebook Inc.</p>
                        <p className="css-1yy5aal"><a href="https://docschina.org/" target="_blank">印记中文</a></p>
                </section>
              </div>
          </div>
        </footer>
    )
  }
}

export default NavFooterBar
