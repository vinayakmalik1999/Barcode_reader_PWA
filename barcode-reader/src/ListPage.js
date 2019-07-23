  import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import OfflineBanner from './components/OfflineBanner.js'
import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'
import { Offline, Online } from 'react-detect-offline'
import db from './components/dexieDB.js'

class ListPage extends Component {
  // Setting initial state

  constructor(props) {
      super(props);
      this.state = {
        user:[],
        formValue:'',
        offlineUser:[],
        resValue:'',
        offlineSubmitValue:'',
        iDB:{}
      }
      //Important : you need to bind this(value in constructor) to the handler to use it in handler function
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  //  retrieve data from API using WillMount lifecycle
  componentWillMount() {
  axios.get('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList')
  .then(response => {

    this.setState({user:response.data});
  })
  .catch(error => {
    //not super required as it is handeled by the service worker, makes things a little smoother though
    return caches.match('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList')


  });
}
//handler for form data submit
handleSubmit(event){
  //prevent refresh
  event.preventDefault();
if(this.state.formValue === ''){
  alert("please enter a value");
return;
}
//send data to API
  axios.post('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/Post',
  {
    Code:this.state.formValue
  }).then(res => {
       console.log(res);
       this.setState({resValue:res.data});
       axios.get('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList')
       .then(response => {

         this.setState({user:response.data});
       })
       .catch(error => {
         console.log(error)
         })


       this.setState({formValue:''})

     }).catch(error => {
       var pushValues = []
        navigator.serviceWorker.controller.postMessage(this.state.formValue)

       console.log("Offline sending data to SW");
       console.log(this.state.offlineSubmitValue);
     db.table('formValues').add({Code:this.state.offlineSubmitValue,createdDate:'2019-07-12'}).then(() =>{
      db.formValues.toArray( (array) =>{
        this.setState({offlineUser:array});
        console.log(this.state.offlineUser)
      })
    })

       this.setState({formValue:''})

     })


}
handleChange(event){
  this.setState({formValue:event.target.value})
  this.setState({offlineSubmitValue:this.state.formValue})
}


  // Return a table with some data from the API.

  render(){
if(navigator.onLine){
  db.table("formValues").clear()
}
  return  (

    <div className="container">
    <Offline>
      <OfflineBanner/>
      </Offline>

            <form onSubmit ={this.handleSubmit}>
              <input type ="string" value = {this.state.formValue} onChange={this.handleChange}/>
              <Button type="submit" variant="light">Add</Button>
              <Link to ="/contact">
            <Button variant="light">Scan</Button>
            </Link>
              </form>

<Offline>
              <Table striped bordered hover variant="dark" responsive>

                    <thead>
                    <tr><th>OFFLINE RESULTS</th>

  </tr>
                      <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Created Date</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.offlineUser.map((users, index)=> (
                      <tr key ={index}>
                        <td >{users.id} <Spinner animation="grow" variant="warning" size="sm"/></td>
                        <td >{users.Code}</td>
                        <td >{users.createdDate}</td>
                        </tr>
                    ))}


                        </tbody>
                      </Table>
  </Offline>
  <Table striped bordered hover variant="dark" responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>

    {this.state.user.map((users, index)=> (
      <tr key ={index}>
        <td >{users.Id}</td>
        <td >{users.Code}</td>
        <td >{users.createdDate}</td>
        </tr>
    ))}


        </tbody>
      </Table>
    </div>
  )
}
}

export default ListPage

 
