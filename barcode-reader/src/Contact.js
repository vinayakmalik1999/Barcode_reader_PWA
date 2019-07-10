import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OfflineBanner from './OfflineBanner.js'
class Contact extends Component {

  render() {
    return (
      <div>
      <OfflineBanner/>

       <Button variant="primary">ADD</Button>

        </div>
      );
    }
  }



export default Contact;
