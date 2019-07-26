import React, { Component } from "react"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OfflineBanner from './components/OfflineBanner.js'
import { Offline, Online } from 'react-detect-offline'
import { Link } from 'react-router-dom'
export default function ErrorPage(){

  return(
    <div>
    <div>

      </div>
    <Card border="danger">
    <Card.Header>Network Error</Card.Header>
    <Card.Body>
      <Card.Title>Error 404 Page Not Found:</Card.Title>
      <Card.Text>
        The page you requested has not been found,
         either the address to the page is wrong or the page does not exist.
      </Card.Text>
      <Link to = '/'><Button variant="secondary">Return Home</Button></Link>
    </Card.Body>
  </Card>
  </div>
)
}
