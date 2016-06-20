const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.addTeam = function(taskId, teamId) {
  firebaseQueueRef.push({
    action: 'add_team',
    type: 'ADD_TASK_TEAM',
    payload: {
      taskId: taskId,
      teamId: teamId,
    }
  });
};

exports.removeTeam = function(taskId, teamId) {
  firebaseQueueRef.push({
    action: 'remove_team',
    type: 'REMOVE_TASK_TEAM',
    payload: {
      taskId: taskId,
      teamId: teamId,
    }
  });
};