const firebase = require('./../../lib/firebase');
const fbSyncTasks = require('./../firebase/tasks/tasks').fbSyncTasks;
const fbUnsyncTasks = require('./../firebase/tasks/tasks').fbUnsyncTasks;

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.elSyncTasks = function(path) {  
  const arrPath = path.split('/');
  const workspaceId = arrPath[1];

  fbSyncTasks(path,
    (snap) => {
      const payloadVal = snap.val();
      payloadVal.workspaceId = workspaceId;
      payloadVal.taskId = snap.key; 

      console.log('create', workspaceId, snap.key, payloadVal);
      firebaseQueueRef.push({
        action: 'create',
        type: 'ADD_TASK',
        payload: payloadVal
      });
    },
    (snap) => {
      const payloadVal = snap.val();
      payloadVal.workspaceId = workspaceId;
      payloadVal.taskId = snap.key; 

      console.log('update', workspaceId, snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'update',
        type: 'CHANGE_TASK',
        payload: snap.val()
      });
    },
    (snap) => {
      console.log('remove', workspaceId, snap.key, snap.val());
      firebaseQueueRef.push({
        action: 'remove',
        type: 'REMOVE_TASK',
        payload: {
          taskId: snap.key
        }
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