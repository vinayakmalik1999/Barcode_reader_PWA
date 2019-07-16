import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import ControlledCarousel from './ControlledCarousel.js'
import OfflineBanner from './OfflineBanner.js'
import { Offline, Online } from 'react-detect-offline'

class Home extends Component {
  render() {
    return (


      <div>
      <Offline>
        <OfflineBanner/>
        </Offline>

      <ListGroup>
      <Link to ="/stuff" style={{ textDecoration: 'none' }}>
      <ListGroup.Item action variant="#ffffff">
   <h1>INBOUND</h1>
      </ListGroup.Item>
      </Link>
        <Link to ="/contact" style={{ textDecoration: 'none' }}>
         <ListGroup.Item action variant="#ffffff" >
        <h1>OUTBOUND</h1>
         </ListGroup.Item>
         </Link>

       </ListGroup>



</div>







    );
  }
}

export default Home;
