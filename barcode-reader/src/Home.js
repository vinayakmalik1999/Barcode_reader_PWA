import React, { Component } from "react";
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <Link to ="/stuff">
      <div>
        <h2>OUTBOUND</h2>
        
      </div></Link>



    );
  }
}

export default Home;
