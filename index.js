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

const removeWorkspaceIndex = require('./src/tasks/removeWorkspaceIndex').removeWorkspaceIndex;
const reindexWorkspaceTasks = require('./src/tasks/reindexWorkspace').reindexWorkspaceTasks;

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
  title: 'firstTask',
  dueDate: Date.now(),
  startDate: Date.now()
};

const newUser = {
	displayName: 'user',
	email: 'newUser@user.com'
};

const queryParamsTasks = {
  workspaceId: '1',
  scopeId: '123',
  path: '1_1.2',
  title: 'firsttask',
  tags: ['1', '2']
};

const queryParamsUsers = {
  queryString: 'wuser',
  workspaceId: 1
};

const pathTask1 = 'tasks/1';
const pathTask2 = 'tasks/2';
const pathTaskTags = 'taskTags/1';
const pathTaskTeams = 'taskTeams/1';
const pathTaskFollowers = 'taskFollowers/1';
const pathTaskAssignees = 'taskAssignees/1';

const pathUser = 'users';
const pathUserWorkspaces = 'userWorkspaces';

// elSyncTasks(pathTask1);
// elSyncTasks(pathTask2);
// fbAddTask(2, newTask);
// fbUpdateTask(1, '-KJH5GUa9XP5Iya48HVU', newTask);
// fbRemoveTask(1, '-KJH5GUa9XP5Iya48HVU');
searchTasks(queryParamsTasks);

// elSyncTaskTags(pathTaskTags);
// fbAddTaskTags(1, '-KJHBYonLsS8elSl99Qh', ['best', 'faster']);
// addTag('-KJHBYonLsS8elSl99Qh', '1');
// removeTag('-KJHBYonLsS8elSl99Qh', '1');

// addTeam('-KJHBYonLsS8elSl99Qh', '1');
// removeTeam('-KJHBYonLsS8elSl99Qh', '1');

// removeWorkspaceIndex('1');
// reindexWorkspaceTasks('1');

// -------------------- users --------------------

// elSyncUsers(pathUser);
// fbAddUser(newUser);
// searchUsers(queryParamsUsers);

// elSyncUserWorkspaces(pathUserWorkspaces);
// fbAddUserWorkspaces('-KJHMPsqEZqM_y8EBzKo', ['1', '2']);
// addWorkspace('-KJHMPsqEZqM_y8EBzKo', '3');
// removeWorkspace('-KJHMPsqEZqM_y8EBzKo', '3');