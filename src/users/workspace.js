'use strict';

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

exports.removeWorkspace = function(userId, workspaceId) {
  firebaseQueueRef.push({
    action: 'remove_workspace',
    type: 'REMOVE_TASK_USER_WORKSPACE',
    payload: {
      userId: userId,
      workspaceId: workspaceId,
    }
  });
};