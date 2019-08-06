import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  Route,
  BrowserRouter as Router,

} from "react-router-dom";
import  {BrowserHistory}from 'react-router'
import Home from "./Home";
import { MdMenu,MdClose,MdKeyboardBackspace } from "react-icons/md";
import ListPage from "./ListPage";
import ScanPage from "./ScanPage";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ErrorPage from './ErrorPage'
import { IoMdBarcode } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";
import {Receiving} from './receiving'
import CeleroListPage from './celero_api_list_page'
import { Link } from 'react-router-dom'
import { Offline } from 'react-detect-offline'
import OfflineBanner from './components/OfflineBanner.js'
import Putaway from './Putaway'
import Replenishment from './Replenishment'
import Pick from './Pick'
import Multi_Order_Pick from './Multi_Order_Pick'
import User_Defined_Task from './User_Defined_Task'
import Pack from './Pack'
import Ship from './Ship'
import celero from './celero_white.png'
import Inbound from './Inbound'
import Purchase_Receipt from './Purchase_Receipt'
import BurgerMenu from './components/BurgerMenu'
import { spring, AnimatedSwitch } from 'react-router-transition';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function mapStyles(styles) {
  return {

    transform: `translateX(${styles.offset}%)`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 24,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
offset:100
  },
  // leave in a transparent, downscaled state
  atLeave: {
  offset:-100
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
  offset:0
  },
};

class App extends Component {
   constructor(props){
     super(props);

   this.state = {
   isOpen: true,

   };

   }
backClick(){
  this.props.router.goBack()

}


   render(){
     const {
  user,
  signOut,
  signInWithGoogle,
} = this.props;
    return (

        <Router>



<Navbar  className="Navbar"  variant="dark" fixed='top' expand="md" >
<BurgerMenu/>

<Navbar.Brand >

  <Link to ='/'  style ={{textDecoration: 'none',  color: 'inherit'}}>
  <img
         src= {celero}
         className="d-inline-block align-top"
         alt="React Bootstrap logo"
       />
</Link>

</Navbar.Brand>
<Navbar.Collapse   id="basic-navbar-nav">
  <Nav className="mx-auto">
  <Link to ='/' style ={{textDecoration: 'none',  color: '#fff'}}>  <Nav.Link href="/">DashBoard </Nav.Link></Link>
  <NavDropdown title="Inbound" id="responsive-nav-dropdown" class="responsive-nav-dropdown" >
<Link to ='/receiving' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/receiving'> Receiving</NavDropdown.Item></Link>
<NavDropdown.Divider / >
  <Link to ='/Putaway' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item href='/Putaway'> Putaway</NavDropdown.Item></Link>
</NavDropdown>
    <NavDropdown title="Outbound" id="responsive-nav-dropdown" class="responsive-nav-dropdown" >
  <Link to ='/Replenishment' style ={{textDecoration: 'none',  color: '#fff'}}>  <NavDropdown.Item class='replenishment' href='/Replenishment'>  Replenishment </NavDropdown.Item></Link>
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






    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-responsive">
      {user? <Image class ='userlogin'   src={user.photoURL} style ={{height:'36px'}}roundedCircle  />:   <IconContext.Provider class ='userlogin'  value={{ color: "#d0cccc", className: "logo",size: '1.75em' }}>
        <FaUserCircle/>
        </IconContext.Provider>}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {user?<Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>:<Dropdown.Item onClick={signInWithGoogle}>Sign In With Google</Dropdown.Item>}
      </Dropdown.Menu>
    </Dropdown>

</Navbar>
<br/><br/>
<Offline>
<OfflineBanner/>
</Offline>











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



        </Router>
  );
}
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
