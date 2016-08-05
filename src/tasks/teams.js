'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.addTeam = function(workspaceId, taskId, teamId) {
  firebaseQueueRef.push({
    action: 'add_team',
    type: 'ADD_TASK_TEAM',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      teamId: teamId,
    }
  });
};

exports.removeTeam = function(workspaceId, taskId, teamId) {
  firebaseQueueRef.push({
    action: 'remove_team',
    type: 'REMOVE_TASK_TEAM',
    payload: {
      workspaceId: workspaceId,
      taskId: taskId,
      teamId: teamId,
    }
  });
};