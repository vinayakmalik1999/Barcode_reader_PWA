import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {ListGroup,Card,CardGroup} from 'react-bootstrap'
import ControlledCarousel from './components/ControlledCarousel.js'
import OfflineBanner from './components/OfflineBanner.js'
import { Offline, Online } from 'react-detect-offline'
import { IconContext } from "react-icons";
import { FaTruckLoading,FaGasPump,FaBoxes,FaWalking,FaTruckMoving,FaUserPlus,FaBoxOpen,FaShippingFast} from "react-icons/fa";
import './Home.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Home extends Component {
  render() {
    return (


      <div>
      <Row>
      <Col>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>DashBoard</Card.Title>


        </Card.Body>

      </Card>
      </Col>
      </Row>

  <Row>
   <Col xs={6} md={4} large={3}>
    <Card  border="light" className="text-center p-3">
    <Link to ='/Receiving'  style ={{textDecoration: 'none',  color: 'inherit'}}>

      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2.1em' }}>
        <FaTruckLoading/>
        </IconContext.Provider>
        </Card.Title>

        Receiving

      </Card.Body>
      </Link>

    </Card>
</Col>
 <Col xs={6} md={4} large={3}>
    <Card  border="light" className="text-center p-3">
    <Link to ='/Putaway'  style ={{textDecoration: 'none',  color: 'inherit'}}>

      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2.1em' }}>
        <FaBoxes/>
        </IconContext.Provider>
        </Card.Title>
        Put Away
      </Card.Body>
      </Link>


    </Card>
    </Col>

    <Col xs={6} md={4} large={3}>

    <Card  border="light" className="text-center p-3">
    <Link to ='/Replenishment'  style ={{textDecoration: 'none',  color: 'inherit'}}>
      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2em' }}>

        <FaGasPump/>

        </IconContext.Provider>
        </Card.Title>
      Replenishment
      </Card.Body>

        </Link>
    </Card>
    </Col>
    <Col xs={6} md={4} large={3}>

    <Card  border="light" className="text-center p-3">
    <Link to ='/Pick'  style ={{textDecoration: 'none',  color: 'inherit'}}>
      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2em' }}>

        <FaWalking/>

        </IconContext.Provider>
        </Card.Title>
      Pick
      </Card.Body>

        </Link>
    </Card>
    </Col>
    <Col xs={6} md={4} large={3}>

    <Card  border="light" className="text-center p-3">
    <Link to ='/Multi_Order_Pick'  style ={{textDecoration: 'none',  color: 'inherit'}}>
      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2em' }}>

        <FaTruckMoving/>

        </IconContext.Provider>
        </Card.Title>
      Multi Order Pick
      </Card.Body>

        </Link>
    </Card>
    </Col>
    <Col xs={6} md={4} large={3}>

    <Card  border="light" className="text-center p-3">
    <Link to ='/User_Defined_Task'  style ={{textDecoration: 'none',  color: 'inherit'}}>
      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2em' }}>

        <FaUserPlus/>

        </IconContext.Provider>
        </Card.Title>
    User Defined Task
      </Card.Body>

        </Link>
    </Card>
    </Col>
    <Col xs={6} md={4} large={3}>

    <Card  border="light" className="text-center p-3">
    <Link to ='/Pack'  style ={{textDecoration: 'none',  color: 'inherit'}}>
      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2em' }}>

        <FaBoxOpen/>

        </IconContext.Provider>
        </Card.Title>
    Pack
      </Card.Body>

        </Link>
    </Card>
    </Col>
    <Col xs={6} md={4} large={3}>

    <Card  border="light" className="text-center p-3">
    <Link to ='/Ship'  style ={{textDecoration: 'none',  color: 'inherit'}}>
      <Card.Body>
        <Card.Title>
        <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2em' }}>

        <FaShippingFast/>

        </IconContext.Provider>
        </Card.Title>
    Ship
      </Card.Body>

        </Link>
    </Card>
    </Col>
    </Row>




</div>







    );
  }
}

export default Home;
