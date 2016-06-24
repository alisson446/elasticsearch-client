const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_reindexWorkspaceTasks/tasks');

exports.reindexWorkspaceTasks = function(workspaceId) {
  firebaseQueueRef.push({ 
  	payload: {
  		workspaceId: workspaceId
  	} 
  });
};