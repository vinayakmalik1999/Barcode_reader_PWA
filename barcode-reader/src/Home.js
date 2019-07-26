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
    

        <CardColumns>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/ca/d0/78/cad078ea456038edc5edd20893107420.jpg" />
        <Card.Body>
          <Card.Title>Card title that wraps to a new line</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/ae/48/66/ae4866824012b855e82a358960c1d0d6.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg="danger" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img src="https://i.pinimg.com/originals/2c/5b/8f/2c5b8faa6734792968c4247b5569a95c.jpg" />
      </Card>
      <Card className="text-right">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>



</div>







    );
  }
}

export default Home;
