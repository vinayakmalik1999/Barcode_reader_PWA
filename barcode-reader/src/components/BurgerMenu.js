import React, { Component }  from 'react';
import { slide as Menu } from 'react-burger-menu'
import "./BurgerMenu.css"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {WithIcons} from './sideMenu'
class BurgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    return (

<WithIcons/>






    );
  }
}
export default BurgerMenu
