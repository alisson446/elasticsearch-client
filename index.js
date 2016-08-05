'use strict';

const elSyncTasks = require('./src/tasks/tasks').elSyncTasks;
const fbAddTask = require('./src/firebase/tasks/tasks').fbAddTask;
const fbUpdateTask = require('./src/firebase/tasks/tasks').fbUpdateTask;
const fbRemoveTask = require('./src/firebase/tasks/tasks').fbRemoveTask;
const searchTasks = require('./src/firebase/tasks/queryTasks').searchTasks;

const elSyncTaskTags = require('./src/tasks/taskTags').elSyncTaskTags;
const fbAddTaskTags = require('./src/firebase/tasks/taskTags').fbAddTaskTags;
const fbRemoveTaskTag = require('./src/firebase/tasks/taskTags').fbRemoveTaskTag;
const addTag = require('./src/tasks/tags').addTag;
const removeTag = require('./src/tasks/tags').removeTag;
const addTeam = require('./src/tasks/teams').addTeam;
const removeTeam = require('./src/tasks/teams').removeTeam;
const addFollower = require('./src/tasks/followers').addFollower;
const removeFollower = require('./src/tasks/followers').removeFollower;
const addAssignee = require('./src/tasks/assignees').addAssignee;
const removeAssignee = require('./src/tasks/assignees').removeAssignee;

const setArchived = require('./src/tasks/setArchived').setArchived;

const removeWorkspaceIndex = require('./src/tasks/removeWorkspaceIndex').removeWorkspaceIndex;
const reindexWorkspaceTasks = require('./src/tasks/reindexWorkspace').reindexWorkspaceTasks;

const fbMoveTasks = require('./src/firebase/tasks/fbMoveTasks').fbMoveTasks;
const moveTask = require('./src/tasks/move').moveTask;

const elSyncUsers = require('./src/users/users').elSyncUsers;
const fbAddUser = require('./src/firebase/users/users').fbAddUser;
const fbUpdateUser = require('./src/firebase/users/users').fbUpdateUser;
const fbRemoveUser = require('./src/firebase/users/users').fbRemoveUser;
const searchUsers = require('./src/firebase/users/queryUsers').searchUsers;

const elSyncUserWorkspaces = require('./src/users/userWorkspaces').elSyncUserWorkspaces;
const fbAddUserWorkspaces = require('./src/firebase/users/userWorkspaces').fbAddUserWorkspaces;
const fbRemoveUserWorkspace = require('./src/firebase/users/userWorkspaces').fbRemoveUserWorkspace;
const addWorkspace = require('./src/users/workspace').addWorkspace;
const removeWorkspace = require('./src/users/workspace').removeWorkspace;

const newTask = {
  path: '1_1.2_1.2.3',
  title: 'TéstTãsk',
  dueDate: Date.now(),
  startDate: Date.now()
};

const newUser = {
	displayName: 'user',
	email: 'newUser@user.com'
};

const queryParamsTasks = {
  workspaceId: '-KNPHQqnCBrigglz2esN',
  scopeId: '-KNPHQqnCBrigglz2esN',
  path: '-KNPHQqnCBrigglz2esN',
  title: 'sk',
};

const queryParamsUsers = {
  queryString: 'wuser',
  workspaceId: 1
};

const pathTask1 = 'tasks/-KNPHQqnCBrigglz2esN';
const pathTask2 = 'tasks/2';
const pathTaskTags = 'taskTags/1';
const pathTaskTeams = 'taskTeams/1';
const pathTaskFollowers = 'taskFollowers/1';
const pathTaskAssignees = 'taskAssignees/1';

const pathUser = 'users';
const pathUserWorkspaces = 'userWorkspaces';

// elSyncTasks(pathTask1);
// elSyncTasks(pathTask2);
// fbAddTask('-KNPHQqnCBrigglz2esN', newTask, '-KNPHQqnCBrigglz2esN');
// fbUpdateTask(1, '-KJH5GUa9XP5Iya48HVU', newTask);
// fbRemoveTask(1, '-KJH5GUa9XP5Iya48HVU');
searchTasks(queryParamsTasks);

// elSyncTaskTags(pathTaskTags);
// fbAddTaskTags('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', ['-Tag1', '-Tag2']);

// addTag('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Tag1');
// removeTag('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Tag1');
// addTeam('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Team1');
// removeTeam('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Team1');
// addFollower('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Follower1');
// removeFollower('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Follower1');
// addAssignee('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Assignee1');
// removeAssignee('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-Assignee1');

// removeWorkspaceIndex('1');
// reindexWorkspaceTasks('-KNPHQqnCBrigglz2esN');

// setArchived('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', '-KNPHQqnCBrigglz2esN|-KNPI2ZwxcYWSjdJSMtC', true);

// fbMoveTasks('-KNPHQqnCBrigglz2esN/-KNPI2ZwxcYWSjdJSMtC', '-KOBd1CjiLOH-gIa8laf', '-KOBd1CjiLOH-gIa8laf/-KOBdBShgKyMPaMHxJP2');
// moveTask('-KOBd1CjiLOH-gIa8laf', '-KOBdBShgKyMPaMHxJP2', '-KNPHQqnCBrigglz2esN|-KNPI2ZwxcYWSjdJSMtC', '-KOBd1CjiLOH-gIa8laf|-KOBdBShgKyMPaMHxJP2');

// -------------------- users --------------------

// elSyncUsers(pathUser);
// fbAddUser(newUser);
// searchUsers(queryParamsUsers);

// elSyncUserWorkspaces(pathUserWorkspaces);
// fbAddUserWorkspaces('-KOHLNytNnbWf-ln9tdK', ['-Workspace1', '-Workspace2']);
// addWorkspace('-KOHLNytNnbWf-ln9tdK', '-Workspace1');
// removeWorkspace('-KOHLNytNnbWf-ln9tdK', '-Workspace2');