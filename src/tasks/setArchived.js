'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.setArchived = function(workspaceId, taskId, taskPath, isArchived) {
  firebaseQueueRef.push({
    action: 'set_archived',
    type: 'SET_TASK_ARCHIVED',
    payload: {
    	workspaceId: workspaceId,
    	taskId: taskId,
      path: taskPath,
      isArchived: isArchived,
    }
  });
};