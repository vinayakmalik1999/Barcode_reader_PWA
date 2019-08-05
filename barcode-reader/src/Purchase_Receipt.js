import React, { Component } from "react";
import DummyPage from './containers/dummypage'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'



import {ListGroup,Card,InputGroup,FormControl,Button,Table} from 'react-bootstrap'
import axios from 'axios'
var config = {headers:{TenantCode:'offline', 'X-Requested-With': 'XMLHttpRequest'}}
export default class Purchase_Receipt extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data:[],
        isLoading:true,
        formValue:''
      }
      //Important : you need to bind this(value in constructor) to the handler to use it in handler function
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.uat.celeroerp.com/api/Purchase/PurchaseOrder/GetPOForReceving?isDeleted=false&userSiteId=2',config)
    .then(response => {

      this.setState({
        data:response.data,
        isLoading:false
      })

      console.log(this.state.data)

    })
    .catch(error => {
      console.log(error);

    });
  }
  handleChange(event){
    event.preventDefault();
      this.setState({formValue:event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
  if(this.state.formValue === ''){
    alert("please enter a value");
  return;
  }
  //use form value here


  }

  render() {
    return (


      <div>
      <Card  border="light" className="text-center p-3">

        <Card.Body>
          <Card.Title class='title'>Purchase Receipt</Card.Title>


        </Card.Body>

      </Card>






            <Card border="light" className="text-center ">
              <Card.Body >


                <form onSubmit ={this.handleSubmit}>
                  <InputGroup>
                  <FormControl
                  value = {this.state.formValue} onChange={this.handleChange}
         placeholder="Purchase Order No."
         aria-label="Order No."
         aria-describedby="basic-addon2"
       />
       <InputGroup.Append>
           <Button type='submit' variant="outline-dark" >Search</Button>
       </InputGroup.Append>
       </InputGroup>


                  </form>
                  <Table  hover responsive >
                        <thead>
                          {this.state.isLoading?<br/>:<tr>
                            <th>Text</th>
                            <th>Value</th>
                            <th>Vendor Name</th>
                          </tr>
                        }
                        </thead>

                        <tbody>

                          {this.state.data.map((users, index)=> (
                            <tr key ={index}>
                              <td >{users.Text}</td>
                              <td >{users.Value}</td>
                              <td >{users.VendorName}</td>
                              </tr>
                          ))}



                        </tbody>

                      </Table>
                      {this.state.isLoading?
                        <Spinner style={{  color:'#3333'}} animation="border" variant="dark" />:<br/>}




              </Card.Body>
            </Card>






</div>
)
}
}
