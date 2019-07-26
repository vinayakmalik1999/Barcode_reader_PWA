import * as React from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
export const Receiving = () => {
  return(
  <Card>

  <ListGroup variant="flush">
  <Link to ="/celero_get_api" style={{ textDecoration: 'none' }}> <ListGroup.Item style={{'font-size':'1.2rem'}}>Site :{} <div style={{ float:'right'}}>> </div></ListGroup.Item></Link>
  </ListGroup>
</Card>
)
}
