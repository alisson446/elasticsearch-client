'use strict';

const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.moveTask = function(workspaceId, taskId, currentPath, nextPath) {
  firebaseQueueRef.push({ 
  	action: 'move',
  	payload: {
  		workspaceId: workspaceId,
  		taskId: taskId,
  		currentPath: currentPath,
  		nextPath: nextPath
  	} 
  });
};