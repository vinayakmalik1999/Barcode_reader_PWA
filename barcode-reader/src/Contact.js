import React, { Component } from "react";

class Contact extends Component {
  
  render() {
    return (
      <div>
      <input id="uploadImage" type="file" accept="image/bmp,image/jpeg,image/png,image/gif" onChange={this.onChanged}/>
        </div>
      );
    }
  }



export default Contact;
