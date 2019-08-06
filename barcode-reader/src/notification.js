import React, { Component } from "react";
const options = {
  body: 'Thank you for Downloading the App!',
  icon: '/static-resources/barcode192x192.png',
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
  },

  // TODO 2.5 - add actions to the notification

  // TODO 5.1 - add a tag to the notification

};
Notification.requestPermission((status) => {
  console.log('Notification permission status:', status);
  if (Notification.permission === 'granted') {
    if('serviceWorker' in Navigator){
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Welcome!', options);
    });
  }
  }
});
export default class Notifications extends Component {
render(){
  return(
    <div></div>
  )
}

}
