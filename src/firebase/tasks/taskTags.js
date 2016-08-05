'use strict';

const firebase = require('./../../../lib/firebase');

const firebaseRef = firebase.database().ref();

var syncListeners = {
  isSyncing: false,
  addListener: false,
  removeListener: false
}

exports.fbSyncTaskTags = function(path, addListener, removedListener) {
  if (!syncListeners.isSyncing) {
    syncListeners.isSyncing = true;
    syncListeners.addListener = firebaseRef.child(path).on('child_added', addListener);
    syncListeners.removeListener = firebaseRef.child(path).on('child_removed', removedListener);
  }
}

exports.fbUnsyncTaskTags = function(path, addListener, changedListener, removedListener) {
  if (syncListeners.isSyncing) {
    syncListeners.isSyncing = false;
    firebaseRef.child(path).off('child_added', addListener);
    firebaseRef.child(path).off('child_removed', removedListener);
  }
}

exports.fbAddTaskTags = function(workspaceId, taskId, tagIds) {
  return new Promise((resolve, reject) => {
    const body = {};
    const path = 'taskTags/'+workspaceId+'/'+taskId;

    tagIds.forEach((childTagsId) => {
      body[childTagsId] = true;
    });

    firebaseRef.child(path).set(body, (error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}

exports.fbRemoveTaskTag = function(workspaceId, taskId, tagId) {
  return new Promise((resolve, reject) => {
    const path = 'taskTags/'+workspaceId+'/'+taskId+'/'+tagId;

    firebaseRef.child(path).remove((error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}