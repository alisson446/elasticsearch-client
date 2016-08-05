'use strict';

const firebase = require('./../../lib/firebase');
const fbSyncUserWorkspaces = require('./../firebase/users/userWorkspaces').fbSyncUserWorkspaces;
const fbUnsyncUserWorkspaces = require('./../firebase/users/userWorkspaces').fbUnsyncUserWorkspaces;

const firebaseQueueRef = firebase.database().ref('_indexUsers/tasks');

exports.elSyncUserWorkspaces = function(path) {
  fbSyncUserWorkspaces(path,
    (snap) => {
      var arrUserWorkspaces = [];
      snap.forEach((childSnap) => {
        arrUserWorkspaces.push(childSnap.key);
      });

      firebaseQueueRef.push({
        action: 'update',
        type: 'ADD_TASK_USER_WORKSPACE',
        payload: { 
          workspaces: arrUserWorkspaces,
          userId: snap.key
        }
      });
    },
    (snap) => {
      firebaseQueueRef.push({
        action: 'update',
        type: 'REMOVE_USER_WORKSPACE',
        payload: { 
          workspaces: snap.val(), 
          userId: snap.key
        }
      });
    }
  );
}

exports.elUnsyncUserWorkspaces = function() {
  fbUnsyncUserWorkspaces(
    (snap) => {},
    (snap) => {},
    (snap) => {}
  );
}