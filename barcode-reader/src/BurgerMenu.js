import React, { Component }  from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./BurgerMenu.css"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { SideNav, Nav, NavContext } from "react-sidenav";
class BurgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (
      <Menu >

    
     <SideNav defaultSelectedPath="1">
       <Nav id="1">
        "sss"
       </Nav>
       <Nav id="2">
         showSettings
         <Nav id="1">
           Orders
         </Nav>
         <Nav id="2">
           Refunds
         </Nav>
         <Nav id="3">
           Deliveries
         </Nav>
       </Nav>
       <Nav id="3">
        23
       </Nav>
     </SideNav>

        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>

    );
  }
}
export default BurgerMenu
