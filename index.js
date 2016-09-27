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
const removeTagAll = require('./src/tasks/tags').removeTagAll;
const addTeam = require('./src/tasks/teams').addTeam;
const removeTeam = require('./src/tasks/teams').removeTeam;
const removeTeamAll = require('./src/tasks/teams').removeTeamAll;
const addFollower = require('./src/tasks/followers').addFollower;
const removeFollower = require('./src/tasks/followers').removeFollower;
const removeFollowerAll = require('./src/tasks/followers').removeFollowerAll;
const addAssignee = require('./src/tasks/assignees').addAssignee;
const removeAssignee = require('./src/tasks/assignees').removeAssignee;
const removeAssigneeAll = require('./src/tasks/assignees').removeAssigneeAll;

const setArchived = require('./src/tasks/archivedTasks').setArchived;
const setUnArchived = require('./src/tasks/archivedTasks').setUnArchived;

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
  title: 'testando',
  dueDate: Date.now(),
  startDate: Date.now()
};

const newUser = {
	displayName: 'user',
	email: 'newUser@user.com'
};

const queryParamsTasks = {
  workspaceId: '-KOpzaoE0ZtYemjc4rH3',
  scopeId: '-KOpzaoE0ZtYemjc4rH3',
  path: '-KOpzaoE0ZtYemjc4rH3',
  title: 'testando',
  tags: ['-Tag1'],
  teams: ['-Team1', '-Team2']
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
// fbAddTask('-KOpzaoE0ZtYemjc4rH3', newTask, '-KOpzaoE0ZtYemjc4rH3');
// fbUpdateTask(1, '-KJH5GUa9XP5Iya48HVU', newTask);
// fbRemoveTask(1, '-KJH5GUa9XP5Iya48HVU');
searchTasks(queryParamsTasks);

// elSyncTaskTags(pathTaskTags);
// fbAddTaskTags('-KNPHQqnCBrigglz2esN', '-KNPI2ZwxcYWSjdJSMtC', ['-Tag1', '-Tag2']);

// addTag('-KOpzaoE0ZtYemjc4rH3', '-KOq0SAoLiKUiLLIA4lJ', '-Tag1');
// removeTag('-KOpzaoE0ZtYemjc4rH3', '-KNPI2ZwxcYWSjdJSMtC', '-Tag1');
// removeTagAll('-KOpzaoE0ZtYemjc4rH3', '-Tag1');
// addTeam('-KOpzaoE0ZtYemjc4rH3', '-KOq0T0soUk7iI3ob1lw', '-Team1');
// removeTeam('-KOpzaoE0ZtYemjc4rH3', '-KNPI2ZwxcYWSjdJSMtC', '-Team1');
// removeTeamAll('-KOpzaoE0ZtYemjc4rH3', '-Team1');
// addFollower('-KOpzaoE0ZtYemjc4rH3', '-KNPI2ZwxcYWSjdJSMtC', '-Follower1');
// removeFollower('-KOpzaoE0ZtYemjc4rH3', '-KNPI2ZwxcYWSjdJSMtC', '-Follower1');
// removeFollowerAll('-KOpzaoE0ZtYemjc4rH3', '-Follower1');
// addAssignee('-KOpzaoE0ZtYemjc4rH3', '-KNPI2ZwxcYWSjdJSMtC', '-Assignee1');
// removeAssignee('-KOpzaoE0ZtYemjc4rH3', '-KNPI2ZwxcYWSjdJSMtC', '-Assignee1');
// removeAssigneeAll('-KOpzaoE0ZtYemjc4rH3', '-Assignee1');

// removeWorkspaceIndex('1');
// reindexWorkspaceTasks('-KOpzaoE0ZtYemjc4rH3');

// setArchived('-KOpzaoE0ZtYemjc4rH3');
// setUnArchived('-KOpzaoE0ZtYemjc4rH3');

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