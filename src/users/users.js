const firebase = require('./../../lib/firebase');
const fbSyncUsers = require('./../firebase/users/users').fbSyncUsers;
const fbUnsyncUsers = require('./../firebase/users/users').fbUnsyncUsers;

const firebaseQueueRef = firebase.database().ref('_indexUsers/tasks');

exports.elSyncUsers = function(path) {  
  fbSyncUsers(path,
    (snap) => {
      console.log('create', snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'add',
        type: 'ADD_USER',
        userId: snap.key,
        payload: snap.val()
      });
    },
    (snap) => {
      console.log('update', snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'update',
        type: 'CHANGE_USER',
        userId: snap.key,
        payload: snap.val()
      });
    },
    (snap) => {
      console.log('remove', snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'remove',
        type: 'REMOVE_USER',
        userId: snap.key
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