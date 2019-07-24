import React, { Component } from "react"
import axios from 'axios'
export default class CeleroListPage extends Component {
  // Setting initial state

  constructor(props) {
      super(props);
      this.state = {
        user:[],

      }
      //Important : you need to bind this(value in constructor) to the handler to use it in handler function
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
    axios.get('https://api.uat.celeroerp.com/api/Settings/Site/GetActiveSiteList?isDeleted=0&userSiteId=1')
    .then(response => {

      this.setState({user:response.data});
      console.log(this.state.user)
    })
    .catch(error => {
      //not super required as it is handeled by the service worker, makes things a little smoother though
      return(<div>
        {error.message}
</div>
      )


    });
  }
