import * as React from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import { FaWarehouse } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { IconContext } from "react-icons";
import './receiving.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export const Receiving = () => {
var key =  window.location.search.slice(1).split("&")[0].split("=")[1]
  return(
<div>

<Card  border="light" className="text-center ">

  <Card.Body>
    <Card.Title class='title'>Receiving</Card.Title>


  </Card.Body>

</Card>






<Card>
<ListGroup variant="flush">
<Link to ="/celero_get_api" style={{ textDecoration: 'none' }}> <ListGroup.Item >Site : {sessionStorage.getItem(key)} <div style={{ float:'right'}}>> </div></ListGroup.Item></Link>
</ListGroup>
</Card>

<CardGroup>
  <Card  border="light" className="text-center p-3">
  <Link to ='/Inbound'  style ={{textDecoration: 'none',  color: 'inherit'}}>

    <Card.Body>
      <Card.Title>
      <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2.1em' }}>
      <FaWarehouse/>
      </IconContext.Provider>
      </Card.Title>

      Inbound

    </Card.Body>
    </Link>

  </Card>
  <Card  border="light" className="text-center p-3">
  <Link to ='/Purchase_Receipt'  style ={{textDecoration: 'none',  color: 'inherit'}}>
    <Card.Body>
      <Card.Title>
      <IconContext.Provider value={{ color: "#000", className: "inbound",size: '2em' }}>

      <FaReceipt/>

      </IconContext.Provider>
      </Card.Title>
      Purchase Receipt
    </Card.Body>

      </Link>
  </Card>
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
</CardGroup>
</div>
)


}
