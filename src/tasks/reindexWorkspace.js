const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_reindexWorkspace/tasks');

exports.reindexWorkspace = function(workspaceIds) {
  const objWorkspaceIds = {};

  workspaceIds.forEach(function (workspaceId) {
    objWorkspaceIds[workspaceId] = true;
  });

  firebaseQueueRef.push(objWorkspaceIds);
};