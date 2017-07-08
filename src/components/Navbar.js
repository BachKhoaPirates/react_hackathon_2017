import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

class MyNavbar extends Component {
  render(){
    return(
       <Navbar collapseOnSelect fixedTop>
         <Navbar.Header>
           <Navbar.Brand>
             <Link to="/">Fight</Link>
             <Link to="/subcribe">Sub</Link>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">Login</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
}

export default MyNavbar;
