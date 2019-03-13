import React, { Component } from 'react'
import {
  Container,
  Dropdown,
  Image, 
  Menu
} from 'semantic-ui-react'

import logo from '../../assets/images/logo.svg'
//import Auth from '../utils/AuthService'
import '../../assets/stylesheets/App.css';
//const auth= new Auth();
class NavHeakerBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
     
       <Menu fixed='top' inverted>
       <Container>
         <Menu.Item as='a' header
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          href='/'
         >
           <Image size='mini' className="App-logo" src={logo} style={{ marginRight: '1.5em' }} />
           Project Name
         </Menu.Item>
         
         <Menu.Item
          name='feed'
          active={activeItem === 'feed'}
          onClick={this.handleItemClick}
          href='/feed'
        >
          Feed
        </Menu.Item>

        <Menu.Item
          name='card'
          active={activeItem === 'card'}
          onClick={this.handleItemClick}
          href='/card'
        >
          Card
        </Menu.Item>
 
         <Dropdown item simple text='Dropdown'>
           <Dropdown.Menu>
             <Dropdown.Item>List Item</Dropdown.Item>
             <Dropdown.Item>List Item</Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Header>Header Item</Dropdown.Header>
             <Dropdown.Item>
               <i className='dropdown icon' />
               <span className='text'>Submenu</span>
               <Dropdown.Menu>
                 <Dropdown.Item>List Item</Dropdown.Item>
                 <Dropdown.Item>List Item</Dropdown.Item>
               </Dropdown.Menu>
             </Dropdown.Item>
             <Dropdown.Item>List Item</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
       </Container>
     </Menu>
    )
  }
}

export default NavHeakerBar