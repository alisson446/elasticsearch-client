'use strict';

const firebase = require('./../../../lib/firebase');

const firebaseRef = firebase.database().ref();

var syncListeners = {
  isSyncing: false,
  addListener: false,
  changeListener: false,
  removeListener: false
}

exports.fbSyncUsers = function(path, addListener, changedListener, removedListener) {
  if (!syncListeners.isSyncing) {
    syncListeners.isSyncing = true;
    syncListeners.addListener = firebaseRef.child(path).on('child_added', addListener);
    syncListeners.changeListener = firebaseRef.child(path).on('child_changed', changedListener);
    syncListeners.removeListener = firebaseRef.child(path).on('child_removed', removedListener);
  }
}

exports.fbUnsyncUsers = function(path, addListener, changedListener, removedListener) {
  if (syncListeners.isSyncing) {
    syncListeners.isSyncing = false;
    firebaseRef.child(path).off('child_added', addListener);
    firebaseRef.child(path).off('child_changed', changedListener);
    firebaseRef.child(path).off('child_removed', removedListener);
  }
}

exports.fbAddUser = function(payload) {
  return new Promise((resolve, reject) => {
    const userId = firebaseRef.child('users').push().key;
    payload.id = userId;
    
    const bodyUser = payload;
    const path = 'users/'+userId;

    firebaseRef.child(path).set(bodyUser, (error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}

exports.fbUpdateUser = function(userId, payload) {
  return new Promise((resolve, reject) => {
    payload.id = userId;
    const bodyUser = payload;
    const path = 'users/'+userId;

    firebaseRef.child(path).update(bodyUser, (error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}

exports.fbRemoveUser = function(userId) {
  return new Promise((resolve, reject) => {
    const path = 'users/'+userId;

    firebaseRef.child(path).remove((error) => {
      if(!error) { resolve(); }
      else { reject(); }
    });
  });
}