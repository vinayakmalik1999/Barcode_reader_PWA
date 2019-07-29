import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DummyPage from './containers/dummypage'
export default class Purchase_Receipt extends Component {
  render() {
    return (


      <div>
      <Card  border="light" className="text-center ">

        <Card.Body>
          <Card.Title class='title'>Purchase Receipt</Card.Title>


        </Card.Body>

      </Card>

<DummyPage/>


</div>
)
}
}
