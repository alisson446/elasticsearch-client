const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexUsers/tasks');

exports.addWorkspace = function(userId, workspaceId) {
  firebaseQueueRef.push({
    action: 'add_workspace',
    type: 'ADD_TASK_USER_WORKSPACE',
    payload: {
      userId: userId,
      workspaceId: workspaceId,
    }
  });
};