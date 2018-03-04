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
	
	messaging.requestPermission()
		.then(function() {
		  console.log('Zezwolenie przyznane.');
			return messaging.getToken();
		})
		.then(function(token) {
			console.log(token);
		})
		.catch(function(err) {
		  console.log('Zezwolenie nieprzyznane.', err);
	});
	
	messaging.onMessage(function(payload) {
		console.log('onMessage: ', payload);
	});