import * as React from "react";
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
export const Receiving = () => {
  return(
  <Card>

  <ListGroup variant="flush">
  <Link to ="/" style={{ textDecoration: 'none' }}> <ListGroup.Item style={{}}>Site :{} <div style={{ float:'right'}}>> </div></ListGroup.Item></Link>
  </ListGroup>
</Card>
)
}
