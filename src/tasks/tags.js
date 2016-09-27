'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.addTag = function(workspaceId, taskId, tagId) {
  firebaseQueueRef.push({
    action: 'add_tag',
    type: 'ADD_TASK_TAG',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      tagId: tagId,
    }
  });
};

exports.removeTag = function(workspaceId, taskId, tagId) {
  firebaseQueueRef.push({
    action: 'remove_tag',
    type: 'REMOVE_TASK_TAG',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      tagId: tagId,
    }
  });
};

exports.removeTagAll = function(workspaceId, tagId) {
  firebaseQueueRef.push({
    action: 'remove_tag_all',
    type: 'REMOVE_TASK_TAG_ALL',
    payload: {
      workspaceId: workspaceId,
      tagId: tagId,
    }
  });
};