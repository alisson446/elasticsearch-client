'use strict';

const firebase = require('./../../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_queryTasks/tasks');

exports.searchTasks = function(params) {
  firebaseQueueRef.push(params);
};