'use strict';

const firebase = require('./../../lib/firebase');
const fbSyncUsers = require('./../firebase/users/users').fbSyncUsers;
const fbUnsyncUsers = require('./../firebase/users/users').fbUnsyncUsers;

const firebaseQueueRef = firebase.database().ref('_indexUsers/tasks');

exports.elSyncUsers = function(path) {  
  fbSyncUsers(path,
    (snap) => {
      const payloadVal = snap.val();
      payloadVal.userId = snap.key;

      console.log('create', snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'create',
        type: 'ADD_USER',
        payload: payloadVal
      });
    },
    (snap) => {
      const payloadVal = snap.val();
      payloadVal.userId = snap.key;

      console.log('update', snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'update',
        type: 'CHANGE_USER',
        payload: payloadVal
      });
    },
    (snap) => {
      console.log('remove', snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'remove',
        type: 'REMOVE_USER',
        payload: {
          userId: snap.key
        }
      });
    }
  );
}

exports.elUnsyncUsers = function() {
  fbUnsyncUsers(
    (snap) => {},
    (snap) => {},
    (snap) => {}
  );
}