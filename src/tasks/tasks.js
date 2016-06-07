const firebase = require('./../../lib/firebase');
const fbSyncTasks = require('./../firebase/tasks/tasks').fbSyncTasks;
const fbUnsyncTasks = require('./../firebase/tasks/tasks').fbUnsyncTasks;

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.elSyncTasks = function(path) {  
  const arrPath = path.split('/');
  const workspaceId = arrPath[1];

  fbSyncTasks(path,
    (snap) => {
      console.log('create', workspaceId, snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'add',
        type: 'ADD_TASK',
        workspaceId: workspaceId,
        taskId: snap.key,
        payload: snap.val()
      });
    },
    (snap) => {
      console.log('update', workspaceId, snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'update',
        type: 'CHANGE_TASK',
        workspaceId: workspaceId,
        taskId: snap.key,
        payload: snap.val()
      });
    },
    (snap) => {
      console.log('remove', workspaceId, snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'remove',
        type: 'REMOVE_TASK',
        workspaceId: workspaceId,
        taskId: snap.key
      });
    }
  );
}

exports.elUnsyncTasks = function() {
  fbUnsyncTasks(
    (snap) => {},
    (snap) => {},
    (snap) => {}
  );
}