import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';

class MyNavbar extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state
    return(
      <Menu pointing secondary color='red'>
        <Menu.Item
          name='fight'
          active={activeItem === 'fight'}
          onClick={this.handleItemClick}
        >
          <Link to="/">Fight</Link>
        </Menu.Item>
        <Menu.Item
          name='sub'
          active={activeItem === 'sub'}
          onClick={this.handleItemClick}
        >
          <Link to="/subscribe">Sub</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MyNavbar;
