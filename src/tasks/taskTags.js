const firebase = require('./../../lib/firebase');
const fbSyncTaskTags = require('./../firebase/tasks/taskTags').fbSyncTaskTags;
const fbUnsyncTaskTags = require('./../firebase/tasks/taskTags').fbUnsyncTaskTags;

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.elSyncTaskTags = function(path) {
  const arrPath = path.split('/');
  const workspaceId = arrPath[1];

  fbSyncTaskTags(path,
    (snap) => {
      var arrTaskTags = [];
      snap.forEach((childSnap) => {
        arrTaskTags.push(childSnap.key);
      });

      firebaseQueueRef.push({
        action: 'update',
        type: 'ADD_TASK_TAG',
        workspaceId: workspaceId,
        taskId: snap.key,
        payload: { 
          tags: arrTaskTags 
        }
      });
    },
    (snap) => {
      firebaseQueueRef.push({
        action: 'update',
        type: 'REMOVE_TASK_TAG',
        workspaceId: workspaceId,
        taskId: snap.key,
        payload: { tags: snap.val() }
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