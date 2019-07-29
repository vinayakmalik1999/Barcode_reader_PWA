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
import { IoMdBarcode } from "react-icons/io";
import { IconContext } from "react-icons";
import {Receiving} from './receiving'
import CeleroListPage from './celero_api_list_page'
import { Link } from 'react-router-dom'
import { Offline, Online } from 'react-detect-offline'
import OfflineBanner from './components/OfflineBanner.js'
import Putaway from './Putaway'
import Replenishment from './Replenishment'
import Pick from './Pick'
import Multi_Order_Pick from './Multi_Order_Pick'
import User_Defined_Task from './User_Defined_Task'
import Pack from './Pack'
import Ship from './Ship'
import Inbound from './Inbound'
import Purchase_Receipt from './Purchase_Receipt'
import { spring, AnimatedSwitch } from 'react-router-transition';
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 25,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 0.25,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(1.75),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

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

  <IconContext.Provider value={{ color: "#9a9a9a", className: "logo",size: '1.4em' }}>
    <Link to ='/'  style ={{textDecoration: 'none',  color: 'inherit'}}>
  <IoMdBarcode/>
  </Link>
  </IconContext.Provider>
  </Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse   id="responsive-navbar-nav">
    <Nav className="mr-auto" >
    <Link to ='/' style ={{textDecoration: 'none',  color: '#fff'}}>  <Nav.Link href="/">DashBoard </Nav.Link></Link>
    <NavDropdown title="Inbound" id="responsive-nav-dropdown" class="responsive-nav-dropdown" >
<Link to ='/receiving' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/receiving'> Receiving</NavDropdown.Item></Link>
<NavDropdown.Divider / >
    <Link to ='/Putaway' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/Putaway'> Putaway</NavDropdown.Item></Link>
</NavDropdown>
      <NavDropdown title="Outbound" id="responsive-nav-dropdown" class="responsive-nav-dropdown" >
    <Link to ='/Replenishment' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/Replenishment'>  Replenishment </NavDropdown.Item></Link>
        <NavDropdown.Divider / >
        <Link to ='/Pick' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/Pick'>Pick</NavDropdown.Item></Link>
        <NavDropdown.Divider />
    <Link to ='/Multi_Order_Pick' style ={{textDecoration: 'none',  color: '#fff'}}>     <NavDropdown.Item href='/Multi_Order_Pick'>Multi-Order Pick</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <Link to ='/User_Defined_Task' style ={{textDecoration: 'none',  color: '#fff'}}> <NavDropdown.Item href='/Multi_Order_Pick' >User Defined Task</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <Link to ='/Pack' style ={{textDecoration: 'none',  color: '#fff'}}> <NavDropdown.Item href='/Multi_Order_Pick' >Pack</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <Link to ='/Ship' style ={{textDecoration: 'none',  color: '#fff'}}> <NavDropdown.Item href='/Multi_Order_Pick' >Ship</NavDropdown.Item></Link>
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
            <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
        >
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={ListPage}/>
             <Route path ="/contact" component ={ScanPage}/>

           <Route path ="/Receiving" component ={Receiving}/>
           <Route path ="/celero_get_api" component ={CeleroListPage}/>
           <Route path ="/Putaway" component ={Putaway}/>
           <Route path ='/Replenishment' component ={Replenishment}/>
           <Route path ='/Pick' component ={Pick}/>
           <Route path ='/Multi_Order_Pick' component ={Multi_Order_Pick}/>
            <Route path ='/User_Defined_Task' component ={User_Defined_Task}/>
             <Route path ='/Pack' component ={Pack}/>
              <Route path ='/Ship' component ={Ship}/>
                <Route path ='/Inbound' component ={Inbound}/>
                  <Route path ='/Purchase_Receipt' component ={Purchase_Receipt}/>

             <Route component={ErrorPage}/>
      </AnimatedSwitch>
              </div>
          </div>
        </Router>
  );
}
}
