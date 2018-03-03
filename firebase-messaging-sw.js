importScripts("https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.10.1/firebase-messaging.js");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcgLN_cvLBeogH99FkLtfbgnWcNZflUD0",
    authDomain: "gm-ofmcap.firebaseapp.com",
    databaseURL: "https://gm-ofmcap.firebaseio.com",
    projectId: "gm-ofmcap",
    storageBucket: "gm-ofmcap.appspot.com",
    messagingSenderId: "1076360631057"
  };
  firebase.initializeApp(config);
  
  // Retrieve Firebase Messaging object.
	const messaging = firebase.messaging();
	
	messaging.setBackgroundMessageHandler(function(payload){
		const title = 'Golgota Młodych';
		const options = {
			body: payload.data.status
		};
		return self.registration.shhowNotification(title, options);
	)};