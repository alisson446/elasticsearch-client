const firebase = require('./../../../lib/firebase');

const firebaseRef = firebase.database().ref();

var syncListeners = {
  isSyncing: false,
  addListener: false,
  removeListener: false
}

exports.fbSyncUserWorkspaces = function(path, addListener, removedListener) {
  if (!syncListeners.isSyncing) {
    syncListeners.isSyncing = true;
    syncListeners.addListener = firebaseRef.child(path).on('child_added', addListener);
    syncListeners.removeListener = firebaseRef.child(path).on('child_removed', removedListener);
  }
}

exports.fbUnsyncUserWorkspaces = function(path, addListener, changedListener, removedListener) {
  if (syncListeners.isSyncing) {
    syncListeners.isSyncing = false;
    firebaseRef.child(path).off('child_added', addListener);
    firebaseRef.child(path).off('child_removed', removedListener);
  }
}

exports.fbAddUserWorkspaces = function(userId, workspaceIds) {
  return new Promise((resolve, reject) => {
    const body = {};
    const path = 'userWorkspaces/'+userId;

    workspaceIds.forEach((childWorkspacesId) => {
      body[childWorkspacesId] = true;
    });

    firebaseRef.child(path).set(body, (error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}

exports.fbRemoveUserWorkspace = function(userId, workspaceId) {
  return new Promise((resolve, reject) => {
    const path = 'userWorkspaces/'+userId+'/'+workspaceId;

    firebaseRef.child(path).remove((error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}