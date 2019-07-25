import React, { Component } from "react"
import axios from 'axios'
import OfflineBanner from './components/OfflineBanner.js'
import { Offline, Online } from 'react-detect-offline'

export default class CeleroListPage extends Component {
  // Setting initial state

  constructor(props) {
      super(props);
      this.state = {
        user:[],

      }
      //Important : you need to bind this(value in constructor) to the handler to use it in handler function

    }
    componentWillMount() {
    axios.get('https://api.dev.celeroerp.com/api/Settings/Site/GetActiveSiteList'
)
    .then(response => {

      this.setState({user:response.data});
      console.log(this.state.user[0].Text)
      alert(this.state.user)
    })
    .catch(error => {
      //not super required as it is handeled by the service worker, makes things a little smoother though
      return(<div>
        {error}
</div>
      )


    });
  }
  render(){
    return(
      <Offline>
        <OfflineBanner/>
        </Offline>

    )
  }
}
