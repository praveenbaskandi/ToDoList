import Realm from 'realm';

// Declare task Schema
class TaskSchema extends Realm.Object {}
TaskSchema.schema = {
  name: 'ToDoTask',
  properties: {
    task: 'string',
    taskId: 'string',
  },
  primaryKey: 'taskId',
};

// Create realm
let realm = new Realm({schema: [TaskSchema], schemaVersion: 1});

// get all the task list
let getAllTasks = () => {
  return realm.objects('ToDoTask');
};

// Add a single task using parameters
let addTask = (_task, _taskId) => {
  realm.write(() => {
    const task = realm.create('ToDoTask', {
      task: _task,
      taskId: _taskId,
    });
  });
};

// Delete task by id
let deleteTask = _taskId => {
  realm.write(() =>
    realm.delete(
      realm.objects('ToDoTask').filter(userObj => userObj.taskId === _taskId),
    ),
  );
};

// Update task by id
let updateTaskById = (_task, _taskId) => {
  realm.write(() => {
    let books = getAllTasks();
    books.map((item, index) => {
      if (item.taskId === _taskId) {
        item.task = _task;
      }
    });
  });
};

// Export the realm
export default realm;

export {getAllTasks, addTask, deleteTask, updateTaskById};
