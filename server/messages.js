var admin = require('firebase-admin');

var serviceAccount = require('./gm-ofmcap-firebase-adminsdk-re5fn-9b71e12e71.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://gm-ofmcap.firebaseio.com'
});

// This registration token comes from the client FCM SDKs.
var registrationToken = 'diqUxV5W5Rw:APA91bFGZ6XWig9GgUtN6o1TsZaM3jVU67F_n6AJ7Z2d_nlWKcTNziuhVq2NoVeTy0UwnajRjbGTN5pTG8Xb86CD6uJaBfsqJhTsNmTeg_Ypl4Fwk6r4RLFmRSqQr1mr2VT360IWm5jM';

// See documentation on defining a message payload.
var message = {
  notification: {
    title: 'Golgota Młodych',
    body: 'Zapraszamy wszystkich zainteresowanych na Golgotę Młodych',
  },
  webpush: {
    notification: {
      icon: '/icon.png',
    }
  },
  android: {
    ttl: 3600 * 1000,
	priority: 'high',
    notification: {
      color: '#f45342',
	  sound: 'default',
	  clickAction: 'http://www.golgotamlodych.pl/',
	  icon: '/icon.png',
    },
  },
  apns: {
    payload: {
      aps: {
        badge: 42,
      },
    },
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Wiadomość wysłana:', response);
  })
  .catch((error) => {
    console.log('Błąd wysyłania:', error);
  });