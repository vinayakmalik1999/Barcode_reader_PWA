import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {
  // Setting initial state

  constructor(props) {
      super(props);
      this.state = {
        user:[],
        formValue:''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  //  retrieve data from API
  componentWillMount() {
  axios.get('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList')
  .then(response => {

    this.setState({user:response.data});
  })
  .catch(error => {
    return caches.match('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList')
    .then(response =>{
      this.setState({user:response.data});
    })

  });
}

handleSubmit(event){
  event.preventDefault();
if(this.state.formValue === ''){
  alert("please enter a value");
return;
}
//send data to API
  axios.post('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/Post',
  {
    Code:this.state.formValue
  })
     .then(res => {
       console.log(res);
       console.log(res.data);
     })
     .catch(error => {
       navigator.serviceWorker.controller.postMessage(this.state.formValue)
       console.log("Offline sending data to SW");
     })


}
handleChange(event){
  this.setState({formValue:event.target.value})
}


  // Return a table with some data from the API.
  render(){


  return  (
    <div className="container">
    input:
            <form onSubmit ={this.handleSubmit}>
              <input type ="string" value = {this.state.formValue} onChange={this.handleChange}/>
              <button type="submit">Add</button>
              </form>
                <Link to ="/contact">
              <button className = "button">Scan</button>
              </Link>


      <table>
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
      </table>
    </div>
  )
}
}

export default UserPage

 
