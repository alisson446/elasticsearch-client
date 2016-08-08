const firebase = require('firebase');

firebase.initializeApp({
  apiKey: 'AIzaSyDRIH8rHFDz1ptflH6aHP7WKstJ85SaDy0',
  authDomain: 'tasking-dev-app.firebaseapp.com',
  databaseURL: 'https://tasking-dev-app.firebaseio.com',
  serviceAccount: "./serviceAccount.json"
});

module.exports = firebase;

