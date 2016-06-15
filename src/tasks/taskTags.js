const firebase = require('./../../lib/firebase');
const fbSyncTaskTags = require('./../firebase/tasks/taskTags').fbSyncTaskTags;
const fbUnsyncTaskTags = require('./../firebase/tasks/taskTags').fbUnsyncTaskTags;

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.elSyncTaskTags = function(path) {
  fbSyncTaskTags(path,
    (snap) => {
      var arrTaskTags = [];
      snap.forEach((childSnap) => {
        arrTaskTags.push(childSnap.key);
      });

      firebaseQueueRef.push({
        action: 'update',
        type: 'ADD_TASK_TAG',
        payload: { 
          tags: arrTaskTags,
          taskId: snap.key
        }
      });
    },
    (snap) => {
      firebaseQueueRef.push({
        action: 'update',
        type: 'REMOVE_TASK_TAG',
        payload: { 
          tags: snap.val(),
          taskId: snap.key
        }
      });
    }
  );
}

exports.elUnsyncTaskTags = function() {
  fbUnsyncTaskTags(
    (snap) => {},
    (snap) => {},
    (snap) => {}
  );
}