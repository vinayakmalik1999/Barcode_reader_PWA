import * as React from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import './receiving.css'

export const Receiving = () => {
var key =  window.location.search.slice(1).split("&")[0].split("=")[1]
  return(
<div>


<Card>
<ListGroup variant="flush">
<Link to ="/celero_get_api" style={{ textDecoration: 'none' }}> <ListGroup.Item style={{'font-size':'1.1rem'}}>Site : {sessionStorage.getItem(key)} <div style={{ float:'right'}}>> </div></ListGroup.Item></Link>
</ListGroup>
</Card>
    <CardGroup style={{'margin-bottom':'0px'}}>

  <Card  border="light">

    <Card.Body>
      <Card.Title>Card title</Card.Title>

        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.

    </Card.Body>

  </Card>
  <Card  border="light">

    <Card.Body>
      <Card.Title>Card title</Card.Title>

        This card has supporting text below as a natural lead-in to additional
        content.{' '}

    </Card.Body>

  </Card>
  <Card  border="light">

    <Card.Body>
      <Card.Title>Card title</Card.Title>

        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.

    </Card.Body>

  </Card>
</CardGroup>
</div>
)


}
