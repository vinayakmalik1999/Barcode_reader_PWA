import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserPage extends Component {
  // Setting initial state

  constructor(props) {
      super(props);
      this.state = {
        user:[]
      }
    }


  //  retrieve data from API
  componentWillMount() {
  axios.get('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList')
  .then(response => {

    this.setState({user:response.data});
  })
  .catch(error => {
    console.log(error);
  });
}




  // Return a table with some data from the API.
  render(){
console.log(this.state)

  return  (
    <div className="container">
    <p>input:

              <input type ="text" name = "email"></input>
                <Link to ="/contact">
              <button className = "button">scan</button>
              </Link>
          </p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
        <tr>
    {this.state.user.map((users, index)=> (
        <td key ={index}>{users.Id}</td>
    ))}
    {this.state.user.map((users, index)=> (
        <td key ={index}>{users.Code}</td>
    ))}
    {this.state.user.map((users, index)=> (
        <td key ={index}>{users.createdDate}</td>
    ))}
            </tr>
        </tbody>
      </table>
    </div>
  )
}
}

export default UserPage

 
