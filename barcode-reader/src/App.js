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

function App() {
    return (
        <Router>
          <div>
<Navbar bg="dark" expand="lg">
<Navbar.Brand><NavLink exact to="/">KT</NavLink></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Nav className="mr-auto">
    </Nav>
    <Navbar.Collapse>
    <Form inline>
    <Nav.Link href="/">Home</Nav.Link>
    </Form>
    </Navbar.Collapse>
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
