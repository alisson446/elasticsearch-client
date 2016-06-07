const firebase = require('./../../../lib/firebase');

const firebaseRef = firebase.database().ref();

var syncListeners = {
  isSyncing: false,
  addListener: false,
  changeListener: false,
  removeListener: false
}

exports.fbSyncTasks = function(path, addListener, changedListener, removedListener) {
  if (!syncListeners.isSyncing) {
    syncListeners.isSyncing = true;
    syncListeners.addListener = firebaseRef.child(path).on('child_added', addListener);
    syncListeners.changeListener = firebaseRef.child(path).on('child_changed', changedListener);
    syncListeners.removeListener = firebaseRef.child(path).on('child_removed', removedListener);
  }
}

exports.fbUnsyncTasks = function(path, addListener, changedListener, removedListener) {
  if (syncListeners.isSyncing) {
    syncListeners.isSyncing = false;
    firebaseRef.child(path).off('child_added', addListener);
    firebaseRef.child(path).off('child_changed', changedListener);
    firebaseRef.child(path).off('child_removed', removedListener);
  }
}

exports.fbAddTask = function(workspaceId, payload) {
  return new Promise((resolve, reject) => {
    const taskId = firebaseRef.child('tasks/'+workspaceId).push().key;
    payload.id = taskId;
    
    const bodyTask = payload;
    const path = 'tasks/'+workspaceId+'/'+taskId;

    firebaseRef.child(path).set(bodyTask, (error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}

exports.fbUpdateTask = function(workspaceId, taskId, payload) {
  return new Promise((resolve, reject) => {
    payload.id = taskId;
    const bodyTask = payload;
    const path = 'tasks/'+workspaceId+'/'+taskId;

    firebaseRef.child(path).update(bodyTask, (error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}

exports.fbRemoveTask = function(workspaceId, taskId) {
  return new Promise((resolve, reject) => {
    const path = 'tasks/'+workspaceId+'/'+taskId;

    firebaseRef.child(path).remove((error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}