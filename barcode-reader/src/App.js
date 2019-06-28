import React, { Component }  from 'react';
import './App.css';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

function App() {
    return (
        <Router>
          <div>

            <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            </ul>
            <div className="content">
            <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={Stuff}/>
             <Route path="/contact" component={Contact}/>
             </Switch>
              </div>
          </div>
        </Router>
  );
}

export default App;
