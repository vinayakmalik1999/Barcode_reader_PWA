import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import { Link } from 'react-router-dom'
function App() {
    return (
        <Router>
          <div>

<Navbar sticky="top" className="bg-dark justify-content-between" expand="lg">
<header><Navbar.Brand>{<BurgerMenu/>}. </Navbar.Brand></header>
 <Link to = "/"><Navbar.Brand>HOME</Navbar.Brand></Link>
<Navbar.Text align ='right' width ='18em'>
      Signed in as: <a href="#login">USER</a>
    </Navbar.Text>




</Navbar>



            <div className="content">
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={ListPage}/>
             <Route path ="/contact" component ={ScanPage}/>
             //for all errant routes divert back to home
             <Route component={ErrorPage}/>
             </Switch>
              </div>
          </div>
        </Router>
  );
}

export default App;
