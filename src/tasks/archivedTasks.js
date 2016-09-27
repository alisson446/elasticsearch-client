'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.setArchived = function(taskPath) {
  firebaseQueueRef.push({
    action: 'set_archived',
    type: 'SET_TASK_ARCHIVED',
    payload: {
      path: taskPath
    }
  });
};

exports.setUnArchived = function(taskPath) {
  firebaseQueueRef.push({
    action: 'set_unarchived',
    type: 'SET_TASK_UNARCHIVED',
    payload: {
      path: taskPath
    }
  });
};