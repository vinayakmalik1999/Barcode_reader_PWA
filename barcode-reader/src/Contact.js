import React, { Component } from "react";

class Contact extends Component {
  onChanged() {
        let image = document.getElementById('uploadImage').files[0];
        if (!image) {
            alert('Please add an image');
            return;
        }
        window.reader.decodeFileInMemory(image).then(function(results){
            var txts = [];
            for(var i=0;i<results.length;++i){
                txts.push(results[i].BarcodeText);
            }
            alert(txts.join("\n"));
        }).catch(ex => {
            alert('error:' + (ex.message || ex));
        });
    }
  render() {
    return (
      <div>
      <input id="uploadImage" type="file" accept="image/bmp,image/jpeg,image/png,image/gif" onChange={this.onChanged}/>
        </div>
      );
    }
  }

    

export default Contact;
