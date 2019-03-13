import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'




class NavFooterBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        
      <Menu stackable>
        <Menu.Item        
        name='Red'
        active={activeItem === 'Red'}
        onClick={this.handleItemClick}
        href='/hsl/10/90/50'
        >
         Red
        </Menu.Item>

       

        <Menu.Item
          name='Green'
          active={activeItem === 'Green'}
          onClick={this.handleItemClick}
          href='/hsl/120/100/40'
        >
          Green
        </Menu.Item>

        <Menu.Item
          name='Blue'
          active={activeItem === 'Blue'}
          onClick={this.handleItemClick}
          href='/rgb/33/150/243'
        >
          Blue
        </Menu.Item>

        <Menu.Item
          name='Pink'
          active={activeItem === 'Pink'}
          onClick={this.handleItemClick}
          href='/rgb/240/98/146'
        >
          Pink
        </Menu.Item>
        

        <Menu.Item        
        name='Yellow'
        active={activeItem === 'Yellow'}
        onClick={this.handleItemClick}
        href='/yellow'
        >
         Yellow
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavFooterBar
