import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

export default function UserPage(props) {
  // Setting initial state
  const initialUserState = {
    user: {},
    loading: true,
  }


  const [user, setUser] = useState(initialUserState)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getUser = async () => {

      const { data } = await axios(`https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList`)
      console.log(data);
      // Update state
      setUser(data)
    }

    // Invoke the async function
    getUser()
  }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop
var rows =[];

for(var i=0;i<user.length;i++){
  rows.push(<td>{user[i].Id}</td>);
  rows.push(<td>{user[i].Code}</td>);
    rows.push(<td>{user[i].createdDate}</td>);
}

  // Return a table with some data from the API.
  return user.loading ? (

    <div>
    <p>input:
              <input type ="text" name = "email"></input>
              <button class = "button">scan</button>
          </p>
    Loading......
    </div>
  ) : (
    <div className="container">
    <p>input:
              <input type ="text" name = "email"></input>
              <button class = "button">scan</button>
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
            {rows}
            </tr>
        </tbody>
      </table>
    </div>
  )
}

 
