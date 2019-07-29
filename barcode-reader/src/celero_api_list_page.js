import React, { Component } from "react"
import axios from 'axios'
import OfflineBanner from './components/OfflineBanner.js'
import { Offline, Online } from 'react-detect-offline'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { IconContext } from "react-icons";


import {ListGroup,Card,CardColumns} from 'react-bootstrap'


export default class CeleroListPage extends Component {
  // Setting initial state

  constructor(props) {
      super(props);
      this.state = {
        user:[],
        isLoading:true,
      }
      //Important : you need to bind this(value in constructor) to the handler to use it in handler function

    }
    componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.uattest.celeroerp.com/api/Settings/Site/GetActiveSiteList?isDeleted=0'
)
    .then(response => {

      this.setState({
        user:response.data,
        isLoading:false
      })

      console.log(this.state.user)

    })
    .catch(error => {
      console.log(error);

    });
  }

  render(){
    return(
      <Card>
        <Card.Body>
          <Card.Title style={{ 'font-size': '2rem'}}>Active Site List {this.state.isLoading?
            <Spinner style={{ float:'right', color:'#3333'}} animation="border" variant="dark" />:<br/>}

          </Card.Title>


          <ListGroup variant="flush" style={{ 'font-size': '1.1rem'}}>
          {this.state.user.map((users, index)=> (
                  <Link to ={"/receiving?id=" + index } style={{ textDecoration: 'none' }}  onClick = {sessionStorage.setItem(index, users.Text)}>
                  <ListGroup.Item key ={index} >{users.Text}</ListGroup.Item>

                  </Link>



          ))}

          </ListGroup>


        </Card.Body>
      </Card>
    )
  }
}
