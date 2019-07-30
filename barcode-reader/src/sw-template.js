var FOLDER_NAME = 'post_requests'
var our_db
openDatabase ();
if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

/* custom cache rules*/
workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });
//above this default static caching setup
workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

} else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
workbox.routing.registerRoute(
  'https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/GetList',
  new workbox.strategies.NetworkFirst(),
);
workbox.routing.registerRoute(
  'https://cors-anywhere.herokuapp.com/https://api.uattest.celeroerp.com/api/Settings/Site/GetActiveSiteList?isDeleted=0',
  new workbox.strategies.NetworkFirst(),
);

//Caching is done here !!!
//message recieve handler
//Note:'message' is a keyword, you have to use this keyword. It is a string type
//of keyword.
self.addEventListener('message', function (event) {
  console.log('form data', event.data)

    // receives form data from script.js upon submission
    savePostRequests('https://kt-dev.outsystemscloud.com/PWABack/rest/BarCode/Post', {Code:event.data})
    console.log('post inside fetch runs')

})
function getObjectStore (storeName, mode) {
  // retrieve our object store
  return our_db.transaction(storeName,mode
   ).objectStore(storeName)
}

function savePostRequests (url, payload) {
  // get object_store and save our payload inside it
  var request = getObjectStore(FOLDER_NAME, 'readwrite').add({
    url: url,
    payload: payload,
    method: 'POST'
  })
  request.onsuccess = function (event) {
    console.log('a new pos_ request has been added to indexedb')
  }
  request.onerror = function (error) {
    console.error(error)
  }
}

function openDatabase () {

  var indexedDBOpenRequest = indexedDB.open('offline-form',
  1)
 indexedDBOpenRequest.onupgradeneeded = function () {
   //executes if there's a need to create/update db.
   this.result.createObjectStore(FOLDER_NAME, {
    autoIncrement:  true })
    console.log("IndexedDB Object store created")
 }
  //  execute each time the database is opened.
  indexedDBOpenRequest.onsuccess = function () {
    our_db = this.result
    console.log("IndexedDB creation success")
  }
  indexedDBOpenRequest.onerror = function (error) {
    // error creating IndexedDB
    console.error('IndexedDB creation error:', error)
  }
}
//Note: 'syne' is also a keyword of. It is just check online/offlineUser
// it runs only on offline. sync event
self.addEventListener('sync', function (event) {
  console.log('[ServiceWorker]ONLINE sync event started')
    //tag for sync
  if (event.tag === 'formDataSync') {
  //send data to server
    event.waitUntil(

      sendDataToServer()
      )
  }
})
function sendDataToServer () {
  var savedRequests = []
  getObjectStore(FOLDER_NAME).openCursor().onsuccess = async function (event) {
    var cursor = event.target.result
    console.log("cursor",cursor)
   if (cursor) {
    // Keep moving the cursor forward and collecting saved
    // requests.
    savedRequests.push(cursor.value)
      cursor.continue()
   } else {
     // At this point, we have collected all the post requests in
     // indexedb.
     for (let savedRequest of savedRequests) {
       // send them to the server one after the other
       console.log('saved request', savedRequest)
       var requestUrl = savedRequest.url
       var payload = JSON.stringify(savedRequest.payload)
       var method = savedRequest.method
       var headers = {
         'Content-Type': 'application/json'
       }
       fetch(requestUrl, {
         headers: headers,
         method: method,
         body: payload
       }).then(function (response) {
         console.log('server response', response)
         if (response.status < 400) {
          // If sending the POST request was successful, then
          // remove it from the IndexedDB.
          getObjectStore(FOLDER_NAME,
             'readwrite').clear()
         }
      }).catch(function (error) {
         // This will be triggered if the network is still down.
        // The request will be replayed again
       // the next time the service worker starts up.
       console.error('Send to Server failed:', error)
        // since we are in a catch, it is important an error is
        //thrown,so the background sync knows to keep retrying
        // the send to server
        throw error
      })
     }
    }
  }
}
self.skipWaiting().then(() =>{
  clients.claim();
})
