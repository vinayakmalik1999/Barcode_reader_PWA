import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DummyPage from './containers/dummypage'
export default class User_Defined_Task extends Component {
  render() {
    return (


      <div>
      <Card  border="light" className="text-center ">

        <Card.Body>
          <Card.Title class='title'>User Defined Task</Card.Title>


        </Card.Body>

      </Card>

<DummyPage/>


</div>
)
}
}
