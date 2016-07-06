const firebase = require('./../../lib/firebase');

const firebaseQueueRef = firebase.database().ref('_indexTasks/tasks');

exports.moveTask = function(currentPath, nextPath) {
  firebaseQueueRef.push({ 
  	action: 'move',
  	payload: {
  		currentPath: currentPath,
  		nextPath: nextPath
  	} 
  });
};