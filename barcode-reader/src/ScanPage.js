import React, { Component } from "react";

import javascriptBarcodeReader from 'javascript-barcode-reader'
class ScanPage extends Component {
constructor(props){
  super(props);
  this.state={
    image:"",
  }
  this.onChanged = this.onChanged.bind(this);
}
onChanged(event){
  this.setState({image:event.target.value});
  console.log(event.target.value)
let image = document.getElementById('uploadImage').files[0];

  javascriptBarcodeReader(
<image src="/static-resources/menu.png"/>,/* Image ID || HTML5 Image || HTML5 Canvas || HTML5 Canvas ImageData || Image URL */
{
barcode: 'code-2of5',
type: 'industrial', //optional type
}
)
.then(code => {
console.log(code)
alert(code);
})
.catch(err => {

console.log(err)
})

}
  render() {

    return (
      <div>


       <input id="uploadImage" type="file" accept="image/bmp,image/jpeg,image/png,image/gif"  onChange={this.onChanged}/>

        </div>
      );
    }
  }



export default ScanPage;
