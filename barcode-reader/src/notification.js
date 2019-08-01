import React, { Component } from "react";
const options = {
  body: 'First notification!',
  icon: 'images/notification-flat.png',
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
      reg.showNotification('Hello world!', options);
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
