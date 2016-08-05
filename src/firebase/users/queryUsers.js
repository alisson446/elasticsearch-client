'use strict';

const firebase = require('./../../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_queryUsers/tasks');

exports.searchUsers = function(params) {
  firebaseQueueRef.push(params);
};