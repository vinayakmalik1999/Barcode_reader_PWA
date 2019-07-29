import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DummyPage from './containers/dummypage'
export default class Multi_Order_Pick extends Component {
  render() {
    return (


      <div>
      <Card  border="light" className="text-center ">

        <Card.Body>
          <Card.Title class='title'>Multi Order Pick</Card.Title>


        </Card.Body>

      </Card>

<DummyPage/>


</div>
)
}
}
