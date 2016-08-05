'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_removeWorkspaceIndexes/tasks');

exports.removeWorkspaceIndex = function(workspaceId) {
  firebaseQueueRef.push({ 
  	payload: {
  		workspaceId: workspaceId
  	} 
  });
};