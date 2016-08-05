'use strict';

const firebase = require('./../../../lib/firebase');

const firebaseRef = firebase.database().ref();

exports.fbMoveTasks = function(currentPath, nextWorkspaceId, nextPath) {
  return new Promise((resolve, reject) => {
    firebaseRef.child(`tasks/${currentPath}`).once('value', function(snap) {

      const snapVal = snap.val();
      const regexp = new RegExp('/', 'g');
      const newPath = nextPath.replace(regexp, '|');
      snapVal.path = `${newPath}|${snapVal.id}`;

      firebaseRef.child(`tasks/${nextWorkspaceId}/${snapVal.id}`).set(snapVal)
        .then(() => {
          firebaseRef.child(`tasks/${currentPath}`).set(null)
          .then(resolve)
          .catch(reject);
        })
        .catch(reject);

    });
  });
}