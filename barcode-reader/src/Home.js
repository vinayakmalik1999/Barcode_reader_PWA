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
    <h1>BarcodeList</h1>
  </Button>
    </Link>
  <Button variant="secondary" size="lg" block>
  <h1>BarcodeScanner</h1>
    </Button>

</div>







    );
  }
}

export default Home;
