import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ControlledCarousel from './ControlledCarousel.js'
class Home extends Component {
  render() {
    return (


      <div>
      <ControlledCarousel/>
      <Link to ="/stuff">
  <Button variant="primary" size="lg" block>
    <h1>List Page</h1>
  </Button>
  <Button variant="secondary" size="lg" block>
  <h1>OUTBOUND</h1>
    </Button>
    </Link>
</div>







    );
  }
}

export default Home;
