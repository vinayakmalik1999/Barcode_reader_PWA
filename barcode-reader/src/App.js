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
<Navbar.Brand><NavLink exact to="/">Katalyst-Technologies</NavLink></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Nav className="mr-auto">

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Navbar.Collapse>
    <Form inline>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#link">Link</Nav.Link>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
</Navbar>



            <div className="content">
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={Stuff}/>
             <Route path ="/contact" component ={Contact}/>
             </Switch>
              </div>
          </div>
        </Router>
  );
}

export default App;
