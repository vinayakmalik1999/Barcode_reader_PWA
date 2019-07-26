import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "./Home";
import ListPage from "./ListPage";
import ScanPage from "./ScanPage";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import BurgerMenu from "./components/BurgerMenu"
import Container from "react-bootstrap/Container"
import ErrorPage from './ErrorPage'
import InfoPage from './info'
import {Collapse} from 'react-bootstrap'
import { FaWarehouse } from "react-icons/fa";
import { IconContext } from "react-icons";
import {Receiving} from './receiving'
import CeleroListPage from './celero_api_list_page'
import { Link } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'
import OfflineBanner from './components/OfflineBanner.js'

 export default class App extends Component {
   constructor(props){
     super(props);

   this.state = {
   isOpen: true
   };

   }

   render(){
    return (
        <Router>
          <div>


<Navbar collapseOnSelect className="Navbar" sticky="top" variant="dark" expand="md">
  <Navbar.Brand>
  <IconContext.Provider value={{ color: "#9a9a9a", className: "logo",size: '1.356em' }}>
  <FaWarehouse/>
  </IconContext.Provider>
  </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse   id="responsive-navbar-nav">
    <Nav className="mr-auto" >
    <Link to ='/' style ={{textDecoration: 'none',  color: '#fff'}}>  <Nav.Link href="/">Home </Nav.Link></Link>
    <NavDropdown title="Inbound" id="responsive-nav-dropdown" class="responsive-nav-dropdown" >
<Link to ='/receiving' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/receiving'> Receiving</NavDropdown.Item></Link>
<NavDropdown.Divider / >
    <Link to ='/empty-page' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/Putaway'> Putaway</NavDropdown.Item></Link>
</NavDropdown>
      <NavDropdown title="Outbound" id="responsive-nav-dropdown" class="responsive-nav-dropdown" >
    <Link to ='/empty-page' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/'>  Replenishment </NavDropdown.Item></Link>
        <NavDropdown.Divider / >
        <Link to ='/empty-page' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item>Pick</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <NavDropdown.Item>Multi-Order Pick</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >User Defined Task</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Pack</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Ship</NavDropdown.Item>
      </NavDropdown>
      <Link to ='/stuff' style ={{textDecoration: 'none',  color: '#fff'}}>  <Nav.Link href="/">ListPage</Nav.Link></Link>
      <Link to ='/contact' style ={{textDecoration: 'none',  color: '#fff'}}>  <Nav.Link href="/">ScanPage</Nav.Link></Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>

<Offline>
  <OfflineBanner/>
  </Offline>







            <div className="content">
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={ListPage}/>
             <Route path ="/contact" component ={ScanPage}/>

           <Route path ="/receiving" component ={Receiving}/>
           <Route path ="/celero_get_api" component ={CeleroListPage}/>

             //for all errant routes divert back to home
             <Route component={ErrorPage}/>
             </Switch>
              </div>
          </div>
        </Router>
  );
}
}
