const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.addTag = function(taskId, tagId) {
  firebaseQueueRef.push({
    action: 'add_tag',
    type: 'ADD_TASK_TAG',
    payload: {
      taskId: taskId,
      tagId: tagId,
    }
  });
};

exports.removeTag = function(taskId, tagId) {
  firebaseQueueRef.push({
    action: 'remove_tag',
    type: 'REMOVE_TASK_TAG',
    payload: {
      taskId: taskId,
      tagId: tagId,
    }
  });
};