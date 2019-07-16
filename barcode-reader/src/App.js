import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import BurgerMenu from "./BurgerMenu"
import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom'
function App() {
    return (
        <Router>
          <div>

<Navbar sticky="top" bg="dark" expand="lg">
<header><Navbar.Brand>{<BurgerMenu/>}. </Navbar.Brand></header>
 <Link to = "/"><Navbar.Brand>HOME</Navbar.Brand></Link>
<Navbar.Text>
      Signed in as: <a href="#login">USER</a>
    </Navbar.Text>




</Navbar>



            <div className="content">
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={Stuff}/>
             <Route path ="/contact" component ={Contact}/>
             <Route component={Home}/>
             </Switch>
              </div>
          </div>
        </Router>
  );
}

export default App;
