import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import ControlledCarousel from './ControlledCarousel.js'
import OfflineBanner from './OfflineBanner.js'
class Home extends Component {
  render() {
    return (


      <div>
      <OfflineBanner/>
      <ControlledCarousel/>

      <ListGroup  defaultActiveKey="#link1">
      <Link to ="/stuff">
      <ListGroup.Item action variant="dark">
   <h1>BarcodeList</h1>
      </ListGroup.Item>
      </Link>
        <Link to ="/contact">
         <ListGroup.Item action variant="dark" >
        <h1>BarcodeScanner</h1>
         </ListGroup.Item>
         </Link>

       </ListGroup>



</div>







    );
  }
}

export default Home;
