import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {ListGroup,Card,CardColumns} from 'react-bootstrap'
import ControlledCarousel from './components/ControlledCarousel.js'
import OfflineBanner from './components/OfflineBanner.js'
import { Offline, Online } from 'react-detect-offline'
import './Home.css'
class Home extends Component {
  render() {
    return (


      <div>
      <Card  border="light" className="text-center ">

        <Card.Body>
          <Card.Title class='title'>DashBoard</Card.Title>


        </Card.Body>

      </Card>


        

</div>







    );
  }
}

export default Home;
