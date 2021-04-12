importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDW-i-BqUA96_WE5BSTt_Pabr-Ri9vtORo",
    authDomain: "juddy-test.firebaseapp.com",
    databaseURL: "https://juddy-test.firebaseio.com",
    projectId: "juddy-test",
    storageBucket: "juddy-test.appspot.com",
    messagingSenderId: "120601746542",
    appId: "1:120601746542:web:222b9d88bdd5edaaab9a7f",
    measurementId: "G-P69P17CW2L"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){

    const title = "Hello World";
    const options = {
            body: payload.data.status
    };

    console.log(payload);
    return self.registration.showNotification(title,options);
});
