import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DummyPage from './containers/dummypage'
export default class Pack extends Component {
  render() {
    return (


      <div>
      <Card  border="light" className="text-center ">

        <Card.Body>
          <Card.Title class='title'>Pack</Card.Title>


        </Card.Body>

      </Card>

<DummyPage/>


</div>
)
}
}
