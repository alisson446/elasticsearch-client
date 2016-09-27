'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.addAssignee = function(workspaceId, taskId, assigneeId) {
  firebaseQueueRef.push({
    action: 'add_assignee',
    type: 'ADD_TASK_ASSIGNEE',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      assigneeId: assigneeId,
    }
  });
};

exports.removeAssignee = function(workspaceId, taskId, assigneeId) {
  firebaseQueueRef.push({
    action: 'remove_assignee',
    type: 'REMOVE_TASK_ASSIGNEE',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      assigneeId: assigneeId,
    }
  });
};

exports.removeAssigneeAll = function(workspaceId, assigneeId) {
  firebaseQueueRef.push({
    action: 'remove_assignee_all',
    type: 'REMOVE_TASK_ASSIGNEE_ALL',
    payload: {
      workspaceId: workspaceId,
      assigneeId: assigneeId,
    }
  });
};