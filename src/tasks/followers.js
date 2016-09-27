'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.addFollower = function(workspaceId, taskId, followerId) {
  firebaseQueueRef.push({
    action: 'add_follower',
    type: 'ADD_TASK_FOLLOWER',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      followerId: followerId,
    }
  });
};

exports.removeFollower = function(workspaceId, taskId, followerId) {
  firebaseQueueRef.push({
    action: 'remove_follower',
    type: 'REMOVE_TASK_FOLLOWER',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      followerId: followerId,
    }
  });
};

exports.removeFollowerAll = function(workspaceId, followerId) {
  firebaseQueueRef.push({
    action: 'remove_follower_all',
    type: 'REMOVE_TASK_FOLLOWER_ALL',
    payload: {
      workspaceId: workspaceId,
      followerId: followerId,
    }
  });
};