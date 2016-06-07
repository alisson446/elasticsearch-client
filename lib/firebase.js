const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyCRV3VHH_AqjCxp76BiaVR4nVOvY25gAuE",
  authDomain: "tasking-dev-alisson.firebaseapp.com",
  databaseURL: "https://tasking-dev-alisson.firebaseio.com",
  serviceAccount: "./serviceAccount.json"
});

module.exports = firebase;

