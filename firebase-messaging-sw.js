//importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBVXG4UfDmB_YPDu8qAnjgyYJuhvgM2VPg",
    authDomain: "inplemap-4b394.firebaseapp.com",
    projectId: "inplemap-4b394",
    storageBucket: "inplemap-4b394.appspot.com",
    messagingSenderId: "246253828554",
    appId: "1:246253828554:web:f79a8d91a9ef042df93733",
    measurementId: "G-SLGEE28FCJ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(); //token 값 알아내기

// Add the public key generated from the console here.
//messaging.usePublicVapidKey("");

messaging.requestPermission()
.then(function(permission){
	console.log(permission + " : Have permission");
	return messaging.getToken();
})
.then(function(token){
	console.log('token : ' + token);
	//$('#_token').html(token);
	document.getElementById('_token').innerHTML = token;
	//$('#_token').html(token);
})
.catch(function(arr){
	console.log("Error Occured");
	console.log(arr);
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){

    const title = "Hello World";
    const options = {
            body: payload.data.status
    };

    console.log(payload);
    return self.registration.showNotification(title,options);
});
