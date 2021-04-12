  importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');

  // Initialize the Firebase app in the service worker by passing in
  // your app's Firebase config object.
  // https://firebase.google.com/docs/web/setup#config-object
  firebase.initializeApp({
    apiKey: "AIzaSyBVXG4UfDmB_YPDu8qAnjgyYJuhvgM2VPg",
    authDomain: "inplemap-4b394.firebaseapp.com",
    databaseURL: 'https://inplemap-4b394.firebaseio.com',
    projectId: "inplemap-4b394",
    storageBucket: "inplemap-4b394.appspot.com",
    messagingSenderId: "246253828554",
    appId: "1:246253828554:web:f79a8d91a9ef042df93733",
    measurementId: "G-SLGEE28FCJ"
  });


  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});



// Initialize Firebase
function initInSw() {
  console.log('1111')
  // [START messaging_init_in_sw]
  // Give the service worker access to Firebase Messaging.
  // Note that you can only use Firebase Messaging here. Other Firebase libraries
  // are not available in the service worker.
  importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');

  // Initialize the Firebase app in the service worker by passing in
  // your app's Firebase config object.
  // https://firebase.google.com/docs/web/setup#config-object
  firebase.initializeApp({
    apiKey: "AIzaSyBVXG4UfDmB_YPDu8qAnjgyYJuhvgM2VPg",
    authDomain: "inplemap-4b394.firebaseapp.com",
    databaseURL: 'https://inplemap-4b394.firebaseio.com',
    projectId: "inplemap-4b394",
    storageBucket: "inplemap-4b394.appspot.com",
    messagingSenderId: "246253828554",
    appId: "1:246253828554:web:f79a8d91a9ef042df93733",
    measurementId: "G-SLGEE28FCJ"
  });


  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const messaging = firebase.messaging();
  // [END messaging_init_in_sw]
}

function onBackgroundMessage() {
  console.log('2222')
  const messaging = firebase.messaging();

  // [START messaging_on_background_message]
  messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  // [END messaging_on_background_message]
}

